const currentBalanceDisplay = document.getElementById("currentBalanceDisplay");
const messageDisplay = document.getElementById("messageDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const balanceUpdateDisplay = document.getElementById("balanceUpdateDisplay");
const betInput = document.getElementById("betInput");

// initial balance
let currentBalance = 100;
currentBalanceDisplay.textContent = `Balance: ${currentBalance}`;

const sweets = ["🍬", "🍬", "🍬", "🍭", "🍭", "🍭", "🍦", "🍦", "🍦", "🍰", "🍰", "🍰"];

// shuffle sweets array using Fisher Yates method
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i --) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}


function playSlotMachine() {
  const bet = parseInt(betInput.value);
  
  if (!bet) {
    alert("Place your bet!");
    return;
  }
  if (bet > currentBalance) {
    alert("Not enough balance!");
    return;
  }
  if (bet < 1 || isNaN(bet)) {
    alert("Invalid bet!");
    return;
  }
  if (currentBalance < 1) {
    alert("Zero balance left!");
    return;
  }
  
  shuffleArray(sweets);
  
  const threeRandomSweets = sweets.slice(0, 3);
  resultDisplay.textContent = threeRandomSweets.join(" | ");
  
  if (resultDisplay.textContent.includes("🍬 | 🍬 | 🍬")) {
    messageDisplay.textContent = "SWEET WIN";
    messageDisplay.style.color = "pink";
    
    balanceUpdateDisplay.textContent = `Balance + ${bet * 5}`;
    currentBalance += bet * 5;
    currentBalanceDisplay.textContent = `Balance: ${currentBalance}`;
    
    betInput.value = "";
  }
  else if (resultDisplay.textContent.includes("🍭 | 🍭 | 🍭")) {
    messageDisplay.textContent = "SUGAR RUSH";
    messageDisplay.style.color = "lime";
    
    balanceUpdateDisplay.textContent = `Balance + ${bet * 10}`;
    currentBalance += bet * 10;
    currentBalanceDisplay.textContent = `Balance: ${currentBalance}`;
    
    betInput.value = "";
  }
  else if (resultDisplay.textContent.includes("🍦 | 🍦 | 🍦"))  {
    messageDisplay.textContent = "FROSTY FORTUNE";
    messageDisplay.style.color = "deepskyblue";
    
    balanceUpdateDisplay.textContent = `Balance + ${bet * 20}`;
    currentBalance += bet * 20;
    currentBalanceDisplay.textContent = `Balance: ${currentBalance}`;
    
    betInput.value = "";
  }
  else if (resultDisplay.textContent.includes("🍰 | 🍰 | 🍰")) {
    messageDisplay.textContent = "JACKPOT";
    messageDisplay.style.color = "gold";
    
    balanceUpdateDisplay.textContent = `Balance + ${bet * 50}`;
    currentBalance += bet * 50;
    currentBalanceDisplay.textContent = `Balance: ${currentBalance}`;
    
    betInput.value = "";
  }
  else {
    messageDisplay.textContent = "ROTTEN LUCK";
    messageDisplay.style.color = "crimson";
    
    balanceUpdateDisplay.textContent = `Balance - ${bet}`;
    currentBalance = currentBalance -= bet;
    currentBalanceDisplay.textContent = `Balance: ${currentBalance}`;
    
    betInput.value = "";
  }
}


function resetBalance() {
  const confirmResetBalance = confirm("Reset balance to 100?");
  
  if (confirmResetBalance) {
    currentBalance = 100;
    currentBalanceDisplay.textContent = `Balance: ${currentBalance}`;
    
    messageDisplay.textContent = "";
    resultDisplay.textContent = "";
    balanceUpdateDisplay.textContent = "";

    betInput.value = "";
  }
}