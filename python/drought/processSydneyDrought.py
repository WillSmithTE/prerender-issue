import pandas as pd

# Load the data
file_path = 'sydney-botanical.csv'
data = pd.read_csv(file_path)

# Initialize a list to store the results
monthly_data = []

# Iterate through each row in the dataframe
for _, row in data.iterrows():
    year = int(row['Year'])
    for month in range(1, 13):
        month_name = pd.to_datetime(f'{year}-{month:02d}').strftime('%b')
        rainfall = row[month_name]
        if rainfall == -999:
            with open("error_log.txt", "a") as log_file:
                log_file.write(f"Invalid data for {year}-{month:02d}: {rainfall}\n")
            continue
        monthly_data.append([year, month, rainfall])

# Create a new dataframe from the results
monthly_df = pd.DataFrame(monthly_data, columns=['Year', 'Month', 'Rainfall (mm)'])

# Save the result to a CSV file
output_path = 'sydney_monthly_rainfall.csv'
monthly_df.to_csv(output_path, index=False)

# Display the first few rows of the new dataframe
monthly_df.head()