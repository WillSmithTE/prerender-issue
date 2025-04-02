import pandas as pd
import re

# Function to strip country and team from the driver name
def strip_driver_name(driver):
    # Remove the country and team names from the driver string
    return re.sub(r"\(.*?\)\s*", "", driver).strip()

# Races mapping
race_mapping = {
    "BHR": "bahrain",
    "SAU": "saudi-arabia",
    "AUS": "australia",
    "EMI": "emilia-romagna",
    "MIA": "miami",
    "ESP": "spain",
    "MCO": "monaco",
    "AZE": "azerbaijan",
    "CAN": "canada",
    "GBR": "great-britain",
    "AUT": "austria",
    "FRA": "france",
    "HUN": "hungary",
    "BEL": "belgium",
    "NLD": "netherlands",
    "ITA": "italy",
    "SGP": "singapore",
    "JPN": "japan",
    "USA": "usa",
    "MEX": "mexico",
    "SAO": "sao-paulo",
    "ABU": "abu-dhabi"
}
# Provided data for 2023
data = {
    'Driver': [
        'Max Verstappen', 'Charles Leclerc', 'Carlos Sainz', 'Sergio Perez', 'Lewis Hamilton', 'George Russell',
        'Lando Norris', 'Fernando Alonso', 'Esteban Ocon', 'Valtteri Bottas', 'Daniel Ricciardo', 'Kevin Magnussen',
        'Pierre Gasly', 'Nyck de Vries', 'Yuki Tsunoda', 'Sebastian Vettel', 'Guanyu Zhou', 'Mick Schumacher',
        'Alexander Albon', 'Lance Stroll', 'Nico Hulkenberg', 'Nicholas Latifi'
    ],
    'BHR': [2, 1, 3, 4, 5, 9, 13, 8, 11, 6, 18, 7, 10, None, 16, None, 15, 12, 14, 19, 17, 20],
    'SAU': [4, 2, 3, 1, 16, 6, 11, 7, 5, 8, 12, 10, 9, None, 20, None, 13, 14, 17, 15, 18, 19],
    'AUS': [2, 1, 9, 3, 5, 6, 4, 10, 8, 12, 7, 17, 11, None, 13, 18, 14, 15, 16, 20, None, 19],
    'EMI': [1, 2, 10, 7, 13, 11, 3, 5, 19, 8, 6, 4, 17, None, 16, 9, 14, 12, 20, 15, None, 18],
    'MIA': [3, 1, 2, 4, 6, 12, 8, 11, 20, 5, 14, 16, 7, None, 9, 13, 17, 15, 18, 10, None, 19],
    'ESP': [2, 1, 3, 5, 6, 4, 11, 17, 12, 7, 9, 8, 14, None, 13, 16, 15, 10, 19, 18, None, 20],
    'MCO': [4, 1, 2, 3, 8, 6, 5, 7, 10, 12, 14, 13, 17, None, 11, 9, 20, 15, 16, 18, None, 19],
    'AZE': [3, 1, 4, 2, 7, 5, 11, 10, 13, 15, 12, 16, 6, None, 8, 9, 14, 20, 17, 19, None, 18],
    'CAN': [1, 15, 3, 13, 4, 8, 14, 2, 7, 11, 9, 5, 16, None, 20, 17, 10, 6, 12, 18, None, 19],
    'GBR': [2, 3, 1, 4, 5, 8, 6, 7, 15, 12, 14, 17, 11, None, 13, 20, 9, 19, 16, 10, None, 18],
    'AUT': [1, 2, 3, 13, 9, 4, 15, 8, 5, 20, 16, 14, 10, None, 14, 19, 18, 7, 11, 17, None, 19],
    'FRA': [2, 1, 9, 3, 4, 6, 5, 7, 12, 13, 11, 10, 16, None, 14, 20, 18, 15, 19, 17, None, 20],
    'HUN': [10, 3, 2, 11, 7, 1, 4, 6, 5, 8, 9, 13, 19, None, 17, 18, 12, 15, 20, 14, None, 20],
    'BEL': [1, 4, 2, 3, 7, 8, 10, 6, 5, 20, 14, 18, 12, None, 19, 13, 17, 15, 9, 14, None, 17],
    'NLD': [1, 2, 3, 5, 4, 6, 7, 13, 12, 16, 17, 18, 11, None, 9, 10, 14, 8, 15, 19, None, 20],
    'ITA': [2, 1, 3, 4, 5, 6, 7, 10, 11, 12, 8, 9, 15, None, 14, 19, 16, 13, 17, 20, None, 18],
    'SGP': [8, 1, 4, 2, 3, 11, 6, 5, 18, 16, 20, 13, 9, 19, 10, 17, 12, 14, 15, 7, None, 16],
    'JPN': [1, 2, 3, 4, 6, 8, 10, 7, 5, 17, 14, 9, 13, None, 11, 18, 15, 19, 16, 12, None, 20],
    'USA': [3, 2, 1, 4, 5, 6, 8, 7, 19, 12, 11, 10, 17, None, 9, 15, 14, 13, 16, 18, None, 20],
    'MEX': [1, 2, 4, 7, 3, 2, 8, 5, 10, 18, 20, 19, 13, None, 14, 17, 15, 9, 11, 16, None, 12],
    'SAO': [2, 7, 5, 4, 6, 8, 11, 9, 10, 18, 17, 16, 14, None, 19, 13, 20, 15, 12, 7, None, 20],
    'ABU': [1, 10, 4, 2, 5, 6, 7, 11, 12, 14, 16, 17, 18, None, 15, 20, 19, 13, 9, 14, None, 16]
}


# Extract the driver names and strip country and team names
data["Driver"] = [strip_driver_name(driver) for driver in data["Driver"]]

# Generate CSV files for each race
for short_name, full_name in race_mapping.items():
    race_results = {driver: data[short_name][i] for i, driver in enumerate(data["Driver"])}
    race_df = pd.DataFrame(list(race_results.items()), columns=["Driver", "Position"])
    race_df.to_csv(f"f1-data-2/2022/Qualifying Results/{full_name}_qualifying_results.csv", index=False)
    print(f"Generated {full_name}_qualifying_results.csv")

print("All race qualifying results CSVs for 2022 have been generated.")