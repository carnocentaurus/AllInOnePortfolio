# WeatherSystem  
A simple weather lookup tool that fetches real-time weather information using the OpenWeatherMap API. Users can enter any city to view temperature, weather conditions, wind speed, wind direction, and peak wind data.

## Features
### City-Based Weather Search  
- Enter any city name  
- Validates empty input  
- Fetches live data from OpenWeatherMap  
- Displays weather info instantly  
### Weather Details Shown  
- Weather description  
- Weather icon  
- Temperature in:
  - Celsius  
  - Fahrenheit  
- Wind speed (converted to km/h)  
- Wind direction (converted from degrees to human-readable text)  
- Peak wind (if available; otherwise displays fallback text)  
### Wind Direction Conversion  
Degrees are translated into a readable compass direction using a 16-point directional system (e.g., North, East-Southeast, West-Northwest, etc.).
### Temperature Conversion  
Automatically converts:  
- Celsius → Fahrenheit using the standard formula  
### Data Validation  
- Rejects empty city names  
- Alerts user for invalid input or fetch errors  
- Gracefully handles missing wind gust data  

## How it Works
### Fetching Data  
- Reads user input from the text field  
- Requests weather data from the OpenWeatherMap API  
- Parses temperature, wind, and icon information  
- Converts values where needed  
- Updates the UI by displaying all weather details  
### UI Behavior  
- Weather info container stays hidden until a valid search  
- On success:
  - Weather icon updates  
  - Description appears  
  - Temperature in both scales displays  
  - Wind speed/direction shows up  
  - Peak wind data displayed or replaced with fallback text  

# Screenshot
- [WeatherSystem Demo](WeatherSystemDemo.png)

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML | Page structure |
| CSS | Weather UI layout |
| JavaScript | Fetch requests & data processing |
| OpenWeatherMap API | Provides real-time weather data |

## Requirements  
- A valid **OpenWeatherMap API key**  
- Internet connection to fetch weather data  

## How to Run
1. Navigate to the WeatherSystem folder:
   ```bash
   cd WeatherSystem
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Enhancements    
- Show 5-day forecast  
- Add humidity & pressure  
- Auto-detect user’s location  