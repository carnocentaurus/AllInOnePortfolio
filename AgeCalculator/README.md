# AgeCalculator  
A simple web application that calculates your exact age in multiple time units based on your birthday. It provides age in years, months, weeks, days, hours, minutes, seconds, and milliseconds.

## Features
- Calculates age from a selected birthdate  
- Shows age in:
  - Milliseconds  
  - Seconds  
  - Minutes  
  - Hours  
  - Days  
  - Weeks  
  - Months (approximate)  
  - Years (with birthday adjustment)  
- Automatically detects if today is the user's birthday  
- Input validation prevents future dates  
- Clean and simple UI

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and form input |
| CSS3 | Page layout and styling |
| JavaScript (ES6) | Age calculations, formatting, DOM updates |

## How It Works
1. User selects their birthday from a date input.
2. JavaScript reads the input and compares it with the current date.
3. The app:
   - Validates the date (disallows future birthdays)  
   - Computes total milliseconds lived  
   - Converts this value into all other units  
   - Calculates accurate age in years by adjusting for whether the birthday has passed this year  
4. If today is the user's birthday, a birthday message appears.
5. All results are formatted and displayed dynamically.

## Screenshot
- [AgeCalculator Demo](AgeCalculatorDemo.png)  

## How to Run
1. Navigate to the AgeCalculator folder:
   ```bash
   cd AgeCalculator
   ```
2. Open the HTML file:
   ```bash
   open index.html
   ```
No installations or additional setup required.

## Future Improvements
- Add age until next birthday  
- Show zodiac sign or birth season