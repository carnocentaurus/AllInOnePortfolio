# GradeInterpreter
A simple grade analysis web application built with HTML, CSS, and vanilla JavaScript. It validates student grades, calculates highest, lowest, and average scores, and interprets the final average into a letter grade.

## Features
- Accepts multiple subject grades
- Validates empty, invalid, or out-of-range inputs
- Calculates highest, lowest, and average grade
- Converts final average into a letter grade
- Displays short interpretation messages
- Special handling for the grade 69 case
- Reset option to return to input mode

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Logic, computation, DOM updates |

## How It Works
1. User enters numeric grades in all input fields.
2. JavaScript checks for:
   - Empty fields  
   - Invalid numbers  
   - Values higher than 99  
   - Values lower than 50  
3. If all inputs are valid, the app calculates:
   - Highest grade  
   - Lowest grade  
   - Average grade  
4. The app assigns a letter grade based on the average and shows an interpretation message.
5. If the user’s average is exactly 69, a special style is applied.
6. Users can reset all grades to return to the input interface.

## Screenshots
- [GradeInterpreter Grade Input](GradeInterpreterGradeInput.png)
- [GradeInterpreter Grade Results](GradeInterpreterGradeResults.png)

## How to Run
1. Navigate to the GradeInterpreter folder:
   ```bash
   cd GradeInterpreter
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Support more subjects dynamically
- Add graphical grade visualization