const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function pullFromDisplay() {
  // remove the last digit
  display.value = String(display.value).slice(0, -1);
}

function clearDisplay() {
  display.value = "";
}


function calculate() {
  try {
    const input = display.value;

    // only allow safe characters: digits, operators, dot, parentheses, spaces
    const safeExpression = input.replace(/[^0-9+\-*/(). ]/g, '');

    if (safeExpression !== input) {
      alert("Invalid characters!");
    }

    const result = Function('"use strict"; return (' + safeExpression + ')')();
    display.value = result;
  } 
  catch (error) {
    display.value = "Error";
  }
}