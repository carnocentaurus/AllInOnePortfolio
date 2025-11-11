const gameTab = document.getElementById("gameTab");
const statsTab = document.getElementById("statsTab");

const gameDiv = document.getElementById("gameDiv");
const statsDiv = document.getElementById("statsDiv");

const resultDisplay = document.getElementById("resultDisplay");
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const systemChoiceDisplay = document.getElementById("systemChoiceDisplay");

const currentGamesPlayedDisplay = document.getElementById("currentGamesPlayedDisplay");
const currentPlayerWinsDisplay = document.getElementById("currentPlayerWinsDisplay");
const currentSystemWinsDisplay = document.getElementById("currentSystemWinsDisplay");
const currentTiesDisplay = document.getElementById("currentTiesDisplay");
const currentPlayerWinRateDisplay = document.getElementById("currentPlayerWinRateDisplay");
const currentSystemWinRateDisplay = document.getElementById("currentSystemWinRateDisplay");

const totalGamesPlayedDisplay = document.getElementById("totalGamesPlayedDisplay");
const totalPlayerWinsDisplay = document.getElementById("totalPlayerWinsDisplay");
const totalSystemWinsDisplay = document.getElementById("totalSystemWinsDisplay");
const totalTiesDisplay = document.getElementById("totalTiesDisplay");
const totalPlayerWinRateDisplay = document.getElementById("totalPlayerWinRateDisplay");
const totalSystemWinRateDisplay = document.getElementById("totalSystemWinRateDisplay");


function handleTabs(openIndex, closeIndex, tabName) {
  const divs = [gameDiv, statsDiv];
  
  divs[openIndex].style.display = "block";
  divs[closeIndex].style.display = "none";
  
  if (tabName === "gameTab") {
    gameTab.style.color = "#333";
    gameTab.style.fontWeight = "bold";
    
    statsTab.style.color = "#666";
    statsTab.style.fontWeight = "normal";
  }
  else {
    statsTab.style.color = "#333";
    statsTab.style.fontWeight = "bold";
    
    gameTab.style.color = "#666";
    gameTab.style.fontWeight = "normal";
    
    // always refresh stats when switching to the stats tab
    loadStats();
  }
}


const choices = ["👊", "🖐️", "✌️"];

let currentGamesPlayed = 0;
let currentPlayerWins = 0;
let currentSystemWins = 0;
let currentTies = 0;
let currentPlayerWinRate = 0;
let currentSystemWinRate = 0;

let totalGamesPlayed = 0;
let totalPlayerWins = 0;
let totalSystemWins = 0;
let totalTies = 0;
let totalPlayerWinRate = 0;
let totalSystemWinRate = 0;


// load totals from localStorage (default to 0)
function loadStats() {
  totalGamesPlayed = JSON.parse(localStorage.getItem("TotalGamesPlayed")) || 0;
  totalPlayerWins = JSON.parse(localStorage.getItem("TotalPlayerWins")) || 0;
  totalSystemWins = JSON.parse(localStorage.getItem("TotalSystemWins")) || 0;
  totalTies = JSON.parse(localStorage.getItem("TotalTies")) || 0;
  totalPlayerWinRate = JSON.parse(localStorage.getItem("TotalPlayerWinRate")) || 0;
  totalSystemWinRate = JSON.parse(localStorage.getItem("TotalSystemWinRate")) || 0;

  // always display current stats (even if all 0)
  currentGamesPlayedDisplay.textContent = `Games Played: ${currentGamesPlayed}`;
  currentPlayerWinsDisplay.textContent = `Player Wins: ${currentPlayerWins}`;
  currentSystemWinsDisplay.textContent = `System Wins: ${currentSystemWins}`;
  currentTiesDisplay.textContent = `Ties: ${currentTies}`;
  currentPlayerWinRateDisplay.textContent = `Player Win Rate: ${Math.round(currentPlayerWinRate)}%`;
  currentSystemWinRateDisplay.textContent = `System Win Rate: ${Math.round(currentSystemWinRate)}%`;

  // display total stats from saved data
  totalGamesPlayedDisplay.textContent = `Games Played: ${totalGamesPlayed}`;
  totalPlayerWinsDisplay.textContent = `Player Wins: ${totalPlayerWins}`;
  totalSystemWinsDisplay.textContent = `System Wins: ${totalSystemWins}`;
  totalTiesDisplay.textContent = `Ties: ${totalTies}`;
  totalPlayerWinRateDisplay.textContent = `Player Win Rate: ${Math.round(totalPlayerWinRate)}%`;
  totalSystemWinRateDisplay.textContent = `System Win Rate: ${Math.round(totalSystemWinRate)}%`;
}


