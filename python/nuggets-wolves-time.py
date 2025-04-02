import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from bs4 import BeautifulSoup
from nba_api.stats.endpoints import playbyplayv2
import os

def get_minutes_from_time_string(time_string):
    """Convert PCTIMESTRING 'MM:SS' to minutes as a float."""
    minutes, seconds = map(int, time_string.split(':'))
    return minutes + seconds / 60

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

def get_player_minutes(game_id, player_id):
    # Get the play-by-play data
    pbp_data = get_playbyplay(game_id)

      # Filter events for the specific player
    player_events = pbp_data[(pbp_data['PLAYER1_ID'] == player_id) | (pbp_data['PLAYER2_ID'] == player_id)]

    # Initialize variables
    minutes_played = []

    # Define period end times (standard NBA game)
    period_end_times = {1: 12, 2: 24, 3: 36, 4: 48}
    
    # Track substitutions and period transitions
    for period in range(1, 5):  # Standard NBA game periods
        period_start_time = (period - 1) * 12
        period_end_time = period_end_times[period]
        period_minutes = []

        # Filter events for the current period
        period_events = player_events[player_events['PERIOD'] == period]
        start_time = None
        end_time = None

        for _, row in period_events.iterrows():
            event_msg_type = row['EVENTMSGTYPE']
            if event_msg_type == 8:  # Substitution
                
                time_string = row['PCTIMESTRING']
                minutes_elapsed = period_end_time- get_minutes_from_time_string(time_string)

                if row['PLAYER2_ID'] == player_id:  # Player substituted in
                    start_time = minutes_elapsed
                elif row['PLAYER1_ID'] == player_id:  # Player substituted out
                    if start_time is None:
                        start_time = period_start_time
                    end_time = minutes_elapsed
                    period_minutes.append(f"{start_time:.2f}-{end_time:.2f}")
                    start_time = None

        # Check if the player is still in the game at the end of the period
        if start_time is not None:
            end_time = period_end_time
            period_minutes.append(f"{start_time:.2f}-{end_time:.2f}")

        if period_minutes:
            minutes_played.extend(period_minutes)
        else:
            # check if they have any events. if so, played all period. else, played none
            if not period_events.empty:
                minutes_played.append(f"{period_start_time:.2f}-{period_end_time:.2f}")

    return minutes_played




def plot_player_minutes(minutes_played_list, game_ids):
    fig, ax = plt.subplots(figsize=(12, 4))
    colors = ['skyblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink']  # Define a list of colors

    num_games = len(game_ids)
    for idx, minutes_played in enumerate(minutes_played_list):
        for time_range in minutes_played:
            start, end = map(float, time_range.split('-'))

            # Plot the minutes, reversing the index for correct order
            ax.barh(num_games - idx, end-start, left=start, color=colors[idx % len(colors)], edgecolor='black', height=0.4)

    # Set the labels and title
    ax.set_xlabel('Minutes')
    ax.set_yticks(range(1, num_games + 1))
    ax.set_yticklabels([f'Game {i+1}' for i in range(num_games-1, -1, -1)])
    ax.set_xticks(range(0, 49, 3))
    ax.set_xticklabels([f'{i}' for i in range(0, 49, 3)])
    ax.set_title('Jamal Murray Minutes Played vs Lakers')

    plt.grid(axis='x', linestyle='--', alpha=0.7)
    plt.show()

# Example usage
# game_ids = ['0042300231', '0042300232', '0042300233']  # wolves

game_ids = ['0042300151', '0042300152', '0042300153', '0042300154', '0042300155']  # lakers
player_id = 1627750  # Example player ID
minutes_played_list = [get_player_minutes(game_id, player_id) for game_id in game_ids]

# Print minutes played for each game
for game_id, minutes_played in zip(game_ids, minutes_played_list):
    print(f"Minutes played in game {game_id}: {minutes_played}")

plot_player_minutes(minutes_played_list, game_ids)

