from nba_api.stats.endpoints import LeagueDashLineups, CommonTeamRoster
from nba_api.stats.static import players, teams
import pandas as pd
import time
import json
from datetime import datetime
import os
from pathlib import Path
import logging
from time import sleep, time
import hashlib
from functools import wraps

# Set up logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class RateLimiter:
    def __init__(self, min_interval=1.0):
        self.min_interval = min_interval
        self.last_call = time()  # Initialize to current time
    
    def wait(self):
        current_time = time()
        elapsed = current_time - self.last_call
        if elapsed < self.min_interval:
            sleep_time = self.min_interval - elapsed
            # Update last_call before sleeping to prevent drift
            self.last_call = current_time + sleep_time
            logger.debug(f"Rate limiting: sleeping for {sleep_time:.2f} seconds")
            sleep(sleep_time)
        else:
            self.last_call = current_time

def cache_nba_request(rate_limiter):
    """Decorator to cache NBA API requests with rate limiting"""
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Create cache directory if it doesn't exist
            cache_dir = Path('nba_cache')
            cache_dir.mkdir(exist_ok=True)
            
            # Create a unique cache key based on function name and all arguments
            cache_key = f"{func.__name__}_{str(args)}_{str(sorted(kwargs.items()))}"
            cache_filename = hashlib.md5(cache_key.encode()).hexdigest() + '.json'
            cache_path = cache_dir / cache_filename
            
            # Try to load from cache first
            if cache_path.exists():
                try:
                    with open(cache_path, 'r') as f:
                        cached_data = json.load(f)
                        logger.debug(f"Cache hit for {func.__name__}")
                        # Convert back to DataFrame if necessary
                        if isinstance(cached_data, dict) and 'dataframe' in cached_data:
                            return [pd.DataFrame.from_dict(cached_data['dataframe'])]
                        return cached_data
                except Exception as e:
                    logger.error(f"Error loading cache for {func.__name__}: {e}")
            
            # If not in cache, apply rate limiting and make the API call
            rate_limiter.wait()
            logger.debug(f"Cache miss for {func.__name__}, making API request")
            result = func(*args, **kwargs)
            
            # Save to cache
            try:
                cache_data = result
                # If result is a DataFrame, convert to dict for JSON serialization
                if isinstance(result, list) and isinstance(result[0], pd.DataFrame):
                    cache_data = {'dataframe': result[0].to_dict()}
                
                with open(cache_path, 'w') as f:
                    json.dump(cache_data, f)
                    logger.debug(f"Cached result for {func.__name__}")
            except Exception as e:
                logger.error(f"Error caching result for {func.__name__}: {e}")
            
            return result
        return wrapper
    return decorator

def get_team_roster(rate_limiter, team_id, season):
    """Get team roster with rate limiting and caching"""
    @cache_nba_request(rate_limiter)
    def _get_team_roster(team_id, season):
        return CommonTeamRoster(team_id=team_id, season=season).get_data_frames()
    return _get_team_roster(team_id, season)

def get_lineups(rate_limiter, season, team_id):
    """Get lineups with rate limiting and caching"""
    @cache_nba_request(rate_limiter)
    def _get_lineups(season, team_id):
        return LeagueDashLineups(
            season=season,
            team_id_nullable=team_id,
            measure_type_detailed_defense='Advanced',
            per_mode_detailed='PerGame',
            group_quantity=2,
            season_type_all_star='Regular Season',
            month=0,
            opponent_team_id=0,
            pace_adjust='N',
            plus_minus='Y',
            rank='Y'
        ).get_data_frames()
    return _get_lineups(season, team_id)

def find_player_by_name(rate_limiter, player_name):
    """Find player by name with rate limiting and caching"""
    @cache_nba_request(rate_limiter)
    def _find_player_by_name(player_name):
        return players.find_players_by_full_name(player_name)
    return _find_player_by_name(player_name)

def get_all_teams(rate_limiter):
    """Get all teams with rate limiting and caching"""
    @cache_nba_request(rate_limiter)
    def _get_all_teams():
        return teams.get_teams()
    return _get_all_teams()

