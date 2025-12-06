# ClockAndCalendar  
A simple web app that displays a live digital clock, current date, day of the week, month, year, and detects if today is a Philippine legal holiday.

## Features
- Live updating digital clock (12-hour format)
- Displays current year, month, date, and day of the week
- Automatically detects selected Philippine holidays
- Simple and clean interface

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Logic and time/date handling |
| Date API | Retrieves real-time date and time |

## How It Works
1. The app reads the user's current system time and date using the JavaScript `Date` object.
2. A 1-second interval updates the digital clock in real time.
3. Month and weekday numbers are converted into readable text using custom arrays.
4. The app checks if today's month and date match any predefined Philippine holidays.
5. The UI displays:
   - Current time  
   - Year  
   - Month (short format)  
   - Day of the week  
   - Date  
   - Holiday name or a “No Legal Holiday” message  

## Screenshots
- [ClockAndCalendar Demo](ClockAndCalendarDemo.png)

## How to Run
1. Navigate to the ClockAndCalendar folder:
   ```bash
   cd ClockAndCalendar
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or configuration needed.

## Future Improvements
- Add more holiday types (special working/non-working)
- Add support for international holidays