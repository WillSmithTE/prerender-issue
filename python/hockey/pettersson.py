import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

from sklearn.linear_model import LinearRegression
from matplotlib.backends.backend_pdf import PdfPages


def convert_to_minutes(time_str):
    try:
        print(f"Converting time string: {time_str}")
        if isinstance(time_str, str) and ':' in time_str:
            minutes, seconds = map(int, time_str.split(':'))
            print(f"Minutes: {minutes}, Seconds: {seconds}")
            return minutes + seconds / 60
        else:
            minutes = int(time_str)
            print(f"Minutes: {minutes}, Seconds: 0")
            return minutes
    except ValueError as e:
        print(f"Error converting time string '{time_str}': {e}")
        return None  # Handle missing or malformed data

file_path = './pettersson-2023-24.csv'
columns = ['Player', 'Game Date', 'Team', 'S/C', 'Pos', 'GP', 'G', 'A', 'P', '+/-', 'PIM', 'P/GP', 'EVG', 'EVP', 'PPG', 'PPP', 'SHG', 'SHP', 'OTG', 'GWG', 'S', 'S%', 'TOI/GP', 'FOW%']
data = pd.read_csv(file_path, usecols=columns)

data.replace('--', np.nan, inplace=True)


data['Game Date'] = pd.to_datetime(data['Game Date'])

data['TOI/GP'] = data['TOI/GP'].apply(convert_to_minutes)
if data['TOI/GP'].isna().any():
    nan_rows = data[data['TOI/GP'].isna()]
    for index, row in nan_rows.iterrows():
        print(f"Error: NaN value found at row {index + 1} on date {row['Game Date']}")


# Sort data by 'Game Date'
data = data.sort_values(by='Game Date')

data['G_Rolling'] = data['G'].rolling(window=5, min_periods=1).mean()
data['A_Rolling'] = data['A'].rolling(window=5, min_periods=1).mean()
data['P_Rolling'] = data['P'].rolling(window=5, min_periods=1).mean()
data['S_Rolling'] = data['S'].rolling(window=5, min_periods=1).mean()
data['TOI/GP_Rolling'] = data['TOI/GP'].rolling(window=5, min_periods=1).mean()

# Plotting the statistics with rolling averages
plt.figure(figsize=(15, 10))

# Goals
plt.subplot(3, 2, 1)
sns.lineplot(data=data, x='Game Date', y='G', marker='o', label='Goals')
sns.lineplot(data=data, x='Game Date', y='G_Rolling', marker='', label='Goals (Rolling Avg)', linestyle='--')
plt.title('Goals Over Time')
plt.xlabel('Game Date')
plt.ylabel('Goals')

# Assists
plt.subplot(3, 2, 2)
sns.lineplot(data=data, x='Game Date', y='A', marker='o', label='Assists')
sns.lineplot(data=data, x='Game Date', y='A_Rolling', marker='', label='Assists (Rolling Avg)', linestyle='--')
plt.title('Assists Over Time')
plt.xlabel('Game Date')
plt.ylabel('Assists')

# Points
plt.subplot(3, 2, 3)
sns.lineplot(data=data, x='Game Date', y='P', marker='o', label='Points')
sns.lineplot(data=data, x='Game Date', y='P_Rolling', marker='', label='Points (Rolling Avg)', linestyle='--')
plt.title('Points Over Time')
plt.xlabel('Game Date')
plt.ylabel('Points')

# Shots
plt.subplot(3, 2, 4)
sns.lineplot(data=data, x='Game Date', y='S', marker='o', label='Shots')
sns.lineplot(data=data, x='Game Date', y='S_Rolling', marker='', label='Shots (Rolling Avg)', linestyle='--')
plt.title('Shots Over Time')
plt.xlabel('Game Date')
plt.ylabel('Shots')

