# Multiplication Table  
A simple web app that generates a dynamic multiplication table based on two user inputs: the multiplicand and the multiplier.

## Features
- Generates a full multiplication table instantly
- Input validation with helpful alerts
- Supports values from 1 to 1000
- Allows resetting and generating new tables
- Clean and beginner-friendly interface

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Layout and styling |
| JavaScript (ES6) | Logic, DOM updates, input validation |

## How It Works
1. User enters two numbers:
   - **Multiplicand** (base number)  
   - **Multiplier** (range of multiplication)
2. The app validates both inputs:
   - Must be numbers  
   - Must be between 1 and 1000  
3. JavaScript generates the table dynamically by looping from 1 up to the multiplier.
4. Each line (`multiplicand × i = product`) is appended to the display area.
5. The input section hides, and the generated table appears.
6. User can click “New Table” to reset the interface and start over.

## Screenshots
- [MultiplicationTable Input Section](MultiplicationTableInputs.png)
- [MultiplicationTable Table Display](MultiplicationTableDisplay.png)

## How to Run
1. Navigate to the MultiplicationTable folder:
   ```bash
   cd MultiplicationTable
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or extra setup required.

## Future Improvements
- Add table export (PDF or text)
- Add color themes for readability
- Add support for larger tables with scrollable UI