def format_player_name(full_name):
    """Convert full name to API format (First Initial. Last Name)"""
    names = full_name.split()
    if len(names) >= 2:
        return f"{names[0][0]}. {' '.join(names[1:])}"
    return full_name

def strip_accents(text):
    import unicodedata
    normalized = unicodedata.normalize('NFKD', text)
    return ''.join(c for c in normalized if not unicodedata.combining(c))

def get_player_team_id(player_name, rate_limiter, season='2023-24'):
    """Get the team ID for a given player."""
    player_list = find_player_by_name(rate_limiter, strip_accents(player_name))
    if not player_list:
        logger.error(f"Could not find player: {player_name}")
        return None
    
    player_id = player_list[0]['id']
    all_teams = get_all_teams(rate_limiter)
    
    # Get all team rosters and find which team the player is on
    for team in all_teams:
        try:
            roster = get_team_roster(rate_limiter, team['id'], season)[0]
            if player_id in roster['PLAYER_ID'].values:
                return team['id']
        except Exception as e:
            logger.error(f"Error getting roster for team {team['id']}: {e}")
            continue
    
    return None

def get_teammate_minutes(player_name, rate_limiter, season='2024-25'):
    """Get minutes played with teammates for a given player"""
    logger.info(f"Processing data for {player_name}")
    team_id = get_player_team_id(player_name, rate_limiter)
    if not team_id:
        return f"Could not find team for player: {player_name}"
    
    try:
        lineups = get_lineups(rate_limiter, season, team_id)[0]
        
        formatted_player_name = format_player_name(player_name)
        player_lineups = lineups[lineups['GROUP_NAME'].str.contains(formatted_player_name)]
        
        minutes_with_teammates = player_lineups[['GROUP_NAME', 'MIN']].copy()
        minutes_with_teammates['teammate'] = minutes_with_teammates['GROUP_NAME'].apply(
            lambda x: x.replace(formatted_player_name, '').replace(' - ', '').strip()
        )
        
        return minutes_with_teammates[['teammate', 'MIN']].to_dict('records')
        
    except Exception as e:
        logger.error(f"Error getting data for {player_name}: {e}")
        return None

def main():
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    output_file = f'nba_minutes_{timestamp}.json'
    rate_limiter = RateLimiter(min_interval=1.0)
    
    players_list = [
        "Shai Gilgeous-Alexander",
        "Nikola Jokić",
        "Giannis Antetokounmpo",
        "Luka Dončić",
        "Jayson Tatum",
        "Victor Wembanyama",
        "Kevin Durant",
        "Stephen Curry",
        "Anthony Davis",
        "Jalen Brunson",
        "Anthony Edwards",
        "Donovan Mitchell",
        "Karl-Anthony Towns",
        "LeBron James",
        "Jaylen Brown",
        "Paolo Banchero",
        "Ja Morant",
        "Devin Booker",
        "De'Aaron Fox",
        "Domantas Sabonis",
        "Jalen Williams",
        "Evan Mobley",
        "Franz Wagner",
        "Kyrie Irving",
        "LaMelo Ball",
        "Tyrese Haliburton",
        "Damian Lillard",
        "Cade Cunningham",
        "Trae Young",
        "Tyrese Maxey",
        "Jaren Jackson Jr.",
        "Bam Adebayo",
        "Darius Garland",
        "James Harden",
        "Chet Holmgren",
        "Kawhi Leonard",
        "Alperen Sengun",
        "Pascal Siakam",
        "Jimmy Butler",
        "Derrick White",
        "Joel Embiid",
        "Jalen Johnson",
        "Lauri Markkanen",
        "Zach LaVine",
        "OG Anunoby",
        "Zion Williamson",
        "Scottie Barnes",
        "Jrue Holiday",
        "Jarrett Allen",
        "Jamal Murray",
    ]
    
    results = {}
    for player in players_list:
        teammate_minutes = get_teammate_minutes(player, rate_limiter)
        if teammate_minutes:
            results[player] = teammate_minutes
    
    # Save final results
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2)
    logger.info(f"Results saved to {output_file}")

if __name__ == "__main__":
    main()