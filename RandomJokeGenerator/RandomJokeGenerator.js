const typeSelect = document.getElementById("typeSelect");
const idDisplay = document.getElementById("idDisplay");
const setupDisplay = document.getElementById("setupDisplay");
const punchlineDisplay = document.getElementById("punchlineDisplay");

async function fetchRandomJoke() {
  try {
    const selectedType = typeSelect.value;
    
    const response = await fetch(`https://official-joke-api.appspot.com/jokes/${selectedType}/random`);
    const data = await response.json();
    
    idDisplay.textContent = `#${data[0].id}`;
    setupDisplay.textContent = data[0].setup;
    punchlineDisplay.textContent = data[0].punchline;
  }
  
  catch (error) {
    alert(`${error}. Check internet connection?`);
  }
}