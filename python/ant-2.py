import os
import pandas as pd
import matplotlib.pyplot as plt
from nba_api.stats.static import players
from nba_api.stats.endpoints import playercareerstats
from matplotlib.backends.backend_pdf import PdfPages
import numpy as np

def get_player_info(full_name):
    player_dict = players.get_players()
    return [player for player in player_dict if player['full_name'] == full_name][0]

def get_playoff_career_stats(player_id, player_name):
    filename = f"cache/{player_name}_playoff_career_stats.csv"
    if os.path.exists(filename):
        print(f"Reading playoff stats for {player_name} from local file.")
        career_df = pd.read_csv(filename)
    else:
        print(f"Fetching playoff career stats for {player_name} from NBA API.")
        career_stats = playercareerstats.PlayerCareerStats(player_id=player_id)
        career_df = career_stats.get_data_frames()[1]  # Index 1 is typically the playoff statistics dataframe
        career_df.to_csv(filename, index=False)
    return career_df

def ensure_cache_directory():
    if not os.path.exists('cache'):
        os.makedirs('cache')

ensure_cache_directory()

# Names of players to fetch data for
player_names = ["Anthony Edwards", "Kobe Bryant", "Michael Jordan"]

# Get player information
players_info = {name: get_player_info(name) for name in player_names}
# Get playoff career stats with caching
playoff_career_stats = {name: get_playoff_career_stats(players_info[name]['id'], name) for name in player_names}

player_colors = {
    "Anthony Edwards": '#78BE20',
    "Kobe Bryant": '#552583',     
    "Michael Jordan": '#CE1141'  
}

stats_to_plot = ["MIN", "FGM", "FGA", "FG3M", "FG3A", "FTM", "FTA", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "PTS", "FG_PCT", "FG3_PCT", "FT_PCT"]

def plot_stats_comparisons(players_data, player_colors, stats):
    with PdfPages('player_playoff_career_stats_comparison.pdf') as pdf:
        for stat in stats:
            plt.figure(figsize=(12, 6))
            max_years = 0
            for player_name, df in players_data.items():
                years = df['SEASON_ID'].apply(lambda x: x[:4]).astype(int)  # Get the year part of the season ID
                plt.plot(years, df[stat], label=player_name, color=player_colors[player_name], marker='o')
                max_years = max(max_years, len(years))
                
            plt.title(f'{stat} in Playoffs by Career Year')
            plt.xlabel('Year')
            plt.ylabel(stat)
            plt.xticks(np.unique(years))  # Ensure unique year labels
            plt.xlim(years.min(), years.max())
            plt.legend()
            plt.grid(True)
            plt.tight_layout()
            pdf.savefig()
            plt.close()

plot_stats_comparisons(playoff_career_stats, player_colors, stats_to_plot)
