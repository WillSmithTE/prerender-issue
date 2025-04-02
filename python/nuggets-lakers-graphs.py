import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from bs4 import BeautifulSoup
from nba_api.stats.endpoints import playbyplayv2
import os


# get all static teams from the nba_api
from nba_api.stats.static import teams

team_colors = {
    'Los Angeles Lakers': '#552583',  # Lakers Purple
    'Denver Nuggets': '#FEC524',  # Nuggets Navy
    'Miami Heat': '#98002E',  # Heat Red
    'Boston Celtics': '#007A33',  # Celtics Green
    # Add more teams as needed
}


from nba_api.stats.endpoints import leaguegamefinder

def get_playbyplay(game_id):
    filename = f"cache/{game_id}_playbyplay.csv"
    if os.path.exists(filename):
        print(f"Reading play-by-play data for game {game_id} from local file.")
        data = pd.read_csv(filename)
    else:
        print(f"Fetching play-by-play data for game {game_id} from NBA API.")
        result = playbyplayv2.PlayByPlayV2(game_id)
        data = result.get_data_frames()[0]
        data.to_csv(filename, index=False)
    return data

def get_team_names(game_id):
    filename = f"cache/{game_id}_teams.csv"
    if os.path.exists(filename):
        print(f"Reading team names for game {game_id} from local file.")
        game_info = pd.read_csv(filename)
    else:
        print(f"Fetching team names for game {game_id} from NBA API.")
        gamefinder = leaguegamefinder.LeagueGameFinder()
        games = gamefinder.get_data_frames()[0]
        game_info = games[games['GAME_ID'] == game_id]
        if not game_info.empty:
            game_info.to_csv(filename, index=False)
    
    if not game_info.empty:
        # Determine home and away teams based on the MATCHUP field
        for index, row in game_info.iterrows():
            if "vs." in row['MATCHUP']:
                home_team = row['TEAM_NAME']
            elif "@" in row['MATCHUP']:
                visitor_team = row['TEAM_NAME']
        return home_team, visitor_team
    else:
        return None, None

# Function to convert period and time string to total minutes
def period_to_minutes(period, pctimestring):
    minutes, seconds = map(int, pctimestring.split(':'))
    return (period - 1) * 12 + (12 - minutes) - (seconds / 60)

# Function to split the 'SCORE' into two separate columns
def split_score(score):
    visitor, home = score.split(' - ')
    return int(visitor), int(home)

# Create a figure with a grid of subplots
fig, axs = plt.subplots(2, 3, figsize=(14, 8))  # 2x2 grid of plots
axs = axs.flatten()  # Flatten the 2D array of axes for easier iteration

games = ["0042300151", "0042300152", "0042300153", "0042300154" , "0042300155"]

for index, game_id in enumerate(games):
    home_team, visitor_team = get_team_names(game_id)
    if home_team and visitor_team:
        data = get_playbyplay(game_id)

        # Filter out rows where 'SCORE' is None
        data = data.dropna(subset=['SCORE'])
        
        # Split SCORE into two columns
        data[['visitor_score', 'home_score']] = data['SCORE'].apply(lambda x: pd.Series(split_score(x)))
        
        # Convert 'PERIOD' and 'PCTIMESTRING' to minutes
        data['minutes'] = data.apply(lambda x: period_to_minutes(x['PERIOD'], x['PCTIMESTRING']), axis=1)
        

        start_data = pd.DataFrame({
            'minutes': [0],
            'visitor_score': [0],
            'home_score': [0]
        })
        data = pd.concat([start_data, data]).sort_values(by='minutes').reset_index(drop=True)


        # Plot using team-specific colors
        axs[index].plot(data['minutes'], data['visitor_score'], label=f'{visitor_team}',
                        color=team_colors.get(visitor_team, '#000000'))  # Default to black if no color
        axs[index].plot(data['minutes'], data['home_score'], label=f'{home_team}',
                        color=team_colors.get(home_team, '#000000'))  # Default to black if no color
        
        axs[index].set_title(f'Game {index + 1}')
        axs[index].set_xlabel('Minutes')
        axs[index].set_ylabel('Score')

        max_minutes = data['minutes'].max()
        axs[index].set_xticks(np.arange(0, max_minutes + 1, 3))  # X-axis labels every 3 minutes
        axs[index].set_xticks(np.arange(0, max_minutes + 1, 1), minor=True)  # Minor ticks every 1 minute
        axs[index].grid(which='both', linestyle='-', linewidth='0.5')  # Grid lines for both major and minor ticks
        axs[index].grid(which='minor', alpha=0.2)  # Lighter grid lines for minor ticks
        axs[index].grid(which='major', alpha=0.5)  # Darker grid lines for major ticks
        
        axs[index].legend()


# Adjust layout and spacing
plt.tight_layout()
plt.show()