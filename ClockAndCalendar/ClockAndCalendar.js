const clockDisplay = document.getElementById("clockDisplay");
const yearDisplay = document.getElementById("yearDisplay");
const monthDisplay = document.getElementById("monthDisplay");
const dayOfWeekDisplay = document.getElementById("dayOfWeekDisplay");
const dateDisplay = document.getElementById("dateDisplay");
const holidayDisplay = document.getElementById("holidayDisplay");

const today = new Date();

const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDate = today.getDate();
const currentDay = today.getDay();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const holidays = {
  "0-1": "New Year's Day ",
  "3-9": "Araw ng Kagitingan",
  "4-1": "Labor Day",
  "5-12": "Independence Day",
  "10-30": "Bonifacio Day",
  "11-25": "Christmas Day",
  "11-30": "Rizal Day"
}

const holidayToday = `${currentMonth}-${currentDate}`;


function updateClock() {
  const currentTime = new Date().toLocaleTimeString([], {
    // use 12 hour format
    hour12: true,
    // 07:05 instead of 7:5
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  clockDisplay.textContent = currentTime;
}

// Run once immediately
updateClock();

setInterval(updateClock, 1000);


yearDisplay.textContent = currentYear;
monthDisplay.textContent = months[currentMonth];
dayOfWeekDisplay.textContent = daysOfWeek[currentDay];
dateDisplay.textContent = currentDate;
holidayDisplay.textContent = holidays[holidayToday] || "No Legal Holiday";