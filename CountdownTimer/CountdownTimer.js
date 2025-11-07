const title = document.getElementById("title");
const countdownTimerDiv = document.getElementById("countdownTimerDiv");

const countInput = document.getElementById("countInput");
const msgInput = document.getElementById("msgInput");
const countdownDisplay = document.getElementById("countdownDisplay");
const newCountdownBtn = document.getElementById("newCountdownBtn");


function handleCountdown() {
  let count = parseInt(countInput.value) + 1;
  const msg = msgInput.value;
  
  if (count > 999) {
    alert("999 is the maximum!");
    return;
  }
  if (isNaN(count) || count < 1) {
    alert("Enter valid number!");
    return;
  }
  if (msg.length > 10) {
    alert("10 characters is the maximum!");
    return;
  }
  
  const countdownTimer = setInterval(() => {
    title.style.display = "none";
    countdownTimerDiv.style.display = "none";
    
    count --;
    
    countdownDisplay.textContent = count;
    
    if (count === 0) {
      clearInterval(countdownTimer);
      
      countdownDisplay.textContent = msg || "Time's up!";
      
      newCountdownBtn.style.display = "block";
    }
  }, 1000);
}


newCountdownBtn.onclick = () => {
  title.style.display = "block";
  countdownTimerDiv.style.display = "block";
  
  countInput.value = "";
  msgInput.value = "";
  countdownDisplay.textContent = "";
  
  newCountdownBtn.style.display = "none";
}