function handlePlayerWinRate() {
  currentPlayerWinRate = (currentPlayerWins / currentGamesPlayed) * 100 || 0;
  currentPlayerWinRateDisplay.textContent = `Player Win Rate: ${Math.round(currentPlayerWinRate)}%`;
  
  totalPlayerWinRate = (totalPlayerWins / totalGamesPlayed) * 100 || 0;
  totalPlayerWinRateDisplay.textContent = `Player Win Rate: ${Math.round(totalPlayerWinRate)}%`;
  localStorage.setItem("TotalPlayerWinRate", JSON.stringify(totalPlayerWinRate));
}


function handleSystemWinRate() {
  currentSystemWinRate = (currentSystemWins / currentGamesPlayed) * 100 || 0;
  currentSystemWinRateDisplay.textContent = `System Win Rate: ${Math.round(currentSystemWinRate)}%`;
  
  totalSystemWinRate = (totalSystemWins / totalGamesPlayed) * 100 || 0;
  totalSystemWinRateDisplay.textContent = `System Win Rate: ${Math.round(totalSystemWinRate)}%`;
  localStorage.setItem("TotalSystemWinRate", JSON.stringify(totalSystemWinRate));
}


// if player wins
function getPlayerResults() {
  resultDisplay.textContent = "YOU WIN";
  
  currentPlayerWins ++;
  currentPlayerWinsDisplay.textContent = `Player Wins: ${currentPlayerWins}`;
  
  totalPlayerWins ++;
  totalPlayerWinsDisplay.textContent = `Player Wins: ${totalPlayerWins}`;
  localStorage.setItem("TotalPlayerWins", JSON.stringify(totalPlayerWins));
  
  handlePlayerWinRate();
}


// if system wins
function getSystemResults() {
  resultDisplay.textContent = "YOU LOSE";
  
  currentSystemWins ++;
  currentSystemWinsDisplay.textContent = `System Wins: ${currentSystemWins}`;
  
  totalSystemWins ++;
  totalSystemWinsDisplay.textContent = `System Wins: ${totalSystemWins}`;
  localStorage.setItem("TotalSystemWins", JSON.stringify(totalSystemWins));
  
  handleSystemWinRate();
}


function playGame(event) {
  currentGamesPlayed ++;
  currentGamesPlayedDisplay.textContent = `Games Played: ${currentGamesPlayed}`;
  
  totalGamesPlayed ++;
  totalGamesPlayedDisplay.textContent = `Games Played: ${totalGamesPlayed}`;
  localStorage.setItem("TotalGamesPlayed", JSON.stringify(totalGamesPlayed));
  
  // system picks random choice from choices array
  const randomChoice = Math.floor(Math.random() * choices.length);
  const systemChoice = choices[randomChoice];
  
  const playerChoice = event.target.innerText;
  
  handlePlayerWinRate();
  handleSystemWinRate();
  
  playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
  systemChoiceDisplay.textContent = `System: ${systemChoice}`;
  
  if (systemChoice === playerChoice) {
    resultDisplay.textContent = "TIE";
    
    currentTies ++;
    currentTiesDisplay.textContent = `Ties: ${currentTies}`;
    
    totalTies ++;
    totalTiesDisplay.textContent = `Ties: ${totalTies}`;
    localStorage.setItem("TotalTies", JSON.stringify(totalTies));
  }
  // examine player choice
  else {
    switch (playerChoice) {
      case "👊": 
        systemChoice === "✌️" ? getPlayerResults() : getSystemResults();
        break;
        
      case "🖐️":
        systemChoice === "👊" ? getPlayerResults() : getSystemResults();
        break;
        
      case "✌️":
        systemChoice === "🖐️" ? getPlayerResults() : getSystemResults();
    }
  }
}


// load stats immediately when page loads
window.addEventListener("load", () => {
  loadStats();
});