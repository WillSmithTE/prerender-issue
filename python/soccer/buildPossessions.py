import pandas as pd
from bs4 import BeautifulSoup

# https://fbref.com/en/comps/1/possession/World-Cup-Stats
# https://ultra.zone/2010-FIFA-World-Cup-Stats-Team#category=summary&mode=average&order=2

def html_table_to_csv(html_content, year):
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find the table by id or class (modify if needed)
    table = soup.find('table', {'id': 'tbl'})
    
    # Convert HTML table to pandas DataFrame
    df = pd.read_html(str(table))[0]
    
    
    # Add a 'Year' column filled with the specific year
    df['Year'] = year
    
    # Save the DataFrame to a CSV file
    filename = f"possession/squad_possession_{year}.csv"
    df.to_csv(filename, index=False)
    print(f'Data saved to {filename}')

# Example usage of the function
html_content = """
<table id="tbl" class="tbl1 hb">
  <thead>
    <tr>
      <th>Teams</th>
      <th class="ctxt" title="Matches Played">MP</th>
      <th class="ctxt sort-d" title="Total game time">TGT</th>
      <th class="ctxt" title="Goals for">GF</th>
      <th class="ctxt" title="Assist">A</th>
      <th class="ctxt" title="Goals against">GA</th>
      <th class="ctxt" title="Shots">S</th>
      <th class="ctxt" title="Shots on goal">SOG</th>
      <th class="ctxt">Pass</th>
      <th class="ctxt" title="Pass complete">Pass<br />comp</th>
      <th class="ctxt">Cross</th>
      <th class="ctxt">Cross<br />Comp</th>
      <th class="ctxt" title="Corner kicks">CK</th>
      <th class="ctxt" title="Corner kicks">CK<br />Comp</th>
      <th class="ctxt" title="Offsides">OFF</th>
      <th class="ctxt">Throw-in</th>
      <th class="ctxt" title="Foul Committed">FC</th>
      <th class="ctxt" title="Foul Suffered">FS</th>
      <th class="ctxt" title="Yellow cards">YC</th>
      <th class="ctxt" title="Red cards">RC</th>
      <th class="ctxt" title="Actual playing time">APT</th>
      <th class="ctxt" title="Possession(%)">PSS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>
        <div class="flag-24 flag-24-UY"></div>
        Uruguay
      </th>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">7</td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">660</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.384)">
        1.50
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.32)">
        1.09
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.12)">
        1.09
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.07)">
        13.9
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.36)">
        6.27
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.435)">
        418
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.604)">
        258
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.373)">
        12.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.337)">
        2.73
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.07)">
        4.91
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.686)">
        1.09
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.106)">
        2.73
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.518)">
        17.6
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.314)">
        13.5
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.11)">
        15.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.54)">
        1.23
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.12)">
        0.13
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.055)">
        33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.408)">
        46%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-ES"></div>
        Spain
      </th>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">7</td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">660</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.067)">
        1.09
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.02)">
        0.68
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.98)">
        0.27
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.545)">
        16.5
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.36)">
        6.27
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">648</td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">519</td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">22.1</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.816)">
        6.41
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.73)">
        7.64
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.945)">
        4.36
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.35)">
        1.64
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.063)">
        20.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.67)">
        11.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.584)">
        18.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.655)">
        1.09
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.847)">
        39
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">58%</td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-NL"></div>
        Netherlands
      </th>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">7</td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">660</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.494)">
        1.64
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.525)">
        1.36
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.416)">
        0.81
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.094)">
        12.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.36)">
        6.27
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.192)">
        510
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.137)">
        363
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.306)">
        12.8
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.12)">
        3.41
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.106)">
        4.23
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.49)">
        1.36
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.44)">
        3.95
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.165)">
        20.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.282)">
        17.2
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.227)">
        15.8
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.816)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.12)">
        0.13
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.055)">
        33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.298)">
        52%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-DE"></div>
        Germany
      </th>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">7</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.898)">
        630
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">2.29</td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">2.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.518)">
        0.71
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.2)">
        14.6
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.29)">
        6.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.51)">
        564
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.392)">
        409
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.573)">
        19.1
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.376)">
        5.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.404)">
        6.29
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.106)">
        2.29
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.26)">
        3.29
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.737)">
        16.1
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.71)">
        10.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.54)">
        11.4
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.27)">
        1.57
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.137)">
        0.14
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.545)">
        37
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.18)">
        51%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-GH"></div>
        Ghana
      </th>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.333)">
        5
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.486)">
        510
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.12)">
        0.88
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.74)">
        0.17
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.53)">
        0.70
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.78)">
        17.8
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.192)">
        5.65
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.39)">
        424
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.36)">
        290
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.345)">
        12.5
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.196)">
        3.18
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.008)">
        4.59
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.71)">
        1.06
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.29)">
        1.76
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.09)">
        21.9
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.035)">
        15.9
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.694)">
        10.6
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.027)">
        1.94
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.243)">
        35
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.055)">
        49%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-PY"></div>
        Paraguay
      </th>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.333)">
        5
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.384)">
        480
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.443)">
        0.56
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.145)">
        0.56
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.875)">
        0.37
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.2)">
        11.8
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.016)">
        4.88
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.243)">
        444
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.345)">
        292
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.616)">
        10.5
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.075)">
        3.56
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.55)">
        2.63
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.655)">
        1.13
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.514)">
        1.31
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.416)">
        24.6
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.47)">
        18.2
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.082)">
        14.8
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.173)">
        1.69
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.19)">
        32
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.063)">
        50%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-BR"></div>
        Brazil
      </th>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.333)">
        5
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.282)">
        450
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.62)">
        1.80
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.7)">
        1.60
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.427)">
        0.80
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.78)">
        17.8
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.345)">
        6.20
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.557)">
        572
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.624)">
        451
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.192)">
        16.4
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.004)">
        3.80
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.53)">
        6.80
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.553)">
        3.40
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.57)">
        1.20
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.196)">
        19.8
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.016)">
        15.6
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.14)">
        15.2
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.404)">
        1.40
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.235)">
        0.20
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.545)">
        37
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.765)">
        56%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-AR"></div>
        Argentina
      </th>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.333)">
        5
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.282)">
        450
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.776)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.106)">
        0.80
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.008)">
        1.20
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">19.0</td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">8.60</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.75)">
        605
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.667)">
        459
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.28)">
        13.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.067)">
        4.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.48)">
        6.60
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.475)">
        3.20
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.016)">
        2.40
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.165)">
        20.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.384)">
        13.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.17)">
        15.4
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.404)">
        1.40
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.847)">
        39
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.882)">
        57%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-US"></div>
        USA
      </th>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0)">4</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.08)">
        390
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.114)">
        1.15
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.298)">
        0.46
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.06)">
        1.15
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.435)">
        15.9
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.29)">
        6.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.52)">
        406
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.506)">
        271
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.075)">
        14.5
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.114)">
        4.15
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.192)">
        3.92
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.02)">
        2.08
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.706)">
        0.92
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.125)">
        22.2
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.455)">
        12.5
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.01)">
        14.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.13)">
        2.08
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.055)">
        33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.063)">
        50%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-JP"></div>
        Japan
      </th>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0)">4</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.08)">
        390
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.082)">
        0.92
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.298)">
        0.46
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.78)">
        0.46
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.34)">
        10.6
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.353)">
        6.23
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">341</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">205</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.694)">
        9.92
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.694)">
        1.62
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.51)">
        2.77
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.643)">
        1.15
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.05)">
        2.54
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.047)">
        20.8
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.094)">
        16.2
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">21.2</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.227)">
        1.62
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">26</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.882)">
        42%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-SK"></div>
        Slovakia
      </th>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0)">4</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.08)">
        360
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.192)">
        1.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.255)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.196)">
        1.75
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.376)">
        10.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.557)">
        2.75
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.192)">
        451
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.22)">
        309
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.21)">
        13.5
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.49)">
        2.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.153)">
        5.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.192)">
        2.50
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.173)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">29.5</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.243)">
        17.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.298)">
        16.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.627)">
        2.75
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.325)">
        31
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.063)">
        50%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-PT"></div>
        Portugal
      </th>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0)">4</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.08)">
        360
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.58)">
        1.75
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.816)">
        1.75
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.25</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.055)">
        13.8
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.082)">
        5.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.106)">
        495
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.15)">
        365
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.275)">
        17.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.01)">
        3.75
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.173)">
        4.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.39)">
        1.50
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.173)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.384)">
        18.5
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.1)">
        15.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.427)">
        12.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.07)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.055)">
        33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.408)">
        46%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-MX"></div>
        Mexico
      </th>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0)">4</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.08)">
        360
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.004)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.07)">
        0.75
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.016)">
        1.25
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.024)">
        13.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.114)">
        4.50
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.298)">
        528
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.34)">
        400
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.17)">
        13.8
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.25)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.1)">
        4.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.192)">
        2.50
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.314)">
        3.50
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.267)">
        19.3
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">21.0</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.227)">
        15.8
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.255)">
        2.25
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.392)">
        36
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.416)">
        53%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-KR"></div>
        Korea Republic
      </th>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0)">4</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.08)">
        360
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.384)">
        1.50
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.24)">
        0.50
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.282)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.365)">
        15.5
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.153)">
        5.50
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.02)">
        480
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.047)">
        332
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.345)">
        12.5
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.094)">
        3.50
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.03)">
        4.50
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.57)">
        1.25
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.792)">
        0.75
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.52)">
        25.5
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.2)">
        14.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.082)">
        14.8
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.325)">
        1.50
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.392)">
        36
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.18)">
        51%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-_england"></div>
        England
      </th>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0)">4</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.08)">
        360
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.25)">
        0.75
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.07)">
        0.75
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.016)">
        1.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.51)">
        16.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.77)">
        7.75
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.392)">
        544
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.314)">
        395
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.247)">
        16.8
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.094)">
        3.50
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">8.75</td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">4.50</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.047)">
        2.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.1)">
        22.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.41)">
        12.8
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.463)">
        11.8
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.325)">
        1.50
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.243)">
        35
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.298)">
        52%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-CL"></div>
        Chile
      </th>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0)">4</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.08)">
        360
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.25)">
        0.75
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.07)">
        0.75
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.016)">
        1.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.455)">
        16.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.05)">
        4.75
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.145)">
        502
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.12)">
        360
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.176)">
        16.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.298)">
        4.75
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.094)">
        5.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.09)">
        2.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.52)">
        4.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.02)">
        21.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.773)">
        19.8
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.4)">
        17.0
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">3.25</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.318)">
        0.25
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.09)">
        34
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.298)">
        52%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-CH"></div>
        Switzerland
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.67)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.918)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.33)">
        10.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.494)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.506)">
        408
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.46)">
        277
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.176)">
        16.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.17)">
        4.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.263)">
        3.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.51)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.667)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.267)">
        19.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.753)">
        19.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.29)">
        12.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.57)">
        2.67
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.46)">
        30
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.53)">
        45%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-ZA"></div>
        South Africa
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.004)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.255)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.165)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.024)">
        13.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.29)">
        6.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.024)">
        474
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.082)">
        353
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.133)">
        16.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.04)">
        3.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.173)">
        4.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.263)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.18)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.34)">
        24.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.2)">
        14.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.753)">
        10.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.463)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.19)">
        32
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.29)">
        47%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-SI"></div>
        Slovenia
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.004)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.255)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.216)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.53)">
        9.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.07)">
        4.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.235)">
        445
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.25)">
        305
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.176)">
        16.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.467)">
        2.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.63)">
        2.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.51)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.008)">
        2.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.224)">
        23.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.145)">
        14.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.357)">
        16.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.816)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.055)">
        33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.173)">
        48%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-RS"></div>
        Serbia
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.34)">
        0.66
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.498)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.216)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.27)">
        15.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.32)">
        3.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.106)">
        495
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.11)">
        358
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.184)">
        13.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.275)">
        4.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.263)">
        3.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.51)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.54)">
        4.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.855)">
        15.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.81)">
        10.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.87)">
        20.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.57)">
        2.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.45)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">40</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.298)">
        52%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-NG"></div>
        Nigeria
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.004)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.498)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.165)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.33)">
        10.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.494)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.616)">
        393
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.54)">
        266
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.184)">
        13.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.573)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.537)">
        2.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.263)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.33</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.26)">
        23.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.1)">
        15.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.675)">
        10.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.19)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.596)">
        29
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.647)">
        44%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-NZ"></div>
        New Zealand
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.34)">
        0.66
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.498)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.573)">
        0.66
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">5.00</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">1.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.83)">
        364
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.88)">
        221
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.776)">
        9.33
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.66</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">1.00</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.66</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.667)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.165)">
        20.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.867)">
        20.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.482)">
        11.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.07)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.325)">
        31
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.408)">
        46%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-KP"></div>
        DPR Korea
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.67)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.498)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">4.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.26)">
        11.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.32)">
        3.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.48)">
        412
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.525)">
        268
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">7.67</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.357)">
        2.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.91)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.66</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.173)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">14.3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">8.67</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.01)">
        14.3
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.66</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.596)">
        29
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">41%</td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-IT"></div>
        Italy
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.255)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.004)">
        0.66
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.165)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.51)">
        16.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.29)">
        6.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.463)">
        556
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.38)">
        407
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.843)">
        21.0
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">7.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.98)">
        8.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.93)">
        4.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.008)">
        2.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.906)">
        28.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.2)">
        14.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.73)">
        19.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.19)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.243)">
        35
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.416)">
        53%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-HN"></div>
        Honduras
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.216)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.647)">
        8.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.918)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.616)">
        393
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.647)">
        252
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.776)">
        9.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.25)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.447)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.263)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">6.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.165)">
        20.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.3)">
        17.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.176)">
        13.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.318)">
        2.33
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.73)">
        28
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.647)">
        44%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-GR"></div>
        Greece
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.34)">
        0.66
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.165)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.024)">
        13.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.106)">
        5.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.47)">
        413
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.427)">
        281
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.745)">
        20.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.25)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.737)">
        7.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.02)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.008)">
        2.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.357)">
        18.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.34)">
        13.3
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.482)">
        11.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.19)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.055)">
        33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.408)">
        46%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-FR"></div>
        France
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.67)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.498)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.043)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.035)">
        13.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.32)">
        3.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.02)">
        480
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.024)">
        335
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.463)">
        18.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.17)">
        4.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.01)">
        4.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.51)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.45)">
        4.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.02)">
        21.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.376)">
        17.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.21)">
        15.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.07)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.19)">
        32
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.298)">
        52%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-DK"></div>
        Denmark
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.004)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.004)">
        0.66
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.282)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.09)">
        14.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.106)">
        5.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.05)">
        470
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.04)">
        345
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.14)">
        14.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.067)">
        4.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.263)">
        3.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.263)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.667)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.545)">
        25.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.49)">
        18.3
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">9.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.07)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.19)">
        32
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.173)">
        48%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-CI"></div>
        Côte d'Ivoire
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.255)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.255)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.216)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.145)">
        14.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.47)">
        6.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.094)">
        493
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.204)">
        375
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.463)">
        18.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.898)">
        6.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.173)">
        5.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.525)">
        3.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.086)">
        2.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.416)">
        18.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.624)">
        19.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.043)">
        14.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.19)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.243)">
        35
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.18)">
        51%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-CM"></div>
        Cameroon
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.34)">
        0.66
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.165)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.51)">
        16.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.016)">
        5.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.44)">
        552
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.34)">
        400
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.66)">
        19.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.48)">
        5.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.173)">
        5.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.392)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.173)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.26)">
        23.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.565)">
        18.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.098)">
        13.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.19)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.243)">
        35
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.53)">
        54%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-AU"></div>
        Australia
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.004)">
        1.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.498)">
        0.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.282)">
        2.00
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.21)">
        11.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.07)">
        4.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.106)">
        495
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.055)">
        348
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.047)">
        14.7
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.17)">
        4.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.08)">
        4.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.263)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.506)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.56)">
        17.3
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.945)">
        20.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.427)">
        12.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.318)">
        2.33
      </td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.325)">
        31
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.29)">
        47%
      </td>
    </tr>
    <tr>
      <th>
        <div class="flag-24 flag-24-DZ"></div>
        Algeria
      </th>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">3</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">270</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgb(160, 198, 255)">0.00</td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.573)">
        0.66
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.035)">
        13.7
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.663)">
        2.33
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.06)">
        487
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.082)">
        353
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.7)">
        20.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.275)">
        4.67
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.08)">
        4.33
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.263)">
        1.67
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.18)">
        3.00
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.34)">
        24.0
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.243)">
        17.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.808)">
        10.0
      </td>
      <td class="rtxt" style="background-color: rgba(160, 198, 255, 0.463)">
        1.33
      </td>
      <td class="rtxt" style="background-color: rgb(255, 160, 160)">0.66</td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.243)">
        35
      </td>
      <td class="rtxt" style="background-color: rgba(255, 160, 160, 0.063)">
        50%
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Teams</th>
      <th class="ctxt" title="Matches Played">MP</th>
      <th class="ctxt" title="Total game time">TGT</th>
      <th class="ctxt" title="Goals for">GF</th>
      <th class="ctxt" title="Assist">A</th>
      <th class="ctxt" title="Goals against">GA</th>
      <th class="ctxt" title="Shots">S</th>
      <th class="ctxt" title="Shots on goal">SOG</th>
      <th class="ctxt">Pass</th>
      <th class="ctxt" title="Pass complete">Pass<br />comp</th>
      <th class="ctxt">Cross</th>
      <th class="ctxt">Cross<br />Comp</th>
      <th class="ctxt" title="Corner kicks">CK</th>
      <th class="ctxt" title="Corner kicks">CK<br />Comp</th>
      <th class="ctxt" title="Offsides">OFF</th>
      <th class="ctxt">Throw-in</th>
      <th class="ctxt" title="Foul Committed">FC</th>
      <th class="ctxt" title="Foul Suffered">FS</th>
      <th class="ctxt" title="Yellow cards">YC</th>
      <th class="ctxt" title="Red cards">RC</th>
      <th class="ctxt" title="Actual playing time">APT</th>
      <th class="ctxt" title="Possession(%)">PSS</th>
    </tr>
  </tfoot>
</table>
"""  # your HTML content goes here
year = 2010  # the specific year for your data
html_table_to_csv(html_content, year)