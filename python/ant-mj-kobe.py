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

def get_career_stats(player_id, player_name):
    filename = f"cache/{player_name}_career_stats.csv"
    if os.path.exists(filename):
        print(f"Reading career stats for {player_name} from local file.")
        career_df = pd.read_csv(filename)
    else:
        print(f"Fetching career stats for {player_name} from NBA API.")
        career_stats = playercareerstats.PlayerCareerStats(player_id=player_id)
        career_df = career_stats.get_data_frames()[0]
        career_df.to_csv(filename, index=False)
    return career_df

def ensure_cache_directory():
    if not os.path.exists('cache'):
        os.makedirs('cache')

# Make sure the cache directory exists
ensure_cache_directory()

# Names of players to fetch data for
player_names = ["Anthony Edwards", "Kobe Bryant", "Michael Jordan"]

# Get player information
players_info = {name: get_player_info(name) for name in player_names}
# Get career stats with caching
career_stats = {name: get_career_stats(players_info[name]['id'], name) for name in player_names}

player_colors = {
    "Anthony Edwards": '#78BE20',
    "Kobe Bryant": '#552583',     
    "Michael Jordan": '#CE1141'  
}


average_stats = ["MIN", "FGM", "FGA", "FG3M", "FG3A", "FTM", "FTA", "OREB", "DREB", "REB", "AST", "STL", "BLK", "TOV", "PF", "PTS"]
percentage_stats = ["FG_PCT", "FG3_PCT", "FT_PCT"]
counting_stats = ["PLAYER_AGE"]
stats_to_plot = average_stats + percentage_stats + counting_stats



def calculate_stat(df, full_years, stat, per_36=False):
    if stat in average_stats and stat in df.columns:
        stat_data = df[stat] / df['GP'].replace(0, pd.NA)  # Calculate per game stat
        valid_entries = df[df['MIN'] > 0]  # Ensure minutes are greater than 0
        if per_36 and not valid_entries.empty:
            stat_per_min = valid_entries[stat] / valid_entries['MIN']  # Calculate per minute stat
            stat_data_per_36 = stat_per_min * 36  # Scale to per 36 minutes
            stat_dict = dict(zip(valid_entries['Season_Year'], stat_data_per_36))
        else:
            stat_dict = dict(zip(valid_entries['Season_Year'], df[stat]))  # Use raw data if not per_36 or no data
    elif stat in percentage_stats and stat in df.columns:
        stat_dict = dict(zip(df['Season_Year'], df[stat]))
    elif stat in counting_stats and stat in df.columns:
        base_age = df[stat].iloc[0]
        stat_dict = {df['Season_Year'].iloc[i]: base_age + i for i in range(len(df))}
    else:
        return pd.Series(index=full_years)  # Return empty series for unmatched cases

    return pd.Series({year: stat_dict.get(year, np.nan) for year in full_years}, index=full_years)


def fill_missing_years(data, stats):
    filled_data = {}
    for player_name, df in data.items():
        df['Season_Year'] = df['SEASON_ID'].apply(lambda x: int(x.split("-")[0]))
        full_years = range(df['Season_Year'].min(), df['Season_Year'].max() + 1)
        filled_data[player_name] = {}
        for stat in stats:
            filled_data[player_name][stat] = pd.Series(calculate_stat(df, full_years, stat))
            if stat in average_stats:
                filled_data[player_name][f"{stat}_per_36"] = pd.Series(calculate_stat(df, full_years, stat, per_36=True))
        for stat, series in filled_data[player_name].items():
            series.index = range(1, len(series) + 1)
    return filled_data

def plot_stats_comparisons(players_data, player_colors, stats):
    filled_data = fill_missing_years(players_data, stats)
    with PdfPages('player_career_stats_comparison.pdf') as pdf:
        for stat in stats + [f"{stat}_per_36" for stat in stats if stat in average_stats]:
            plt.figure(figsize=(12, 6))
            max_years = 0
            for player_name in filled_data:
                stat_series = filled_data[player_name][stat]
                plt.plot(stat_series.index, stat_series, label=player_name, color=player_colors[player_name], marker='o')
                if len(stat_series) > max_years:
                    max_years = len(stat_series)
            plt.title(f'{stat} Comparison by Career Year')
            plt.xlabel('Year in Career')
            plt.ylabel(stat)
            plt.xticks(range(1, max_years + 1))
            plt.xlim(1, max_years)
            plt.legend()
            plt.grid(True)
            plt.tight_layout()
            pdf.savefig()
            plt.close()

plot_stats_comparisons(career_stats, player_colors, stats_to_plot)
