import os
import pandas as pd

# Directory containing the CSV files
data_dir = './canada'

# Initialize an empty DataFrame to store monthly rainfall data
monthly_rainfall = pd.DataFrame(columns=['Year', 'Month', 'Total Rainfall (mm)'])

# Iterate over all CSV files in the directory
for filename in os.listdir(data_dir):
    if filename.endswith('.csv'):
        # Read the CSV file
        file_path = os.path.join(data_dir, filename)
        df = pd.read_csv(file_path)
        
        # Convert Date/Time to datetime and extract year and month
        df['Date/Time'] = pd.to_datetime(df['Date/Time'])
        df['Year'] = df['Date/Time'].dt.year
        df['Month'] = df['Date/Time'].dt.month
        
        # Convert 'Total Rain (mm)' to numeric, setting errors='coerce' to handle non-numeric values
        df['Rainfall (mm)'] = pd.to_numeric(df['Total Precip (mm)'], errors='coerce')
        
        # Group by year and month and calculate 
        monthly_rain = df.groupby(['Year', 'Month'])['Rainfall (mm)'].sum().reset_index()
        
        # Append to the monthly_rainfall DataFrame
        monthly_rainfall = pd.concat([monthly_rainfall, monthly_rain])

# Group by year and month to get the final total rainfall
monthly_rainfall = monthly_rainfall.groupby(['Year', 'Month'])['Rainfall (mm)'].sum().reset_index()

# Save the aggregated data to a new CSV file
output_file = './vancouver_monthly_rainfall.csv'
monthly_rainfall.to_csv(output_file, index=False)

print(f"Monthly rainfall data has been saved to {output_file}")