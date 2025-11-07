const birthdayInput = document.getElementById("birthdayInput");

const ageResultsDiv = document.getElementById("ageResultsDiv");

const ageInMsDisplay = document.getElementById("ageInMsDisplay");
const ageInSecondsDisplay = document.getElementById("ageInSecondsDisplay");  
const ageInMinutesDisplay = document.getElementById("ageInMinutesDisplay");
const ageInHoursDisplay = document.getElementById("ageInHoursDisplay");
const ageInDaysDisplay = document.getElementById("ageInDaysDisplay");
const ageInWeeksDisplay = document.getElementById("ageInWeeksDisplay");
const ageInMonthsDisplay = document.getElementById("ageInMonthsDisplay");
const ageInYearsDisplay = document.getElementById("ageInYearsDisplay");


function formatNumber(num) {
  num = Math.round(num);
  num = num.toLocaleString("fi-FI");
  
  return num;
}


function calcAges() {
  const birthday = new Date(birthdayInput.value);
  const date = new Date();
  
  const birthYear = birthday.getFullYear();
  const birthMonth = birthday.getMonth();
  const birthDate = birthday.getDate();
  
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDate = date.getDate();
  
  // if the date input is the current date or the future
  if (birthYear >= currentYear && birthMonth >= currentMonth && birthDate >= currentDate) {
    alert("Enter valid birthday!");
    return;
  }
  
  // get the total ms since the date input
  const ageInMs = date - birthday;
  
  const ageInSeconds = ageInMs / 1000;
  const ageInMinutes = ageInMs / 60000;
  const ageInHours = ageInMs / 3600000;
  const ageInDays = ageInMs / 86400000;
  const ageInWeeks = ageInMs / 604800000;
  const ageInMonths = ageInMs / 2628002880;
  const ageInYears = currentYear - birthYear;
  
  // decrement the age if it isn't the users birthday yet
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate < birthDate)) {
    ageInYears --;
  }
  
  // if it's the users birthday
  if (currentMonth === birthMonth && currentDate === birthDate) {
    alert("Happy birthday!");
    ageInYearsDisplay.textContent = Math.round(ageInYears);
  }
  else {
    ageInYearsDisplay.textContent = Math.round(ageInYears);
  }
  
  ageResultsDiv.style.display = "block";
  
  ageInMsDisplay.textContent = formatNumber(ageInMs);
  ageInSecondsDisplay.textContent = formatNumber(ageInSeconds);
  ageInMinutesDisplay.textContent = formatNumber(ageInMinutes);
  ageInHoursDisplay.textContent = formatNumber(ageInHours);
  ageInDaysDisplay.textContent = formatNumber(ageInDays);
  ageInWeeksDisplay.textContent = formatNumber(ageInWeeks);
  ageInMonthsDisplay.textContent = formatNumber(ageInMonths);
  ageInYearsDisplay.textContent = formatNumber(ageInYears);
}