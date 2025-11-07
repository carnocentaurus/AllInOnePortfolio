const inputsDiv = document.getElementById("inputsDiv");
const displaysDiv = document.getElementById("displaysDiv");

const imgDisplay = document.getElementById("imgDisplay");
const imgInput = document.getElementById("imgInput");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const addressInput = document.getElementById("addressInput");
const schoolInput = document.getElementById("schoolInput");
const skillsInput = document.getElementById("skillsInput");
const languagesInput = document.getElementById("languagesInput");
const contactNumInput = document.getElementById("contactNumInput");
const emailInput = document.getElementById("emailInput");

const chosenImgDisplay = document.getElementById("chosenImgDisplay");
const nameDisplay = document.getElementById("nameDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const addressDisplay = document.getElementById("addressDisplay");
const schoolDisplay = document.getElementById("schoolDisplay");
const skillsDisplay = document.getElementById("skillsDisplay");
const languagesDisplay = document.getElementById("languagesDisplay");
const contactNumDisplay = document.getElementById("contactNumDisplay");
const emailDisplay = document.getElementById("emailDisplay");

const newResumeText = document.getElementById("newResumeText");

const inputElements = document.querySelectorAll("input");
// stores any empty input element
const isEmptyInput = Array.from(inputElements).some(input => !input);

imgInput.onchange = () => {
  imgDisplay.style.display = "block";
  // display the selected image
  imgDisplay.src = URL.createObjectURL(imgInput.files[0]);
}


function formatText(text) {
  text = text.toUpperCase();
  text = text.replace(",", ", ");
  
  return text;
}


function formatContactNum(num) {
  const part1 = num.slice(0, 2);
  const part2 = num.slice(2, 5);
  const part3 = num.slice(5, 8);
  const part4 = num.slice(8, 12);
  
  return `${part1} ${part2} ${part3} ${part4}`;
}


function handleResume() {
  const name = nameInput.value;
  const age = ageInput.value;
  const address = addressInput.value;
  const school = schoolInput.value;
  const skills = skillsInput.value;
  const languages = languagesInput.value;
  const contactNum = contactNumInput.value;
  const email = String(emailInput.value);
  const chosenImg = URL.createObjectURL(imgInput.files[0]);
  
  if (isEmptyInput) {
    alert("Fill-up all forms!");
    return;
  }
  if (age < 1 || age > 100) {
    alert("Enter valid age!");
    return;
  }
  if (contactNum.length !== 12) {
    alert("Contact number must be 12 digits!");
    return;
  }
  if (!contactNum.startsWith("63")) {
    alert("Contact number must start with 63!");
    return;
  }
  if (!email.includes("@gmail.com")) {
    alert("Email must have '@gmail.com' !");
    return;
  }
  
  inputsDiv.style.display = "none";
  displaysDiv.style.display = "block";
  
  chosenImgDisplay.src = chosenImg;
  nameDisplay.textContent = formatText(name);
  ageDisplay.textContent = age;
  addressDisplay.textContent = formatText(address);
  schoolDisplay.textContent = formatText(school);
  skillsDisplay.textContent = formatText(skills);
  languagesDisplay.textContent = formatText(languages);
  contactNumDisplay.textContent = formatContactNum(contactNum);
  emailDisplay.textContent = email;
}


newResumeText.onclick = () => {
  inputsDiv.style.display = "block";
  displaysDiv.style.display = "none";
  imgDisplay.style.display = "none";
  
  inputElements.forEach(input => input.value = "");
}