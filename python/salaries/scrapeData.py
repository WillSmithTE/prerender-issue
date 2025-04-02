# thanks yahoo finance
# https://finance.yahoo.com/quote/GOOG/history/?frequency=1wk&period1=1092922200&period2=1728691975

from bs4 import BeautifulSoup
import csv
import json

def parse_stock_data(html_file_path, output_csv_path, output_json_path):
    # Read the HTML file
    with open(html_file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    # Find the table
    table = soup.find('table', class_='table')

    # Extract and clean headers
    headers = []
    for th in table.find_all('th'):
        # Clean up the header text: remove newlines, extra spaces and normalize
        header = ' '.join(th.text.split()).strip()
        # Special case for "Adj Close" description
        if "Adjusted close price" in header:
            header = "Adj Close"
        elif "Close price adjusted" in header:
            header = "Close"
        headers.append(header)

    # Extract rows
    rows = []
    for tr in table.find_all('tr')[1:]:  # Skip the header row
        row = []
        for td in tr.find_all('td'):
            # Check if it's a dividend row
            if 'Dividend' in td.text:
                row = [td.find('span').text.strip() + ' Dividend']
                break
            else:
                row.append(td.text.strip())
        if row:
            rows.append(row)

    # Write to CSV file
    with open(output_csv_path, 'w', newline='', encoding='utf-8') as csvfile:
        csv_writer = csv.writer(csvfile)
        csv_writer.writerow(headers)
        csv_writer.writerows(rows)

    # Convert to JSON and write
    json_data = [dict(zip(headers, row)) for row in rows if len(row) == len(headers)]
    with open(output_json_path, 'w', encoding='utf-8') as jsonfile:
        json.dump(json_data, jsonfile, indent=2)

    print(f"Data has been extracted and saved to {output_csv_path} and {output_json_path}")

# Usage
companyName = 'sandp'
html_file_path = f'./stocks/raw/{companyName}.html'
output_csv_path = f'./stocks/out/{companyName}.csv'
output_json_path = f'./stocks/out-json/{companyName}.json'
parse_stock_data(html_file_path, output_csv_path, output_json_path)