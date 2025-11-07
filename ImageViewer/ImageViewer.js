const randomTab = document.getElementById("randomTab");
const searchTab = document.getElementById("searchTab");

const randomDiv = document.getElementById("randomDiv");
const randomIdDisplay = document.getElementById("randomIdDisplay");
const randomImgDisplay = document.getElementById("randomImgDisplay");
const randomToolsDiv = document.getElementById("randomToolsDiv");
const randomGrayScaleCheckbox = document.getElementById("randomGrayScaleCheckbox");
const randomShapeSelect = document.getElementById("randomShapeSelect");
const randomBlurRange = document.getElementById("randomBlurRange");
const randomBlurValueDisplay = document.getElementById("randomBlurValueDisplay");

const searchDiv = document.getElementById("searchDiv");
const imgIdInput = document.getElementById("imgIdInput");
const searchImgDisplay = document.getElementById("searchImgDisplay");
const searchToolsDiv = document.getElementById("searchToolsDiv");
const searchGrayScaleCheckbox = document.getElementById("searchGrayScaleCheckbox");
const searchShapeSelect = document.getElementById("searchShapeSelect");
const searchBlurRange = document.getElementById("searchBlurRange");
const searchBlurValueDisplay = document.getElementById("searchBlurValueDisplay");


function handleTabs(openIndex, closeIndex, tab) {
  const tabs = [randomDiv, searchDiv];
  
  tabs[openIndex].style.display = "block";
  tabs[closeIndex].style.display = "none";
  
  if (tab === "random") {
    randomTab.style.color = "#333";
    randomTab.style.fontWeight = "bold";
    
    searchTab.style.color = "#666";
    searchTab.style.fontWeight = "normal";
  }
  else {
    searchTab.style.color = "#333";
    searchTab.style.fontWeight = "bold";
    
    randomTab.style.color = "#666";
    randomTab.style.fontWeight = "normal";
  }
}


function fetchRandomImg() {
  randomToolsDiv.style.display = "block";
  
  // check if gray-scale checkbox is checked
  const grayScale = randomGrayScaleCheckbox.checked ? "grayscale" : "";
  
  const height = randomShapeSelect.value;
  
  const blur = randomBlurRange.value;
  
  const randomId = Math.floor(Math.random() * 1085);
  
  let query = "";
  
  // if grayScale is checked append this to query
  if (grayScale) {
    query += `?${grayScale}`;
  }
  
  // &blur to include, otherwise it's ?blur
  if (blur > 0) {
    query += query ? `&blur=${blur}` : `?blur=${blur}`;
  }
  
  const randomImg = `https://picsum.photos/id/${randomId}/200/${height}${query}`;
    
  randomIdDisplay.textContent = `#${randomId}`;  
  
  randomImgDisplay.src = randomImg;
  
  randomBlurValueDisplay.textContent = `Blur: ${blur}`;
}


function fetchImgById() {
  const imgId = parseInt(imgIdInput.value);
  
  if (imgId > 1084) {
    alert("1084 is the latest ID!");
    return;
  }
  if (imgId < 0) {
    alert("0 is the lowest id!");
    return;
  }
  if (isNaN(imgId)) {
    alert("Enter valid ID!");
    return;
  }
  
  searchToolsDiv.style.display = "block";
  
  const grayScale = searchGrayScaleCheckbox.checked ? "grayscale" : "";
  
  const height = searchShapeSelect.value;
  
  const blur = searchBlurRange.value;
  
  let query = "";
  
  if (grayScale) {
    query += `?${grayScale}`;
  }
  
  if (blur > 0) {
    query += query ? `&blur=${blur}` : `?blur=${blur}`;
  }
  
  const searchImg = `https://picsum.photos/id/${imgId}/200/${height}${query}`;
  
   searchImgDisplay.src = searchImg;
  
  searchBlurValueDisplay.textContent = `Blur: ${blur}`;
}


// dynamically display blur value
function displayRandomBlurValue(event) {
  randomBlurValueDisplay.textContent = `Blur: ${event.target.value}`;
}

function displaySearchBlurValue(event) {
  searchBlurValueDisplay.textContent = `Blur: ${event.target.value}`;
}