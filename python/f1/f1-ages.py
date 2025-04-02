import pandas as pd
import matplotlib.pyplot as plt
import re

# Load the files
races_df = pd.read_csv('f1-races.csv')
quali_df = pd.read_csv('f1_quali_24.csv')
drivers_df = pd.read_csv('f1-1950-2023/drivers.csv')

# Convert race dates to datetime format
races_df['Race date'] = pd.to_datetime(races_df['Race date'], format='%d %B %Y')

# Extract driver names by removing the nationality prefix and team suffix
quali_df['Driver Name'] = quali_df['Driver']

# Combine first name and last name in drivers_df to match the format in quali_df
drivers_df['Driver Name'] = drivers_df['forename'] + ' ' + drivers_df['surname']

# Merge the qualifying results with the drivers dataframe to get the birthdates using the corrected names
quali_with_dob_df = pd.merge(quali_df, drivers_df[['Driver Name', 'dob']], on='Driver Name', how='left')

# Create a mapping dictionary for Grand Prix names to their abbreviations
gp_abbreviation_mapping = {
    'Bahrain Grand Prix': 'BHR',
    'Saudi Arabian Grand Prix': 'SAU',
    'Australian Grand Prix': 'AUS',
    'Japanese Grand Prix': 'JPN',
    'Chinese Grand Prix': 'CHN',
    'Miami Grand Prix': 'MIA',
    'Emilia Romagna Grand Prix': 'EMI',
    'Monaco Grand Prix': 'MCO'
}

# Function to calculate age on a specific date
def calculate_age(birthdate, date):
    return (date - pd.to_datetime(birthdate)).days / 365.25

# Initialize lists to store results
race_names = []
pole_sitter_names = []
pole_sitter_ages = []
second_driver_names = []
second_driver_ages = []
front_row_combined_ages = []

# Iterate through each race to calculate ages
for index, race in races_df.iterrows():
    race_date = race['Race date']
    gp_name = race['Grand Prix']
    gp_abbr = gp_abbreviation_mapping.get(gp_name, None)
    
    if gp_abbr and gp_abbr in quali_with_dob_df.columns:
        race_quali = quali_with_dob_df[['Driver Name', 'dob', gp_abbr]].sort_values(by=gp_abbr).dropna(subset=[gp_abbr])
        print(race_quali)
        if len(race_quali) >= 2:
            pole_sitter = race_quali.iloc[0]
            second_driver = race_quali.iloc[1]
            
            # Calculate ages
            pole_sitter_age = calculate_age(pole_sitter['dob'], race_date)
            second_driver_age = calculate_age(second_driver['dob'], race_date)
            
            # Store results
            race_names.append(gp_name)
            pole_sitter_names.append(pole_sitter['Driver Name'])
            pole_sitter_ages.append(pole_sitter_age)
            second_driver_names.append(second_driver['Driver Name'])
            second_driver_ages.append(second_driver_age)
            front_row_combined_ages.append(pole_sitter_age + second_driver_age)
    else:
        print(f'No qualifying data found for {gp_name} (columns={quali_with_dob_df.columns})')

# Create a dataframe for the results
results_df = pd.DataFrame({
    'Race': race_names,
    'Pole Sitter': pole_sitter_names,
    'Pole Sitter Age': pole_sitter_ages,
    'Second Driver': second_driver_names,
    'Second Driver Age': second_driver_ages
})

# Display the table
print(results_df)

results_json = results_df.to_json(orient='records')

# Print the JSON string
print(results_json)

# Save the JSON string to a file
with open('f1_results.json', 'w') as f:
    f.write(results_json)

# Plot the data
plt.figure(figsize=(12, 6))
plt.plot(results_df['Race'], results_df['Pole Sitter Age'], label='Pole Sitter Age', marker='o')
plt.plot(results_df['Race'], front_row_combined_ages, label='Front Row Combined Age', marker='o')
plt.xlabel('Race')
plt.ylabel('Age')
plt.title('Pole Sitter Age and Front Row Combined Age for Each Race')
plt.xticks(rotation=45)
plt.legend()
plt.grid(True)
plt.tight_layout()

plt.show()