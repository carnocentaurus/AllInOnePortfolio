# Resume Creator
A simple web application that allows users to generate a clean resume by filling out basic personal information. Built with HTML, CSS, and vanilla JavaScript, the app formats the data and displays it in a structured resume layout.

## Features
- Upload and preview profile photo
- Input personal information such as name, age, address, school, skills, and languages
- Validates age, contact number format, and email format
- Formats text to uppercase and auto-spaces commas
- Formats contact numbers into readable groups
- Displays a clean, ready-to-view resume layout
- Reset option to create a new resume

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Logic, validation, formatting, DOM updates |

## How It Works
1. User fills out all input fields and selects a profile image.
2. The app validates:
   - All fields must be filled  
   - Age must be between 1 and 100  
   - Contact number must be 12 digits and start with "63"  
   - Email must contain "@gmail.com"  
3. If valid, JavaScript:
   - Converts text to uppercase
   - Adds spacing after commas
   - Formats contact number into groups
   - Displays the resume layout with all provided information
4. Clicking "New Resume" resets all inputs and returns to the form.

## Screenshots
- [ResumeCreator Form View](ResumeCreatorFillUp.png)
- [ResumeCreator Resume Output](ResumeCreatorFinalResume.png)

## How to Run
1. Navigate to the ResumeCreator folder:
   ```bash
   cd ResumeCreator
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Add downloadable PDF version
- Multiple resume templates