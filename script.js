const homePage = document.getElementById("homePage");
const aboutPage = document.getElementById("aboutPage");
const projectsPage = document.getElementById("projectsPage");
const contactPage = document.getElementById("contactPage");

const ageDisplay = document.getElementById("ageDisplay");

const form = document.getElementById("form");
const submitBtn = form.querySelector("button[type='submit']");

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

ageDisplay.textContent = age;


// form handler
form.addEventListener("submit", async (e) => {
    // prevent default refresh or navigate away from page when submitted
    e.preventDefault();

    // automatically collects all the input fields (names and values) into a format suitable for sending with fetch()
    const formData = new FormData(form);
    formData.append("access_key", "6d011ba0-63b9-4bce-95a5-892b48feac36");

    // btn original text
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Your message has been sent!");
            form.reset(); // reset form fields
        } 
        else {
            alert("Error: " + data.message);
        }
    } 
    catch (error) {
        alert("Something went wrong. Please try again");
    } 
    // runs no matter what success or error
    finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});