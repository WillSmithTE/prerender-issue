import pandas as pd
import matplotlib.pyplot as plt
import json
import glob
import logging
import csv
from unidecode import unidecode

# Function to remove accents from a string
def remove_accents(input_str):
    return unidecode(input_str)

# Read the original drivers CSV file and remove accents
with open('./f1-1950-2023/drivers.csv', mode='r', encoding='utf-8') as infile:
    reader = csv.reader(infile)
    rows = list(reader)

# Remove accents from all fields in the CSV
cleaned_rows = []
for row in rows:
    cleaned_row = [remove_accents(field) if field != '\\N' else field for field in row]
    cleaned_rows.append(cleaned_row)

# Write the cleaned data to a new CSV file
with open('./f1-1950-2023/drivers_cleaned.csv', mode='w', newline='', encoding='utf-8') as outfile:
    writer = csv.writer(outfile)
    writer.writerows(cleaned_rows)

print("Accents removed and saved to drivers_cleaned.csv")

# Now, continue with the rest of the code using the cleaned drivers CSV
# Setup logging
logging.basicConfig(filename='./missing_data.log', level=logging.INFO, format='%(asctime)s - %(message)s')

# Load drivers and races data
drivers_df = pd.read_csv('./f1-1950-2023/drivers_cleaned.csv')
races_df = pd.read_csv('./f1-1950-2023/races.csv')

# Define the qualifying results directory
qualifying_results_dir = './f1-data-2/'

# Create a comprehensive mapping from short race names to full race names
race_name_mapping = {
    'austria': 'Austrian Grand Prix',
    'belgium': 'Belgian Grand Prix',
    'italy': 'Italian Grand Prix',
    'spain': 'Spanish Grand Prix',
    'portugal': 'Portuguese Grand Prix',
    'turkey': 'Turkish Grand Prix',
    'great-britain': 'British Grand Prix',
    'hungary': 'Hungarian Grand Prix',
    'bahrain': 'Bahrain Grand Prix',
    'eifel': 'Eifel Grand Prix',
    'abu dhabi': 'Abu Dhabi Grand Prix',
    'abu-dhabi': 'Abu Dhabi Grand Prix',
    'sakhir': 'Sakhir Grand Prix',
    '70th-anniversary': '70th Anniversary Grand Prix',
    '70th anniversary': '70th Anniversary Grand Prix',
    'emilia-romagna': 'Emilia Romagna Grand Prix',
    'emilia romagna': 'Emilia Romagna Grand Prix',
    'styrian': 'Styrian Grand Prix',
    'styria': 'Styrian Grand Prix',
    'tuscany': 'Tuscan Grand Prix',
    'russia': 'Russian Grand Prix',
    'france': 'French Grand Prix',
    'germany': 'German Grand Prix',
    'netherlands': 'Dutch Grand Prix',
    'japan': 'Japanese Grand Prix',
    'australia': 'Australian Grand Prix',
    'brazil': 'Brazilian Grand Prix',
    'canada': 'Canadian Grand Prix',
    'china': 'Chinese Grand Prix',
    'usa': 'United States Grand Prix',
    'mexico': 'Mexican Grand Prix',
    'mexico-city': 'Mexico City Grand Prix',
    'mexico city': 'Mexico City Grand Prix',
    'monaco': 'Monaco Grand Prix',
    'singapore': 'Singapore Grand Prix',
    'korea': 'Korean Grand Prix',
    'malaysia': 'Malaysian Grand Prix',
    'indianapolis': 'Indianapolis Grand Prix',
    'san marino': 'San Marino Grand Prix',
    'san-marino': 'San Marino Grand Prix',
    'europe': 'European Grand Prix',
    'pacific': 'Pacific Grand Prix',
    'detroit': 'Detroit Grand Prix',
    'south-africa': 'South African Grand Prix',
    'usa-west': 'United States Grand Prix West',
    'south africa': 'South African Grand Prix',
    'dallas': 'Dallas Grand Prix',
    'great britain': 'British Grand Prix',
    'united states': 'United States Grand Prix',
    'usa west': 'United States Grand Prix West',
    'india': 'Indian Grand Prix',
    'south korea': 'Korean Grand Prix',
    'qatar': 'Qatar Grand Prix',
    'saudi arabia': 'Saudi Arabian Grand Prix',
    'luxembourg': 'Luxembourg Grand Prix',
    'argentina': 'Argentine Grand Prix',
    'azerbaijan': 'Azerbaijan Grand Prix',
    'miami': 'Miami Grand Prix',
    'las vegas': 'Las Vegas Grand Prix',
    'las-vegas': 'Las Vegas Grand Prix',
    'sao paulo': 'Sao Paulo Grand Prix'
}

# Initialize an empty DataFrame to hold all qualifying results
qualifying_results_df = pd.DataFrame()

for year in range(1983, 2024):
    print(f"Processing year: {year}")
    qualifying_files = glob.glob(f'./f1-data-2/{year}/Qualifying Results/*_qualifying_results.csv')
    num_races_year = races_df[races_df['year'] == year].shape[0]
    num_qualifying_files_year = len(qualifying_files)

    if num_qualifying_files_year != num_races_year:
        logging.info(f"Year {year}: Expected {num_races_year} qualifying files, found {num_qualifying_files_year}")

    for file in qualifying_files:
        try:
            temp_df = pd.read_csv(file)
            race_name = file.split('/')[-1].replace('_qualifying_results.csv', '').replace('-', ' ')
            temp_df['Race'] = race_name
            temp_df['Year'] = year
            qualifying_results_df = pd.concat([qualifying_results_df, temp_df])
        except Exception as e:
            logging.info(f"Failed to read file {file}: {e}")

