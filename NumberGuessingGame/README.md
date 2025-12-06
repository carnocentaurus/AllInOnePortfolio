# Number Guessing Game
A simple number-guessing mini-game built with HTML, CSS, and JavaScript. The player must guess a randomly generated number between 0 and 100, with immediate feedback and an attempt counter.

## Features
- Random number generation (0–100)
- Input validation (empty, non-number, below 0, above 100)
- Real-time feedback: "Too high" / "Too low"
- Attempt tracking
- Clean final result display
- Play Again button that fully resets the game
- Simple modular helper functions (edge case handler + result formatter)

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | Page UI and structure |
| CSS3 | Styling for layout and feedback display |
| JavaScript | Game logic, validation, state handling |

## How It Works
1. Game generates a random number from **0–100**.
2. Player enters a guess and clicks **Submit**.
3. Input validation checks:
   - Blank → “Enter your guess!”
   - Non-number → “Number only!”
   - Below 0 → “0 is the minimum!”
   - Above 100 → “100 is the maximum!”
4. Valid guess increments the **attempt counter**.
5. The game responds with:
   - **Too low**  
   - **Too high**  
   - **Correct** → Shows final result with attempts, hides Submit button, shows Play Again button.
6. **Play Again** resets:
   - Attempt count  
   - New random number  
   - UI + inputs

## Screenshots
- [NumberGuessingGame Demo](NumberGuessingGameDemo.png)
- [NumberGuessingGame Final Resutls](NumberGuessingGameCorrectAnswer.png)

## How to Run
1. Navigate to the NumberGuessingGame folder:
   ```bash
   cd NumberGuessingGame
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Add difficulty levels (Easy, Medium, Hard)
- Add a limited attempts mode
- Add a scoreboard or fastest-win timer