# CountdownTimer
A simple countdown timer web application built with HTML, CSS, and vanilla JavaScript. Users can set a countdown value and an optional custom message that appears when the timer ends.

## Features
- User-defined countdown value
- Custom end message (optional)
- Input validation for number range and message length
- Real-time countdown display
- Reset button to start a new countdown

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Visual layout and styling |
| JavaScript (ES6) | Countdown logic, validation, DOM updates |
| setInterval | Handles the timer countdown |

## How It Works
1. User enters a number (1–999) and an optional message (max 10 characters).
2. JavaScript checks:
   - Number must be valid and within range  
   - Message must be 10 characters or fewer  
3. The countdown begins and updates once per second.
4. When the countdown reaches zero:
   - The timer stops  
   - The custom message appears (or “Time’s up!” if empty)  
   - A button appears to start a new countdown  
5. Clicking "New Countdown" resets all fields.

## Screenshots
- [CountdownTimer Countdown Input](CountdownTimerInputs.png)
- [CountdownTimer Countdown Running](CountdownTimerCountingDown.png)
- [CountdownTimer Countdown Finished](CountdownTImerTimesUp.png)

## How to Run
1. Navigate to the CountdownTimer folder:
   ```bash
   cd CountdownTimer
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Sound notification when timer ends
- Option to pause/resume