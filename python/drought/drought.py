import pandas as pd
import matplotlib.pyplot as plt
import json

# Load the datasets
berlin_file = 'berlin_monthly_rainfall.csv'
sydney_file = 'sydney_monthly_rainfall.csv'
vancouver_file = 'vancouver_monthly_rainfall.csv'

berlin_data = pd.read_csv(berlin_file)
sydney_data = pd.read_csv(sydney_file)
vancouver_data = pd.read_csv(vancouver_file)

# Ensure there are no leading/trailing spaces in column names
berlin_data.columns = berlin_data.columns.str.strip()
sydney_data.columns = sydney_data.columns.str.strip()
vancouver_data.columns = vancouver_data.columns.str.strip()

# Find the common years across all datasets
common_years = set(berlin_data['Year']).intersection(set(sydney_data['Year'])).intersection(set(vancouver_data['Year']))

# Filter the datasets to only include the common years
berlin_filtered = berlin_data[berlin_data['Year'].isin(common_years)]
sydney_filtered = sydney_data[sydney_data['Year'].isin(common_years)]
vancouver_filtered = vancouver_data[vancouver_data['Year'].isin(common_years)]

# Calculate the average monthly rainfall for each city
berlin_avg_monthly = berlin_filtered.groupby('Month')['Rainfall (mm)'].mean()
sydney_avg_monthly = sydney_filtered.groupby('Month')['Rainfall (mm)'].mean()
vancouver_avg_monthly = vancouver_filtered.groupby('Month')['Rainfall (mm)'].mean()

# Determine the range of common years
common_years_range = f"{min(common_years)}-{max(common_years)}"

# Plot the results
plt.figure(figsize=(10, 6))
plt.plot(berlin_avg_monthly.index, berlin_avg_monthly.values, label='Berlin', marker='o')
plt.plot(sydney_avg_monthly.index, sydney_avg_monthly.values, label='Sydney', marker='o')
plt.plot(vancouver_avg_monthly.index, vancouver_avg_monthly.values, label='Vancouver', marker='o')

plt.xlabel('Month')
plt.ylabel('Average Monthly Rainfall (mm)')
plt.title(f'Average Monthly Rainfall for Berlin, Sydney, and Vancouver ({common_years_range})')
plt.legend()
plt.grid(True)
plt.xticks(range(1, 13), ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])

plt.savefig('average_monthly_rainfall_comparison.png')
plt.show()

output = {
    "months": ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    "berlin": berlin_avg_monthly.values.tolist(),
    "sydney": sydney_avg_monthly.values.tolist(),
    "vancouver": vancouver_avg_monthly.values.tolist()
}

# Convert the dictionary to a JSON string
output_json = json.dumps(output, indent=4)

# Save the JSON string to a file
with open('average_monthly_rainfall.json', 'w') as f:
    f.write(output_json)