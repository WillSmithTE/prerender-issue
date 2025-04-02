import pandas as pd
import matplotlib.pyplot as plt

# Load the datasets
tournaments_path = './data-csv/tournaments.csv'
group_standings_path = './data-csv/group_standings.csv'
tournaments_data = pd.read_csv(tournaments_path)
group_standings_data = pd.read_csv(group_standings_path)

# Filter tournaments to those pertaining to World Cup and extract needed years after 1960
world_cup_years_men = tournaments_data[(tournaments_data['tournament_name'].str.contains("Men's World Cup")) & (tournaments_data['year'] >= 1960)]['year'].tolist()
world_cup_years_women = tournaments_data[(tournaments_data['tournament_name'].str.contains("Women's World Cup")) & (tournaments_data['year'] >= 1960)]['year'].tolist()

# Filter and select Australia's participations
australia_data = group_standings_data[(group_standings_data['team_name'] == 'Australia') & group_standings_data['tournament_name'].str.contains("World Cup")]

# Extract and convert year from tournament_id
australia_data['year'] = australia_data['tournament_id'].str.extract('(\d{4})').astype(int)

# Define helper function to fill in non-participation years
def fill_years(part_data, years):
    year_position = part_data.groupby('year')['position'].min().reindex(years).fillna(5).reset_index()
    year_position['position'] = year_position['position'].astype(int)
    return year_position

# Get data for men and women, fill in missing years
australia_men = australia_data[australia_data['tournament_name'].str.contains("Men")].copy()
australia_women = australia_data[australia_data['tournament_name'].str.contains("Women")].copy()
australia_men_years = fill_years(australia_men, world_cup_years_men)
australia_women_years = fill_years(australia_women, world_cup_years_women)

# Plotting the data
plt.figure(figsize=(14, 7))

# Plot for the men's team
plt.plot(australia_men_years['year'], australia_men_years['position'], marker='o', label='Men\'s Team', linestyle='-', color='blue')

# Plot for the women's team
plt.plot(australia_women_years['year'], australia_women_years['position'], marker='o', label='Women\'s Team', linestyle='-', color='green')

plt.title('Australia FIFA World Cup Participation Over Time (Men vs Women)')
plt.xlabel('Year')
plt.ylabel('Position')
plt.yticks(range(1, 6), ['1st', '2nd', '3rd', '4th', 'Did Not Qualify'])  # Custom labels including "Did Not Qualify" label for 5th position
plt.gca().invert_yaxis()  # Better positions are shown at the top
plt.legend()
plt.grid(True)
plt.show()

