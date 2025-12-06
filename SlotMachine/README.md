# Slot Machine
A simple slot machine game built with HTML, CSS, and vanilla JavaScript. Players place a bet, spin the reels, and earn rewards based on matching symbols.

## Features
- Place custom bet amounts  
- Spin the slot machine with randomized results  
- Multiple winning outcomes with different multipliers  
- Color-coded win messages  
- Balance tracking and updates  
- Reset balance option  
- Lightweight, fast, and easy to run

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Game logic, randomization, balance handling |

## How It Works
1. The player enters a bet amount  
2. JavaScript validates:
   - Bet must be a number  
   - Bet must be at least 1  
   - Bet cannot exceed current balance  
3. The sweets array is shuffled using the Fisher-Yates algorithm  
4. The first three items form the slot result  
5. Winning combinations and rewards:
   - Three candies: bet × 5  
   - Three lollipops: bet × 10  
   - Three ice creams: bet × 20  
   - Three cakes: bet × 50  
6. If no match, the player loses their bet  
7. Balance is updated and displayed dynamically  
8. Reset button restores balance to 100 and clears messages

## How to Run
1. Navigate to the SlotMachine folder:
   ```bash
   cd SlotMachine
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Add animations for spinning
- Add sound effects
- Add a maximum bet limit
- Add a win/loss streak tracker