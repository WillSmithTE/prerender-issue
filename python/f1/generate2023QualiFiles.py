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
    "AZE": "azerbaijan",
    "MIA": "miami",
    "MCO": "monaco",
    "ESP": "spain",
    "CAN": "canada",
    "AUT": "austria",
    "GBR": "great-britain",
    "HUN": "hungary",
    "BEL": "belgium",
    "NLD": "netherlands",
    "ITA": "italy",
    "SGP": "singapore",
    "JPN": "japan",
    "QAT": "qatar",
    "USA": "usa",
    "MEX": "mexico",
    "SAO": "sao-paulo",
    "LAS": "las-vegas",
    "ABU": "abu-dhabi"
}

# Provided data for 2023
data = {
   "Driver": ["Max Verstappen", "Charles Leclerc", "Carlos Sainz", "Lewis Hamilton", "George Russell", "Fernando Alonso",
           "Lando Norris", "Sergio Perez", "Oscar Piastri", "Pierre Gasly", "Esteban Ocon", "Nico Hulkenberg",
           "Alexander Albon", "Lance Stroll", "Yuki Tsunoda", "Valtteri Bottas", "Daniel Ricciardo", "Liam Lawson",
           "Kevin Magnussen", "Guanyu Zhou", "Nyck de Vries", "Logan Sargeant"],
    "BHR": [1, 3, 4, 7, 6, 5, 11, 2, 18, 20, 9, 10, 15, 8, 14, 12, None, None, 17, 13, 19, 16],
    "SAU": [15, 2, 5, 8, 4, 3, 19, 1, 9, 10, 7, 11, 17, 6, 16, 14, None, None, 13, 12, 18, 20],
    "AUS": [1, 7, 5, 3, 2, 4, 13, 20, 16, 9, 11, 10, 8, 6, 12, 19, None, None, 14, 17, 15, 18],
    "AZE": [2, 1, 4, 5, 11, 6, 7, 3, 10, 19, 12, 17, 13, 9, 8, 14, None, None, 18, 16, 20, 15],
    "MIA": [9, 7, 3, 13, 6, 2, 16, 1, 19, 5, 8, 12, 11, 18, 17, 10, None, None, 4, 14, 15, 20],
    "MCO": [1, 3, 5, 6, 8, 2, 10, 20, 11, 7, 4, 18, 13, 14, 9, 15, None, None, 17, 19, 12, 16],
    "ESP": [1, 19, 2, 5, 12, 9, 3, 11, 10, 4, 7, 8, 18, 6, 15, 16, None, None, 17, 20, 14, 20],
    "CAN": [1, 11, 8, 4, 5, 3, 7, 12, 9, 17, 6, 2, 10, 13, 16, 15, None, None, 14, 20, 18, 19],
    "AUT": [1, 2, 3, 5, 11, 7, 4, 15, 13, 19, 9, 8, 20, 6, 10, 17, None, None, 14, 18, 20, 18],
    "GBR": [1, 4, 5, 7, 6, 9, 2, 16, 3, 10, 13, 11, 17, 12, 18, 14, None, None, 15, 19, 20, 20],
    "HUN": [2, 6, 11, 1, 18, 8, 3, 9, 4, 10, 12, 10, 16, 14, 17, 19, 13, 20, 15, 5, 7, 20],
    "BEL": [1, 2, 5, 4, 8, 9, 7, 3, 6, 12, 15, 20, 19, 10, 11, 17, None, 13, 14, 18, 20, 18],
    "NLD": [1, 9, 6, 13, 3, 8, 2, 7, 15, 12, 18, 10, 14, 11, 17, 19, None, 20, 16, 20, 5, 10],
    "ITA": [2, 3, 1, 8, 4, 7, 9, 5, 6, 10, 14, 13, 17, 18, 11, 16, None, 19, 12, 20, 20, 15],
    "SGP": [11, 3, 1, 5, 2, 8, 10, 13, 17, 14, 12, 15, 20, 16, 19, 18, None, 7, 6, 20, 9, 18],
    "JPN": [1, 4, 7, 6, 8, 10, 3, 5, 2, 9, 15, 18, 19, 20, 14, 12, None, 11, 13, 20, 17, 16],
    "QAT": [1, 12, 3, 7, 2, 4, 10, 9, 6, 13, 17, 15, 18, 20, 16, 14, None, 11, 19, 20, 8, 19],
    "USA": [6, 1, 5, 9, 3, 8, 2, 4, 7, 10, 11, 13, 15, 12, 14, 18, None, 20, 16, 17, 19, 20],
    "MEX": [3, 1, 2, 6, 8, 11, 4, 5, 7, 10, 15, 18, 20, 14, 17, 16, None, 12, 9, 19, 13, 20],
    "SAO": [1, 2, 8, 4, 6, 7, 9, 5, 10, 13, 12, 17, 16, 14, 15, 19, None, 11, 18, 20, 3, 20],
    "LAS": [3, 1, 2, 11, 5, 7, 8, 9, 10, 12, 15, 17, 20, 14, 16, 18, None, 19, 13, 6, 4, 20],
    "ABU": [1, 2, 16, 12, 4, 5, 9, 7, 6, 11, 18, 10, 20, 14, 17, 13, None, 19, 3, 8, 15, 20]
}


# Extract the driver names and strip country and team names
data["Driver"] = [strip_driver_name(driver) for driver in data["Driver"]]

# Generate CSV files for each race
for short_name, full_name in race_mapping.items():
    race_results = {driver: data[short_name][i] for i, driver in enumerate(data["Driver"])}
    race_df = pd.DataFrame(list(race_results.items()), columns=["Driver", "Position"])
    race_df.to_csv(f"{full_name}_qualifying_results.csv", index=False)
    print(f"Generated {full_name}_qualifying_results.csv")

print("All race qualifying results CSVs for 2023 have been generated.")