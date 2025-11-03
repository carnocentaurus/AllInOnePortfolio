const homePage = document.getElementById("homePage");
const aboutPage = document.getElementById("aboutPage");
const projectsPage = document.getElementById("projectsPage");
const contactPage = document.getElementById("contactPage");

const pages = [aboutPage, projectsPage, contactPage];

function openPage(index) {
  pages[index].style.display = "flex";
  homePage.style.display = "none";
}

function closePage(index) {
  pages[index].style.display = "none";
  homePage.style.display = "flex";
}


// dynamic age display
const birthYear = 2004;
const birthMonth = 5;
const birthDate = 19;

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDate = new Date().getDate();

let age = currentYear - birthYear;

if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate < birthDate)) {
    age --;
}

document.getElementById("ageDisplay").textContent = age;