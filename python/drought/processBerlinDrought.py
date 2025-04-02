import pandas as pd
import logging

# Configure logging
logging.basicConfig(filename='error_log.log', level=logging.ERROR)

# Load the data
file_path = 'produkt_rr_stunde_19950901_20231231_00433.txt'

# Read the data
data = pd.read_csv(file_path, sep=';', skipinitialspace=True)

# Filter out invalid data where 'R1' is -999
invalid_data = data[data['R1'] == -999]
valid_data = data[data['R1'] != -999]

# Log the invalid data
for index, row in invalid_data.iterrows():
    logging.error(f"Invalid data at index {index}: {row.to_dict()}")

# Convert 'MESS_DATUM' to datetime and extract year and month
valid_data['MESS_DATUM'] = pd.to_datetime(valid_data['MESS_DATUM'], format='%Y%m%d%H')
valid_data['Year'] = valid_data['MESS_DATUM'].dt.year
valid_data['Month'] = valid_data['MESS_DATUM'].dt.month

# Calculate monthly total rainfall
monthly_rainfall = valid_data.groupby(['Year', 'Month'])['R1'].sum().reset_index()
monthly_rainfall.columns = ['Year', 'Month', 'Rainfall (mm)']

# Save to CSV
output_file_path = 'berlin_monthly_rainfall.csv'
monthly_rainfall.to_csv(output_file_path, index=False)

print(f"Monthly rainfall data has been saved to {output_file_path}.")