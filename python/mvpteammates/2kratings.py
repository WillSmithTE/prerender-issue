import requests
from bs4 import BeautifulSoup
import json
import time
from typing import List, Dict, Any

class NBA2KScraper:
    def __init__(self):
        self.base_url = "https://www.2kratings.com/teams/"
        # List of all NBA teams in URL-friendly format
        self.teams = [
            "atlanta-hawks", "boston-celtics", "brooklyn-nets", "charlotte-hornets",
            "chicago-bulls", "cleveland-cavaliers", "dallas-mavericks", "denver-nuggets",
            "detroit-pistons", "golden-state-warriors", "houston-rockets", "indiana-pacers",
            "los-angeles-clippers", "los-angeles-lakers", "memphis-grizzlies", "miami-heat",
            "milwaukee-bucks", "minnesota-timberwolves", "new-orleans-pelicans", "new-york-knicks",
            "oklahoma-city-thunder", "orlando-magic", "philadelphia-76ers", "phoenix-suns",
            "portland-trail-blazers", "sacramento-kings", "san-antonio-spurs", "toronto-raptors",
            "utah-jazz", "washington-wizards"
        ]
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

    def extract_player_data(self, row: BeautifulSoup, team: str) -> Dict[str, Any]:
        """Extract player data from a table row."""
        try:
            # Get player name
            name_element = row.select_one('.entry-font a')
            name = name_element.text.strip() if name_element else "Unknown"

            # Get ratings
            ratings = row.select('.attribute-box')
            rating_data = {
                'overall': int(ratings[0].text.strip()) if ratings else None,
                '3pt': int(ratings[1].text.strip()) if len(ratings) > 1 else None,
                'dunk': int(ratings[2].text.strip()) if len(ratings) > 2 else None
            }

            # Get position and height
            subtext = row.select_one('.entry-subtext-font')
            position = subtext.select('a')[1].text.strip() if subtext else "Unknown"
            height = next((a.text.strip() for a in subtext.select('a') if '"' in a.text), "Unknown") if subtext else "Unknown"

            return {
                'name': name,
                'team': team.replace('-', ' ').title(),
                'position': position,
                'height': height,
                'rating': rating_data
            }
        except Exception as e:
            print(f"Error processing player: {e}")
            return None

    def scrape_team(self, team: str) -> List[Dict[str, Any]]:
        """Scrape data for a single team."""
        url = f"{self.base_url}{team}"
        try:
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Find the main table
            table = soup.select_one('table.table')
            if not table:
                return []

            players = []
            for row in table.select('tbody tr'):
                if 'py-3' in row.get('class', []):  # Skip advertisement rows
                    continue
                    
                player_data = self.extract_player_data(row, team)
                if player_data:
                    players.append(player_data)

            return players

        except Exception as e:
            print(f"Error scraping team {team}: {e}")
            return []

    def scrape_all_teams(self) -> List[Dict[str, Any]]:
        """Scrape data for all teams."""
        all_players = []
        
        for team in self.teams:
            print(f"Scraping {team}...")
            team_players = self.scrape_team(team)
            all_players.extend(team_players)
            
            # Add delay to be nice to the server
            time.sleep(2)
            
        return all_players

    def save_to_file(self, data: List[Dict[str, Any]], filename: str = "nba_2k_ratings.json"):
        """Save the scraped data to a JSON file."""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)

def main():
    scraper = NBA2KScraper()
    print("Starting to scrape NBA 2K ratings...")
    
    all_players = scraper.scrape_all_teams()
    scraper.save_to_file(all_players)
    
    print(f"Scraping complete! Saved {len(all_players)} players to nba_2k_ratings.json")

if __name__ == "__main__":
    main()