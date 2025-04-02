import pandas as pd
# Load the CSV files
drivers_df = pd.read_csv('f1-1950-2023/drivers.csv')
qualifying_df = pd.read_csv('f1-1950-2023/qualifying.csv')
races_df = pd.read_csv('f1-1950-2023/races.csv')



# Merge the qualifying and races dataframes on raceId
qualifying_races_df = pd.merge(qualifying_df, races_df, on='raceId')

# Merge the resulting dataframe with the drivers dataframe on driverId
merged_df = pd.merge(qualifying_races_df, drivers_df, on='driverId')

# Filter the data to include only pole positions (position == 1) in 2023
poles_2023 = merged_df[(merged_df['year'] == 2023) & (merged_df['position'] == 1)]

# Ensure 'date' and 'dob' columns are in datetime format
poles_2023['date'] = pd.to_datetime(poles_2023['date'], errors='coerce')
poles_2023['dob'] = pd.to_datetime(poles_2023['dob'], errors='coerce')

# Drop rows where 'date' or 'dob' conversion failed
poles_2023 = poles_2023.dropna(subset=['date', 'dob'])

# Calculate the age of each pole sitter on the date of the race
poles_2023['age'] = (poles_2023['date'] - poles_2023['dob']).dt.days / 365.25

# Select the relevant columns
poles_2023_data = poles_2023[['forename', 'surname', 'name', 'date', 'age']]

# Get the list of races in 2023
races_2023 = races_df[races_df['year'] == 2023]['name'].unique()

# Get the list of races with pole sitters
races_with_poles_2023 = poles_2023['name'].unique()

# Identify races without pole sitters
missing_poles_races = set(races_2023) - set(races_with_poles_2023)

# Display the data and missing races
print("Number of races in 2023:", len(races_2023))
print("Races in 2023:", races_2023)
print("Number of pole sitters in 2023:", len(poles_2023_data))
print(poles_2023_data)
print("Races without pole sitters:", missing_poles_races)