# Time on Ice per Game
plt.subplot(3, 2, 5)
sns.lineplot(data=data, x='Game Date', y='TOI/GP', marker='o', label='TOI/GP')
sns.lineplot(data=data, x='Game Date', y='TOI/GP_Rolling', marker='', label='TOI/GP (Rolling Avg)', linestyle='--')
plt.title('Time on Ice per Game Over Time')
plt.xlabel('Game Date')
plt.ylabel('Time on Ice per Game (minutes)')

# Adjust layout
plt.tight_layout()
plt.legend()
plt.show()


# Convert 'Game Date' to a numerical index
data['Game Date Numeric'] = (data['Game Date'] - data['Game Date'].min()).dt.days

data['Game Number'] = range(1, len(data) + 1)

numeric_columns = ['G', 'A', 'P', '+/-', 'PIM', 'EVG', 'EVP', 'PPG', 'PPP', 'SHG', 'SHP', 'OTG', 'GWG', 'S', 'S%', 'FOW%']
data[numeric_columns] = data[numeric_columns].apply(pd.to_numeric, errors='coerce')


def plot_with_trendline(x, y, data, ax, title, xlabel, ylabel):
    # Drop NaN values for plotting
    data = data.dropna(subset=[y])
    
    # Check if the data is empty after dropping NaN values
    if data.empty:
        print(f"Skipping plot for {y} due to insufficient data.")
        return
    
    
    # Plot original data
    sns.lineplot(data=data, x=x, y=y, marker='o', label='Original', ax=ax)
    sns.regplot(data=data, x=x, y=y, scatter=False, label='Trendline', ax=ax, line_kws={"color":"red", "alpha":0.7})
    
    ax.set_title(title)
    ax.set_xlabel(xlabel)
    ax.set_ylabel(ylabel)
    ax.legend()
with PdfPages('player_statistics.pdf') as pdf:
    fig, axs = plt.subplots(6, 2, figsize=(20, 30))

    # Goals
    plot_with_trendline('Game Number', 'G', data, axs[0, 0], 'Goals Over Time', 'Game Number', 'Goals')

    # Assists
    plot_with_trendline('Game Number', 'A', data, axs[0, 1], 'Assists Over Time', 'Game Number', 'Assists')

    # Points
    plot_with_trendline('Game Number', 'P', data, axs[1, 0], 'Points Over Time', 'Game Number', 'Points')

    # Shots
    plot_with_trendline('Game Number', 'S', data, axs[1, 1], 'Shots Over Time', 'Game Number', 'Shots')

    # Time on Ice per Game
    plot_with_trendline('Game Number', 'TOI/GP', data, axs[2, 0], 'Time on Ice per Game Over Time', 'Game Number', 'Time on Ice per Game (minutes)')

    # Power Play Goals
    plot_with_trendline('Game Number', 'PPG', data, axs[2, 1], 'Power Play Goals Over Time', 'Game Number', 'Power Play Goals')

    # Even-Strength Points
    plot_with_trendline('Game Number', 'EVP', data, axs[3, 0], 'Even-Strength Points Over Time', 'Game Number', 'Even-Strength Points')

    # Face-off Win Percentage
    plot_with_trendline('Game Number', 'FOW%', data, axs[3, 1], 'Face-off Win Percentage Over Time', 'Game Number', 'Face-off Win Percentage')

    # Penalty Minutes
    plot_with_trendline('Game Number', 'PIM', data, axs[4, 0], 'Penalty Minutes Over Time', 'Game Number', 'Penalty Minutes')

    # Plus/Minus
    plot_with_trendline('Game Number', '+/-', data, axs[4, 1], 'Plus/Minus Over Time', 'Game Number', 'Plus/Minus')

    # Game-Winning Goals
    plot_with_trendline('Game Number', 'GWG', data, axs[5, 0], 'Game-Winning Goals Over Time', 'Game Number', 'Game-Winning Goals')

    # Shooting Percentage
    plot_with_trendline('Game Number', 'S%', data, axs[5, 1], 'Shooting Percentage Over Time', 'Game Number', 'Shooting Percentage')

    # Adjust layout and save to PDF
    plt.tight_layout()
    pdf.savefig(fig)
    plt.close(fig)