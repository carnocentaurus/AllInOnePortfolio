# Calculator
A simple calculator web application built with HTML, CSS, and vanilla JavaScript. Supports basic arithmetic operations with input validation to prevent unsafe expressions.

## Features
- Add, subtract, multiply, and divide  
- Clear input and delete last digit  
- Prevents unsafe characters  
- Displays error messages for invalid expressions  
- Lightweight and responsive UI

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Logic and expression evaluation |

## How It Works
1. User presses buttons to append characters to the display  
2. The calculator uses JavaScript functions:
   - `appendToDisplay()` adds characters  
   - `pullFromDisplay()` removes the last character  
   - `clearDisplay()` resets the screen  
   - `calculate()` validates and evaluates the expression  
3. Input is sanitized to allow only: 0–9, +, -, *, /, ., parentheses, spaces
4. Unsafe characters trigger an alert  
5. The sanitized expression is evaluated using a safe `Function` wrapper  
6. Any error results in the display showing "Error"

## Screenshot
- [Calculator Demo](CalculatorDemo.png)

## How to Run
1. Navigate to the Calculator folder:
   ```bash
   cd Calculator
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Add keyboard support
- Add scientific calculator features