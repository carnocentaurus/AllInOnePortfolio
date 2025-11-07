const multiplicandInput = document.getElementById("multiplicandInput");
const multiplierInput = document.getElementById("multiplierInput");
const newTableText = document.getElementById("newTableText");

const inputsDiv = document.getElementById("inputsDiv");
const tableDisplayDiv = document.getElementById("tableDisplayDiv");


function handleMultiplicationTable() {
  const multiplicand = parseInt(multiplicandInput.value);
  const multiplier = parseInt(multiplierInput.value);

  if (isNaN(multiplicand) || isNaN(multiplier)) {
    alert("Enter valid numbers!");
    return;
  }
  if (multiplicand <= 0 || multiplier <= 0) {
    alert("1 is the minimum!");
    return;
  }
  if (multiplicand > 1000 || multiplier > 1000) {
    alert("1000 is the maximum!");
    return;
  }
  
  // clear any previous table first
  tableDisplayDiv.innerHTML = "";
  
  for (let i = 1; i <= multiplier; i++) {
    // answer of each iteration
    const product = multiplicand * i;
    
    // creates the table
    const result = document.createElement("p");
    result.textContent = `${multiplicand} × ${i} = ${product}`;
    tableDisplayDiv.appendChild(result);
  }

  inputsDiv.style.display = "none";
  tableDisplayDiv.style.display = "block";
  newTableText.style.visibility = "visible";
}


newTableText.onclick = () => {
  const confirmNewTable = confirm("Reset table?");

  if (confirmNewTable) {
    newTableText.style.visibility = "hidden";
    tableDisplayDiv.style.display = "none";
    inputsDiv.style.display = "block";

    multiplicandInput.value = "";
    multiplierInput.value = "";
  }
}