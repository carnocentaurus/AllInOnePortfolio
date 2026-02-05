# RandomPasswordGenerator  
A lightweight web app that generates random passwords using small letters, capital letters, numbers and special characters. Users can edit password length with various limitations.

## Features
- Generates a random password each time the user clicks the 'Generate' button
- Users can edit the desired length of their password
- Edge case handling for passwords that are too short, too long or invalid

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling |
| JavaScript | Main logic & DOM updates |

## How it Works
1. Users generates a random password by clicking the 'Generate' button
2. Password length can be modified from 4 to 16 characters. 8 characters is the default
3. An alert will display if the user enters a password below 4 and above 16 characters

## Screenshot
- [RandomPasswordGenerator Demo](RandomPasswordGeneratorDemo.png)

## How to Run
1. Open the folder:
   ```bash
   cd RandomPasswordGenerator
   ```
2. Launch the app:
   ```bash
   open index.html
   ```
No installation or dependencies needed.

## Future Improvements
- Checkbox whether to only generate one type of character (e.g, numbers only)
- Checkboxes to generate multiple types of characters (e.g, numbers and special characters)
- Modify how much percentage of each type of character to be included