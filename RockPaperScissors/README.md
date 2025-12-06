# RockPaperScissors
A simple Rock Paper Scissors game built with HTML, CSS, and vanilla JavaScript. Tracks both current session stats and total lifetime stats using localStorage.

## Features
- Play Rock, Paper, Scissors against the computer  
- Game tab and Stats tab  
- Tracks wins, losses, ties, and win rates  
- Saves total stats using localStorage  
- Dynamic UI updates  
- Lightweight and responsive interface

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Game logic, event handling, localStorage |


## How It Works
1. The player selects Rock, Paper, or Scissors  
2. The system randomly chooses one of the three options  
3. JavaScript determines the winner using game rules  
4. UI updates show:
   - Player choice  
   - System choice  
   - Result (Win, Lose, Tie)  
5. Current session stats update:
   - Games played  
   - Player wins  
   - System wins  
   - Ties  
   - Win rates  
6. Total stats are saved to `localStorage`:
   - TotalGamesPlayed
   - TotalPlayerWins
   - TotalSystemWins
   - TotalTies
   - TotalPlayerWinRate
   - TotalSystemWinRate
7. When switching to the Stats tab, stats refresh automatically  
8. On page load, saved totals are loaded and displayed

## Screenshots
- [RockPaperScissors Demo](RockPaperScissorsDemo.png)
- [RockPaperScissors Stats](RockPaperScissorsStats.png)

## How to Run
1. Navigate to the RockPaperScissors folder:
   ```bash
   cd RockPaperScissors
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Add animations or sound effects
- Add best-of-5 or best-of-10 mode
- Add leaderboard or streak tracker
- Add keyboard controls