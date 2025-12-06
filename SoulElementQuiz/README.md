# SoulElementQuiz
A personality-style quiz that determines the user's elemental type (Fire, Air, Water, Earth) based on their answers. Built with HTML, CSS, and JavaScript using modular quiz data.

## Features
- 10-question personality quiz  
- Image-supported questions  
- Four possible elemental results  
- Real-time point tracking  
- Choice highlighting and point reveal  
- Final element result screen with image and description  
- Restart functionality  
- Uses ES module import for quiz content

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| CSS3 | Styling and quiz layout |
| JavaScript (ES6 Modules) | Quiz logic, scoring, DOM updates |
| ES Modules | Imports external quiz data (QuizContent.js) |

## How It Works
1. User clicks **Start** button to start the quiz
2. The script loads Question 1:
   - Question text  
   - Question image  
   - Four multiple-choice answers  
3. When the user selects a choice:
   - Points for that choice are added to the total  
   - All choices show their point values  
   - Buttons become disabled  
   - **Next** button appears for the next question
4. After 10 questions:
   - Quiz switches to results screen  
   - Total score determines the user's element:
     - 0–16 → Fire  
     - 17–24 → Air  
     - 25–32 → Water  
     - 33+ → Earth  
5. User can restart the quiz, resetting score and UI

## Screenshots
- [SoulElementQuiz Demo](SoulElementQuizDemo.png)
- [SoulElementQuiz End of Quiz](SoulElementQuizEndOfQuiz.png)

## How to Run
1. Navigate to the SoulElementQuiz folder:
   ```bash
   cd SoulElementQuiz
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Add smooth transitions between questions
- Add more detailed descriptions for each element
- Add more question sets or different quiz modes