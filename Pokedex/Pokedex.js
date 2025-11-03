const randomPokemonTab = document.getElementById("randomPokemonTab");
const searchPokemonTab = document.getElementById("searchPokemonTab");

const randomPokemonDiv = document.getElementById("randomPokemonDiv");
const randomPokemonSpritelDisplay = document.getElementById("randomPokemonSpritelDisplay");
const randomPokemonInfoDisplay = document.getElementById("randomPokemonInfoDisplay");

const searchPokemonDiv = document.getElementById("searchPokemonDiv");
const pokemonNameOrIdInput = document.getElementById("pokemonNameOrIdInput");
const searchPokemonSpriteDisplay = document.getElementById("searchPokemonSpriteDisplay");
const searchPokemonInfoDisplay = document.getElementById("searchPokemonInfoDisplay");


function handleTabs(openIndex, closeIndex, tabName) {
  const divs = [randomPokemonDiv, searchPokemonDiv];
  
  divs[openIndex].style.display = "block";
  divs[closeIndex].style.display = "none";
  
  if (tabName === "randomPokemonTab") {
    randomPokemonTab.style.color = "orange";
    searchPokemonTab.style.color = "#f4f4f4";
  }
  else {
    searchPokemonTab.style.color = "orange";
    randomPokemonTab.style.color = "#f4f4f4";
  }
}


function formatPokemonInfo(
  pokemonId,
  pokemonName,
  pokemonHeight,
  pokemonWeight,
  pokemonType
) {
  pokemonName = String(pokemonName)
  .charAt(0)
  .toUpperCase()
  + pokemonName.slice(1);
  
  // convert to meters and kg
  pokemonHeight = pokemonHeight / 10;
  pokemonWeight = pokemonWeight / 10;
  
  // map through each type and join them
  pokemonType = pokemonType
  .map(type => {
    const name = type.type.name;
    return name.charAt(0).toUpperCase() + name.slice(1);
  }).join("<br>");
  
  // height and weight together in one class
  // margin bottom to pokemonName and pokemonWeight
  return `<p class="pokemonId">#${pokemonId}</p>
  <p class="pokemonName" style="margin-bottom: 0.4rem">${pokemonName}</p>
  <p class="pokemonHeightAndWeight">Height: ${pokemonHeight}M</p>
  <p class="pokemonHeightAndWeight" style="margin-bottom: 0.4rem">Weight: ${pokemonWeight}KG</p>
  <p class="pokemonTypeLabel">Type</p>
  <p class="pokemonTypes">${pokemonType}</p>`;
}


async function fetchRandomPokemon() {
  try {
    const min = 1;
    const max = 1025;
    
    const randomPokemonId = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
    
    if (!response.ok) {
      throw new Error();
    }
    
    const data = await response.json();
    
    const randomPokemonSprite = data.sprites.front_default;
    
    const randomPokemonData = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      type: data.types,
    }
    
    randomPokemonSpriteDisplay.src = randomPokemonSprite;
    randomPokemonInfoDisplay.innerHTML = formatPokemonInfo(
      randomPokemonData.id,
      randomPokemonData.name,
      randomPokemonData.height,
      randomPokemonData.weight,
      randomPokemonData.type
    );
  }
  
  catch (error) {
    alert(error);
  }
}


async function fetchPokemonByNameOrId() {
  try {
    const pokemonNameOrId = String(pokemonNameOrIdInput.value).toLowerCase();
  
    if (pokemonNameOrId.trim() === "") {
      alert("Enter valid name or ID!");
      return;
    }
    if (pokemonNameOrId < 1) {
      alert("1 is the lowest Pokémon ID!");
      return;
    }
    if (pokemonNameOrId > 1025) {
      alert("1025 is the highest Pokémon ID!");
      return;
    }
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
    
    if (!response.ok) {
      throw new Error();
    }
    
    const data = await response.json();
    
    const searchPokemonSprite = data.sprites.front_default;
    
    const searchPokemonData = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      type: data.types,
    }
    
    searchPokemonSpriteDisplay.src = searchPokemonSprite;
    searchPokemonInfoDisplay.innerHTML = formatPokemonInfo(
      searchPokemonData.id,
      searchPokemonData.name,
      searchPokemonData.height,
      searchPokemonData.weight,
      searchPokemonData.type,
    );
  }
  
  catch (error) {
    alert(error);
  }
}