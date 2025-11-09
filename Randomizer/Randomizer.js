import {world} from "./World.js";
import {northAmerica} from "./NorthAmerica.js";
import {southAmerica} from "./SouthAmerica.js";
import {europe} from "./Europe.js";
import {africa} from "./Africa.js";
import {asia} from "./Asia.js";
import {oceania} from "./Oceania.js";

const continents = [
  world,
  northAmerica,
  southAmerica,
  europe,
  africa,
  asia,
  oceania,
];

const featuresDiv = document.getElementById("featuresDiv");

const randomNumDiv = document.getElementById("randomNumDiv");
const randomNumDisplay = document.getElementById("randomNumDisplay");
const minNumInput = document.getElementById("minNumInput");
const maxNumInput = document.getElementById("maxNumInput");

const randomLetterDiv = document.getElementById("randomLetterDiv");
const randomLetterDisplay = document.getElementById("randomLetterDisplay");
const letterQuantityInput = document.getElementById("letterQuantityInput");

const randomDateDiv = document.getElementById("randomDateDiv");
const randomDateDisplay = document.getElementById("randomDateDisplay");
const randomTimeDisplay = document.getElementById("randomTimeDisplay");
const dateFromInput = document.getElementById("dateFromInput");
const dateUntilInput = document.getElementById("dateUntilInput");

const randomCountryDiv = document.getElementById("randomCountryDiv");
const continentSelect = document.getElementById("continentSelect");
const countryFlagDisplay = document.getElementById("countryFlagDisplay");
const countryNameDisplay = document.getElementById("countryNameDisplay");
const countryCapitalDisplay = document.getElementById("countryCapitalDisplay");

const coinFlipDiv = document.getElementById("coinFlipDiv");
const coinImgDisplay = document.getElementById("coinImgDisplay");
const coinTextDisplay = document.getElementById("coinTextDisplay");

const customDiv = document.getElementById("customDiv");
const customValueInput = document.getElementById("customValueInput");
const customListDisplay = document.getElementById("customListDisplay");
const customValueDisplay = document.getElementById("customValueDisplay");

const divs = [
  randomNumDiv,
  randomLetterDiv,
  randomDateDiv,
  randomCountryDiv,
  coinFlipDiv,
  customDiv,
];

function openChosenFeature(index) {
  divs[index].style.display = "block";
  featuresDiv.style.display = "none";
}

function closeActiveFeature(index) {
  divs[index].style.display = "none";
  featuresDiv.style.display = "block";
}


function getRandomNum() {
  const min = parseInt(minNumInput.value);
  const max = parseInt(maxNumInput.value);
  
  if (!min || !max) {
    alert("Fill both fields!");
    return;
  }
  if (isNaN(min) || isNaN(max)) {
    alert("Enter valid numbers!");
    return;
  }
  if (min > max) {
    alert("Minimum can't be higher than maximum!");
    return;
  }
  if (min === max) {
    alert("Minimum can't be equal to maximum!");
    return;
  }
  if (min < -9999) {
    alert("-9999 is the minimum!");
    return;
  }
  if (max > 9999) {
    alert("9999 is the maximum");
    return;
  }
  
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  
  randomNumDisplay.textContent = randomNum;
}


function getRandomLetter() {
  const letters = [
    "A", "B", "C",
    "D", "E", "F",
    "G", "H", "I",
    "J", "K", "L",
    "M", "N", "O",
    "P", "Q", "R",
    "S", "T", "U",
    "V", "W", "X",
    "Y", "Z",
  ];
  
  const quantity = parseInt(letterQuantityInput.value);
  
  if (!quantity) {
    alert("How many letters?");
    return;
  }
  if (quantity > 26) {
    alert("There are only 26 letters!");
    return;
  }
  
  // shuffle letters
  const scrambledLetters = letters.sort(() => Math.random() - 0.5);
  // random letters depending on quantity
  const randomLetters = scrambledLetters.slice(0, quantity);
  
  randomLetterDisplay.textContent = randomLetters.join(" ");
}


const labels = document.querySelectorAll("label");


function getRandomDate() {
  const dateFrom = new Date(dateFromInput.value);
  const dateUntil = new Date(dateUntilInput.value);
  
  if (isNaN(dateFrom) || isNaN(dateUntil)) {
    alert("Provide both dates!");
    return;
  }
  if (dateFrom > dateUntil) {
    alert("Date From can't be after Date Until!");
    return;
  }
  
  const randomDate = new Date(dateFrom.getTime() +
    Math.random() * (dateUntil.getTime() -
      dateFrom.getTime()
    )
  );
  
  const randomTime = randomDate.toLocaleTimeString([], {
    // use 12-hour format
    hour12: true,
    // 07:05 instead of 7:5
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  
  labels.forEach(label => label.style.display = "block");
  
  randomDateDisplay.textContent = randomDate.toDateString();
  randomTimeDisplay.textContent = randomTime;
}


function getRandomCountry() {
  // index of selected continent
  const selectedContinentIndex = continentSelect.value;
  // actual selected continent
  const selectedContinent = continents[selectedContinentIndex];
  
  const randomCountry = Math.floor(Math.random() * selectedContinent.length);
  
  labels.forEach(label => label.style.display = "block");
  
  countryFlagDisplay.src = selectedContinent[randomCountry].flag;
  countryNameDisplay.textContent = selectedContinent[randomCountry].country;
  countryCapitalDisplay.textContent = selectedContinent[randomCountry].capital;
}


function flipCoin() {
  const coins = [
    {text: "Heads", img: "heads.png"},
    {text: "Tails", img: "tails.png"}
  ];
  
  const randomIndex = Math.floor(Math.random() * 2);
  
  coinTextDisplay.textContent = coins[randomIndex].text;
  coinImgDisplay.src = coins[randomIndex].img;
}


class Custom {
  // list of custom values
  static customList = [];
  
  // remove last value
  static popValueFromCustomList() {
    Custom.customList.pop();
    
    customListDisplay.innerHTML = Custom.customList.join("<br>");
    customValueDisplay.textContent = "";
  }
  
  static clearCustomList() {
    const confirmClear = confirm("Clear custom list?");
    
    if (confirmClear) {
      Custom.customList = [];
    
      customListDisplay.innerHTML = Custom.customList.join("<br>");
      customValueDisplay.textContent = "";
    }
  }
  
  // append new value to list
  static pushValueToCustomList() {
    const customValue = String(customValueInput.value);
  
    if (customValue.trim() === "") {
      alert("Enter custom value!");
      return;
    }
    // custom value char limit
    if (customValue.length > 30) {
      alert("Value can't be more than 30 characters!");
      return;
    }
    // custom list limit
    if (Custom.customList.length > 100) {
      alert("100 custom values is the maximum!");
      return;
    }
  
    // push values to custom list
    Custom.customList.push(customValue);
    // display custom list content (line by line)
    customListDisplay.innerHTML = Custom.customList.join("<br>");
    customValueInput.value = "";
  }
  
  static getRandomCustomValue() {
    const randomValue = Math.floor(Math.random() * Custom.customList.length);
  
    customValueDisplay.textContent = Custom.customList[randomValue];
  }
}


// allows functions to work in a module type script
window.openChosenFeature = openChosenFeature;
window.closeActiveFeature = closeActiveFeature;
window.getRandomNum = getRandomNum;
window.getRandomLetter = getRandomLetter;
window.getRandomDate = getRandomDate;
window.getRandomCountry = getRandomCountry;
window.flipCoin = flipCoin;
// allows classes
window.Custom = Custom;