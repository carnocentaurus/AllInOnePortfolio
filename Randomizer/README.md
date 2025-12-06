# Randomizer
A multi-tool random generator web app featuring numbers, letters, dates, countries, coin flips, and custom user-defined items. Built with HTML, CSS, and JavaScript using modular ES modules.

## Features
- Random Number (min → max)
- Random Letters (1–26 unique letters)
- Random Date + Time (between two selected dates)
- Random Country (by continent, with flag and capital)
- Coin Flip (Heads or Tails)
- Custom List Randomizer (user adds items → random selection)
- Modular JS structure (continents imported as separate modules)
- Clean feature switching UI

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and feature sections |
| CSS3 | Styling and layout |
| JavaScript (ES Modules) | All randomization logic and UI behavior |

## How It Works
### 1. Feature Selection
Each feature (Number, Letter, Date, Country, Coin, Custom) is a separate `<div>`.  
`openChosenFeature(index)` shows the selected feature and hides the menu.
### 2. Random Number
- Validates min/max
- Ensures min < max
- Range: −9999 to 9999
- Generates:  
  `Math.floor(Math.random() * (max - min + 1)) + min`
### 3. Random Letters
- Uses array of A–Z
- Validates quantity (max 26)
- Shuffles array using random sort
### 4. Random Date + Time
- Validates both dates
- Ensures start ≤ end
- Generates random timestamp between selected dates
- Shows date + 12-hour formatted time
### 5. Random Country
- Imports continent arrays from modules
- User chooses continent
- Picks a random entry → shows flag, country, capital
### 6. Coin Flip
- Randomly picks Heads or Tails
- Displays text + associated image
### 7. Custom List Randomizer
The `Custom` class manages user input:
#### Methods:
- `pushValueToCustomList()` — add value (max 30 chars, max 100 items)
- `popValueFromCustomList()` — remove last item
- `clearCustomList()` — reset list
- `getRandomCustomValue()` — choose a random item

## Screenshots
- [Random Number](./screenshots/RandomizerRandomNum.png)
- [Random Letter](./screenshots/RandomizerRandomLetter.png)
- [Random Date](./screenshots/RandomizerRandomDate.png)
- [Random Country](./screenshots/RandomizerRandomCountry.png)
- [Coin Flip](./screenshots/RandomizerCoinFlip.png)
- [Custom List](./screenshots/RandomizerCustom.png)

## How to Run
1. Navigate to the Randomizer folder:
   ```bash
   cd Randomizer
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Allow exporting/importing custom lists
- Add more randomizers (names, colors, passwords, etc.)