import {quiz} from "./QuizContent.js";

const homeDiv = document.getElementById("homeDiv");

const quizDiv = document.getElementById("quizDiv");
const progressDisplay = document.getElementById("progressDisplay");
const questionDisplay = document.getElementById("questionDisplay");
const questionImgDisplay = document.getElementById("questionImgDisplay");
const choiceButtons = document.querySelectorAll(".choiceButtons");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const quizResultsBtn = document.getElementById("quizResultsBtn");

const quizResultDiv = document.getElementById("quizResultDiv");
const totalPtsDisplay = document.getElementById("totalPtsDisplay");
const elementImgDisplay = document.getElementById("elementImgDisplay");
const elementNameDisplay = document.getElementById("elementNameDisplay");
const elementDescDisplay = document.getElementById("elementDescDisplay");

let questionNum = 0;
let totalPts = 0;
// all possible choices of the question
let allChoices = quiz[questionNum].choices;


function startQuiz() {
  quizResultDiv.style.display = "none"; // hide after restart
  homeDiv.style.display = "none";
  quizDiv.style.display = "block";
  
  progressDisplay.textContent = `${questionNum + 1}/10 • ${totalPts} pts`;
  questionDisplay.textContent = quiz[questionNum].question;
  questionImgDisplay.src = quiz[questionNum].img;
  
  // put each choice in each button
  for (let i = 0; i < allChoices.length; i ++) {
    choiceButtons[i].textContent = allChoices[i].choice;
  }
}


function renderQuiz() {
  questionNum ++;
  
  // if its the last question
  if (questionNum === 10) {
    nextQuestionBtn.style.display = "none";
    quizResultsBtn.style.display = "block";
    // prevents question number from going to 11
    return;
  }
  
  nextQuestionBtn.style.display = "none";
  
  progressDisplay.textContent = `${questionNum + 1}/10 • ${totalPts} pts`;
  questionDisplay.textContent = quiz[questionNum].question;
  questionImgDisplay.src = quiz[questionNum].img;
  
  // re-initialize for question num accuracy
  allChoices = quiz[questionNum].choices;
  
  // after each question num
  for (let i = 0; i < allChoices.length; i ++) {
    // make all the buttons clickable again
    choiceButtons[i].disabled = false;
    
    // put each choice in each btn
    choiceButtons[i].textContent = allChoices[i].choice;
    
    // default button colors
    choiceButtons[i].style.color = "#f4f4f4";
    choiceButtons[i].style.backgroundColor = "#333";
  }
}


// every time the user picks a choice
function handleButtons(usersChoice, questionNum) {
  totalPts += quiz[questionNum].choices[usersChoice].pts;
  progressDisplay.textContent = `${questionNum + 1}/10 • ${totalPts} pts`;
  
  // highlight users choice
  choiceButtons[usersChoice].style.color = "#333";
  choiceButtons[usersChoice].style.backgroundColor = "#a3a3a3";
  
  for (let i = 0; i < allChoices.length; i ++) {
    // display the pts of users choice
    choiceButtons[i].textContent +=  `: ${allChoices[i].pts} pts`;
    // all buttons are unclickable after user picks a choice
    choiceButtons[i].disabled = true;
  }
  
  nextQuestionBtn.style.display = "block";
}


function handleUsersChoice(event) {
  // get the index of the button the user picked
  const usersChoice = Array.from(choiceButtons).indexOf(event.target);
  
  // pass that buttons index and the current question num
  if (usersChoice === 0) {
    handleButtons(0, questionNum);
  }
  if (usersChoice === 1) {
    handleButtons(1, questionNum);
  }
  if (usersChoice === 2) {
    handleButtons(2, questionNum);
  }
  if (usersChoice === 3) {
    handleButtons(3, questionNum);
  }
}


// after user finished all questions
function renderQuizResults() {
  quizDiv.style.display = "none";
  quizResultDiv.style.display = "block";
  
  totalPtsDisplay.textContent = `Total Pts: ${totalPts}`;
  
  if (totalPts <= 16) {
    elementImgDisplay.src = "elements/fire.png";
    elementNameDisplay.textContent = "Fire";
    elementDescDisplay.textContent = "You are bright and charismatic";
  }
  else if (totalPts > 16 && totalPts < 25) {
    elementImgDisplay.src = "elements/air.png";
    elementNameDisplay.textContent = "Air";
    elementDescDisplay.textContent = "You are independent and flexible";
  }
  else if (totalPts > 24 && totalPts < 33) {
    elementImgDisplay.src = "elements/water.png";
    elementNameDisplay.textContent = "Water";
    elementDescDisplay.textContent = "You are easy-going and laid back";
  }
  else {
    elementImgDisplay.src = "elements/earth.png";
    elementNameDisplay.textContent = "Earth";
    elementDescDisplay.textContent = "You are loyal and hardworking";
  }
}


function restartQuiz() {
  questionNum = 0;
  totalPts = 0;
  allChoices = quiz[questionNum].choices;
  
  quizResultsBtn.style.display = "none";
  nextQuestionBtn.style.display = "block";
  
  // all buttons back to normal state
  choiceButtons.forEach(btn => {
    btn.style.color = "#f4f4f4";
    btn.style.backgroundColor = "#333";
    btn.disabled = false;
  });
  
  startQuiz();
}


// allows functions to work on a module type script
window.startQuiz = startQuiz;
window.renderQuiz = renderQuiz;
window.handleButtons = handleButtons;
window.handleUsersChoice = handleUsersChoice;
window.renderQuizResults = renderQuizResults;
window.restartQuiz = restartQuiz;