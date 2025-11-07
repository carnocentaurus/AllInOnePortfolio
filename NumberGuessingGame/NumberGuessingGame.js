const submitGuessBtn = document.getElementById("submitGuessBtn");
const resultDisplay = document.getElementById("resultDisplay");
const guessInput = document.getElementById("guessInput");
const playAgainBtn = document.getElementById("playAgainBtn");


function formatFinalResult(answer, attempts) {
  return `<span>Correct!<br>The answer is <b>${answer}</b>.<br>
  It took you <b>${attempts}</b> attempts.</span>`;
}


function handleEdgeCases(guess) {
  if (guessInput.value.trim() === "")
  return "Enter your guess!";
  
  if (isNaN(guess)) 
  return "Number only!";
  
  if (guess < 0)
  return "0 is the minimum!";
  
  if (guess > 100)
  return "100 is the maximum!";
  
  return null; // valid guess
}


let attempts = 0;
let answer = Math.floor(Math.random() * 100);


submitGuessBtn.onclick = () => {
  const guess = parseInt(guessInput.value);
  const error = handleEdgeCases(guess);
  
  // alert any error
  if (error) {
    alert(error);
    return;
  }
  
  attempts ++;
  
  if (guess < answer) {
    resultDisplay.textContent = "Too low, try again!";
  }
  else if (guess > answer) {
    resultDisplay.textContent = "Too high, try again!";
  }
  else {
    resultDisplay.innerHTML = formatFinalResult(answer, attempts);
    submitGuessBtn.style.display = "none";
    playAgainBtn.style.display = "block";
  }
}


playAgainBtn.onclick = () => {
  attempts = 0;
  answer = Math.floor(Math.random() * 100);
  
  submitGuessBtn.style.display = "block";
  playAgainBtn.style.display = "none";
  
  resultDisplay.textContent = "";
  guessInput.value = "";
}