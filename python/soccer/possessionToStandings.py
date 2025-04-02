import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
from adjustText import adjust_text

# Load and prepare possession data
possession_data = pd.concat(
    [pd.read_csv(f'possession/squad_possession_{year}.csv') for year in [2010, 2014, 2018, 2022]],
    ignore_index=True
)

# Load standings data
standings_data = pd.read_csv('data-csv/group_standings.csv')

# Filter to include only men's tournaments and extract the year
standings_data = standings_data[~standings_data['tournament_name'].str.contains("Women's")]
standings_data['Year'] = standings_data['tournament_id'].str.extract('WC-(\d{4})').astype(int)

tournament_standings = pd.read_csv('data-csv/tournament_standings.csv')
tournament_standings = tournament_standings[~tournament_standings['tournament_name'].str.contains("Women's")]
tournament_standings['Year'] = tournament_standings['tournament_id'].str.extract('WC-(\d{4})').astype(int)
tournament_standings.rename(columns={'position': 'final_position'}, inplace=True)

# Merge the datasets
half_merged = pd.merge(possession_data, standings_data, left_on=['Squad', 'Year'], right_on=['team_name', 'Year'], how='inner')
# merge with the tournament standings data. if the team is not in the tournament standings, those columns should be NaN or undefined
merged_data = pd.merge(half_merged, tournament_standings, left_on=['Squad', 'Year'], right_on=['team_name', 'Year'], how='outer')


australia_data = merged_data[merged_data['Squad'] == 'Australia']

# Select the columns for possession and points, assuming 'year' is a column in your merged data
australia_possession_points = australia_data[['Year', 'Poss', 'points']]


plt.figure(figsize=(12, 8))
texts = []
color_map = {1: 'gold', 2: 'silver', 3: 'darkorange'}  # 3rd position often represented by bronze color
for _, row in merged_data.iterrows():
    # if position equals 1, 2, or 3, use the corresponding color from the color map. otherwise, dont add a label and use default color
    if row['final_position'] in color_map:
        team_color = color_map[row['final_position']]
        plt.scatter(row['Poss'], row['points'], color=team_color, s=100, edgecolor='black', zorder=5)
        text = plt.text(row['Poss'], row['points'] + 0.2, f"{row['Squad']} {row['Year']}", fontsize=9, verticalalignment='bottom', horizontalalignment='right')
        texts.append(text)
    else:
        plt.scatter(row['Poss'], row['points'], color='black')
adjust_text(texts)

plt.title('Possession % vs. Points (Highlighting Top Finishers)')
plt.xlabel('Possession %')
plt.ylabel('Points')
plt.grid(True)
plt.show()

# Print the results
print(australia_possession_points)

# Scatter plot for Possession vs Goals Scored
# plt.figure(figsize=(12, 8))
# for _, row in merged_data.iterrows():
#     plt.scatter(row['Poss'], row['goals_for'], color='blue')
#     plt.text(row['Poss'], row['goals_for'], f"{row['Squad']} {row['Year']}", fontsize=9)

# plt.title('Possession % vs. Goals Scored')
# plt.xlabel('Possession %')
# plt.ylabel('Goals Scored')
# plt.grid(True)
# plt.show()

# Scatter plot for Possession vs Position
# plt.figure(figsize=(12, 8))
# for _, row in merged_data.iterrows():
#     plt.scatter(row['Poss'], row['position'], color='red')
#     if row['Squad'] in ['Australia']:
#         plt.text(row['Poss'], row['position'], f"{row['Squad']} {row['Year']}", fontsize=9)

# plt.title('Possession % vs. Group Position')
# plt.xlabel('Possession %')
# plt.ylabel('Group Position')
# plt.gca().invert_yaxis()  # Invert y-axis to show the top position at the top
# plt.grid(True)
# plt.show()

# Scatter plot for Possession vs Points
plt.figure(figsize=(12, 8))
for _, row in merged_data.iterrows():
    if row['Squad'] == 'Australia':
        # Highlight Australia's data point
        plt.scatter(row['Poss'], row['points'], color='green', s=100, edgecolor='black', zorder=5)  # Larger and red with black border
        plt.text(row['Poss'] + 2, row['points'] + 0.2, f"{row['Squad']} {row['Year']}", fontsize=9, verticalalignment='bottom', horizontalalignment='right')
    else:
        # Plot other data points normally
        plt.scatter(row['Poss'], row['points'], color='black')

plt.title('Possession % vs. Points')
plt.xlabel('Possession %')
plt.ylabel('Points')
plt.grid(True)
plt.show()


def visualize_advanced_correlations(data):
    # Set the aesthetic style of the plots
    sns.set_style("whitegrid")
    
    # Joint Distribution Plot: Possession vs Points
    g = sns.jointplot(data=data, x='Poss', y='points', kind='reg', height=8)
    g.fig.suptitle('Joint Distribution of Possession % and Points', y=1.02)
    g.set_axis_labels('Possession (%)', 'Points')
    # Add line equation and R^2 value to the plot
    r, p = stats.pearsonr(data['Poss'], data['points'])
    g.ax_joint.text(40, 1, f'$R^2$={r**2:.3f}', fontsize=12, verticalalignment='bottom', horizontalalignment='right', color='red')
    
    # Pair Plot: Possession, Goals For, Goal Difference, and Position
    subset_data = data[['Poss', 'goals_for', 'goal_difference', 'position']]
    pair_plot = sns.pairplot(subset_data, kind='scatter', diag_kind='kde', plot_kws={'alpha':0.6, 's':80, 'edgecolor':'k'})
    pair_plot.fig.suptitle('Pairwise Relationships Among Key Metrics', y=1.02)
    
    # Bar Plot: Average Possession by Final Position
    plt.figure(figsize=(12, 6))
    avg_poss_by_position = data.groupby('position')['Poss'].mean().sort_index()
    bar_plot = sns.barplot(x=avg_poss_by_position.index, y=avg_poss_by_position.values, palette='coolwarm')
    bar_plot.set_title('Average Possession % by Final Position in Group')
    bar_plot.set_xlabel('Group Final Position')
    bar_plot.set_ylabel('Average Possession (%)')
    
    plt.show()

# Assuming `merged_data` is already defined and loaded
# visualize_advanced_correlations(merged_data)  # Uncomment to run in your local Python environment



# Assume 'merged_data' is already loaded and prepared from the previous code
visualize_advanced_correlations(merged_data)