# Pokedex
A simple, interactive Pokédex web application built with HTML, CSS, and vanilla JavaScript. Uses the PokéAPI to fetch and display Pokémon data including name, type, stats, and sprites.

## Features
- Fetch random Pokemon
- Search Pokémon by name or ID
- Real-time data fetched from PokéAPI
- Displays Pokémon sprite, type, height, weight, and name
- Simple, lightweight interface

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Logic, event handling, API calls |
| Fetch API | Retrieves Pokémon data |
| PokéAPI | External data source |

## How It Works
1. User enters a Pokemon name/ID number or fetch a random Pokemon
2. JavaScript triggers a `fetch()` request to the PokéAPI endpoint:
   ```
   https://pokeapi.co/api/v2/pokemon/{id/name or random}
   ```
3. The app retrieves:
   - Official artwork sprite
   - Type(s)
   - Height and weight
4. The UI updates dynamically by modifying DOM elements
If the user enters an invalid Pokémon name or ID, an error message is displayed.

## Screenshots
- [Random Pokemon](PokedexRandomTab.png)
- [Search Pokemon](PokedexSearchTab.png)

## How to Run
1. Navigate to the Pokedex folder:
   ```bash
   cd Pokedex
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Display evolution chain
- Show move lists and stats
- Add ability comparison
- Filter by type or generation

## API Reference
This project uses the [PokéAPI](https://pokeapi.co/), a free RESTful API for Pokémon data.