# Extract forename and surname from the qualifying results
qualifying_results_df[['Driver Forename', 'Driver Surname']] = qualifying_results_df['Driver'].str.split(pat=' ', n=1, expand=True)

# Filter only the front row (Positions 1 and 2)
def isPosition(position, target):
    try:
        return int(position) == target
    except (ValueError, TypeError):
        return False
def isFrontRow(position):
    return isPosition(position, 1) or isPosition(position, 2)

front_row_df = qualifying_results_df[qualifying_results_df['Position'].apply(isFrontRow)].copy()

# Merge with drivers data on both forename and surname
front_row_df = front_row_df.merge(drivers_df, left_on=['Driver Forename', 'Driver Surname'], right_on=['forename', 'surname'], how='left')
missing_drivers = front_row_df[front_row_df['driverId'].isnull()]
if not missing_drivers.empty:
    logging.info(f"Missing drivers data: {missing_drivers[['Driver', 'Race', 'Year']].to_dict(orient='records')}")

def map_race_name(race):
    mapped_name = race_name_mapping.get(race.lower(), race)
    if mapped_name == race:
        logging.info(f"Race name '{race}' was not matched. Using original name.")
    return mapped_name

front_row_df['Full Race Name'] = front_row_df['Race'].apply(map_race_name)

# Log the unmatched races
missing_races = front_row_df[front_row_df['Full Race Name'] == front_row_df['Race']]
if not missing_races.empty:
    logging.info(f"Unmatched race names: {missing_races[['Race', 'Year']].to_dict(orient='records')}")

# Print the unmatched races for immediate debugging
print("Unmatched race names:")
print(missing_races[['Race', 'Year']])

# Merge with races data using the full race names
front_row_df = front_row_df.merge(races_df, left_on=['Full Race Name', 'Year'], right_on=['name', 'year'], how='left')
missing_race_data = front_row_df[front_row_df['raceId'].isnull()]
if not missing_race_data.empty:
    logging.info(f"Missing race data: {missing_race_data[['Race', 'Full Race Name', 'Year']].to_dict(orient='records')}")

# Calculate the age of each front row driver at the time of the race using the correct date column
front_row_df['race_date'] = pd.to_datetime(front_row_df['date'])
front_row_df['dob'] = pd.to_datetime(front_row_df['dob'])
front_row_df['age_at_race'] = (front_row_df['race_date'] - front_row_df['dob']).dt.days / 365.25

# Identify the front rows for each race
front_row_df_sorted = front_row_df.sort_values(by=['Year', 'Race', 'Position'])
front_row_pairs = front_row_df_sorted.groupby(['Year', 'Race']).head(2).copy()

# Ensure each race has both pole sitter and P2
valid_front_rows = front_row_pairs.groupby(['Year', 'Race']).filter(lambda x: len(x) == 2)

# Create a structured list for the JSON output
front_rows_list = []

def isPosition(series, position):
    try:
        # Convert the series to integers
        series = series.astype(int)
        # Return a boolean series where the condition is met
        return series == position
    except ValueError as ve:
        print(f"ValueError: {ve}")
        return pd.Series([False] * len(series), index=series.index)  # Return a series of False in case of an error
    except TypeError as te:
        print(f"TypeError: {te}")
        return pd.Series([False] * len(series), index=series.index)  # Return a series of False in case of an error
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return pd.Series([False] * len(series), index=series.index)  # Return a series of False in case of an unexpected error

for (year, race), group in valid_front_rows.groupby(['Year', 'Race']):
    pole_sitter = group[isPosition(group['Position'], 1)].iloc[0]
    p2_driver = group[isPosition(group['Position'], 2)].iloc[0]
    
    front_row_entry = {
        'race': race,
        'year': int(year),  # Convert to int for JSON serialization
        'date': pole_sitter['race_date'].strftime('%Y-%m-%d'),  # Convert to string
        'pole': {
            'name': f"{pole_sitter['Driver Forename']} {pole_sitter['Driver Surname']}",
            'age': round(float(pole_sitter['age_at_race']), 2)  # Convert to float for JSON serialization
        },
        'p2': {
            'name': f"{p2_driver['Driver Forename']} {p2_driver['Driver Surname']}",
            'age': round(float(p2_driver['age_at_race']), 2)  # Convert to float for JSON serialization
        }
    }
    
    front_rows_list.append(front_row_entry)

# Export to JSON
with open('./youngest_front_rows.json', 'w') as f:
    json.dump(front_rows_list, f, indent=4)

# Print the resulting list for verification
print(json.dumps(front_rows_list, indent=4))

# Plot the data
combined_ages = [entry['pole']['age'] + entry['p2']['age'] for entry in front_rows_list]
years = [entry['year'] for entry in front_rows_list]

plt.figure(figsize=(12, 8))
plt.scatter(years, combined_ages)
plt.xlabel('Year')
plt.ylabel('Combined Age of Front Row')
plt.title('Youngest Front Rows by Year')
plt.grid(True)
plt.show()