const cityInput = document.getElementById("cityInput");

const displayDiv = document.getElementById("displayDiv");

const weatherDescDisplay = document.getElementById("weatherDescDisplay");
const weatherIconDisplay = document.getElementById("weatherIconDisplay");
const tempDisplay = document.getElementById("tempDisplay");
const windSpeedDisplay = document.getElementById("windSpeedDisplay");
const windDirectionDisplay = document.getElementById("windDirectionDisplay");
const peakWindDisplay = document.getElementById("peakWindDisplay");

// api key from OpenWeatherMap
const apiKey = "6c6899a2fa7a20fa847cea641bca97e1";


function getWindDirection(deg) {
  const directions = [
    "North", 
    "North-Northeast", 
    "Northeast",
    "East-Northeast",
    "East",
    "East-Southeast",
    "Southeast",
    "South-Southeast",
    "South",
    "South-Southwest",
    "Southwest",
    "West-Southwest",
    "West",
    "West-Northwest",
    "Northwest",
    "North-Northwest"
  ];
    
  // get weather direction 
  const index = Math.round(deg / 22.5) % 16;
  
  return directions[index];
}


async function fetchWeatherData() {
  try {
    const city = cityInput.value.trim();

    if (city.trim() === "") {
      alert("Enter city name!");
      return;
    }
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    const weatherIconCode = data.weather[0].icon;
    const weatherIcon = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;
    const weatherDesc = data.weather[0].description;
    
    const tempInCel = Number(data.main.temp);
    const tempInFah = (tempInCel * 9/5) + 32;
    
    // convert wind data from mph to km/h
    const windSpeed = data.wind.speed * 3.6;
    const windDirection = getWindDirection(data.wind.deg);
    const peakWind = data.wind.gust * 3.6;
    
    displayDiv.style.display = "block";
    
    weatherIconDisplay.src = weatherIcon;
    weatherDescDisplay.textContent = weatherDesc;
    
    tempDisplay.textContent = `${tempInCel.toFixed(2)}°C | ${tempInFah.toFixed(2)}°F`;
    
    windSpeedDisplay.textContent = `${windSpeed.toFixed(2)} km/h`;
    windDirectionDisplay.textContent = `${windDirection}`;
    peakWindDisplay.textContent = `${peakWind.toFixed(2)} km/h`;
  }
  
  catch (error) {
    alert(error);
  }
}