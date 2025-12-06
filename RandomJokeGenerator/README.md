# RandomJokeGenerator  
A lightweight web app that fetches and displays random jokes from the Official Joke API. Users can choose a joke category and instantly get a setup–punchline pair.

## Features
- Fetch a random joke based on selected category
- Joke categories include: general, programming, knock-knock
- Displays joke ID, setup, and punchline  
- Error handling for offline or failed requests  
- Minimal and fast interface

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling |
| JavaScript (ES6/Async–Await) | API calls, logic, DOM updates |
| Fetch API | Retrieves joke data |
| Official Joke API | External joke source |

## How It Works
1. User selects a joke type from a dropdown menu.  
2. JavaScript sends a request to:  
   ```
   https://official-joke-api.appspot.com/jokes/{type}/random
   ```  
3. The API returns a random joke object containing:
   - `id`
   - `setup`
   - `punchline`
4. The UI automatically updates to display the fetched joke.  
5. If the request fails (no internet, invalid response, etc.), an alert notifies the user.

## Screenshot
- [RandomJokeGenerator Demo](RandomJokeGeneratorDemo.png) 

## How to Run
1. Open the folder:
   ```bash
   cd RandomJokeGenerator
   ```
2. Launch the app:
   ```bash
   open index.html
   ```
No installation or dependencies needed.

## Future Improvements
- Add “Next Joke” auto-refresh timer  
- Add speech synthesis (read joke out loud)  
- Save favorite jokes locally  