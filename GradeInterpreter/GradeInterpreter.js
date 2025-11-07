const gradesInputDiv = document.getElementById("gradesInputDiv");
const gradesDisplayDiv = document.getElementById("gradesDisplayDiv");

const englishGradeInput = document.getElementById("englishGradeInput");
const mathGradeInput = document.getElementById("mathGradeInput");
const scienceGradeInput = document.getElementById("scienceGradeInput");
const artsGradeInput = document.getElementById("artsGradeInput");
const musicGradeInput = document.getElementById("musicGradeInput");
const peGradeInput = document.getElementById("peGradeInput");
const historyGradeInput = document.getElementById("historyGradeInput");
const socialGradeInput = document.getElementById("socialGradeInput");
const techGradeInput = document.getElementById("techGradeInput");

const highestGradeDisplay = document.getElementById("highestGradeDisplay");
const lowestGradeDisplay = document.getElementById("lowestGradeDisplay");
const averageGradeDisplay = document.getElementById("averageGradeDisplay");

const resetGradesText = document.getElementById("resetGradesText");

const interpretationDisplay = document.getElementById("interpretationDisplay");
const letterGradeDisplay = document.getElementById("letterGradeDisplay");

const gradeInputs = document.querySelectorAll("input");


function handleGrades() {
  // initially remove special style
  averageGradeDisplay.classList.remove("niceGrade");
  letterGradeDisplay.classList.remove("niceGrade");
  
  // maps through each grade as Number
  const grades = Array.from(gradeInputs).map(grade => Number(grade.value));
  
  // will trigger for one or more input.elements
  const emptyGrade = grades.some(grade => !grade);
  const invalidGrade = grades.some(grade => isNaN(grade));
  const gradeAbove99 = grades.some(grade => grade > 99);
  const gradeBelow50 = grades.some(grade => grade < 50);
  
  if (emptyGrade) {
    alert("Enter all grades!");
    return;
  }
  if (invalidGrade) {
    alert("Enter valid grade!");
    return;
  }
  if (gradeAbove99) {
    alert("Grade can't be higher than 99!");
    return;
  }
  if (gradeBelow50) {
    alert("Grade can't be lower than 50!");
    return;
  }
  
  // go through each grade an return the highest
  const highestGrade = grades.reduce((prevGrade, nextGrade) => {
    return Math.max(prevGrade, nextGrade);
  });
  
  const lowestGrade = grades.reduce((prevGrade, nextGrade) => {
    return Math.min(prevGrade, nextGrade);
  });
  
  const totalGrades = grades.reduce((prevGrade, nextGrade) => {
    return prevGrade + nextGrade;
  });
  
  const averageGrade = totalGrades / grades.length;
  
  switch (true) {
    case averageGrade >= 97:
      letterGradeDisplay.textContent = "A+";
      interpretationDisplay.textContent = '"STUDY LESS"';
      break;
      
    case averageGrade >= 93:
      letterGradeDisplay.textContent = "A";
      interpretationDisplay.textContent = '"CELEBRATE!"';
      break;
      
    case averageGrade >= 90:
      letterGradeDisplay.textContent = "A-";
      interpretationDisplay.textContent = '"GREAT!"';
      break;
      
    case averageGrade >= 87:
      letterGradeDisplay.textContent = "B+";
      interpretationDisplay.textContent = '"ALL IS WELL"';
      break;
      
    case averageGrade >= 83:
      letterGradeDisplay.textContent = "B";
      interpretationDisplay.textContent = '"GOODS"';
      break;
      
    case averageGrade >= 80:
      letterGradeDisplay.textContent = "B-";
      interpretationDisplay.textContent = '"BARELY IN THE COMFORT ZONE"';
      break;
      
    case averageGrade >= 77:
      letterGradeDisplay.textContent = "C+";
      interpretationDisplay.textContent = '"HANG ON TIGHT!"';
      break;
      
    case averageGrade >= 73:
      letterGradeDisplay.textContent = "C";
      interpretationDisplay.textContent = '"SO CLOSE"';
      break;
      
    case averageGrade >= 70:
      letterGradeDisplay.textContent = "C-";
      interpretationDisplay.textContent = '"MISSION FAILED"';
      break;
    
    // special case for 69
    case averageGrade === 69:
      letterGradeDisplay.textContent = "N";
      interpretationDisplay.textContent = '"NICE"';
      // custom style for 69 grade
      averageGradeDisplay.classList.add("niceGrade");
      letterGradeDisplay.classList.add("niceGrade");
      break;
      
    case averageGrade >= 67:
      letterGradeDisplay.textContent = "D+";
      interpretationDisplay.textContent = '"SERIOUSLY?"';
      break;
      
    case averageGrade >= 63:
      letterGradeDisplay.textContent = "D";
      interpretationDisplay.textContent = '"WHAT A KIND TEACHER"';
      break;
      
    case averageGrade >= 60:
      letterGradeDisplay.textContent = "D-";
      interpretationDisplay.textContent = '"GOD IS KIND"';
      break;
      
    case averageGrade >= 50:
      letterGradeDisplay.textContent = "F";
      interpretationDisplay.textContent = '"YOURE TROLLING"';
      break;
  }
  
  gradesInputDiv.style.display = "none";
  gradesDisplayDiv.style.display = "block";
  
  highestGradeDisplay.textContent = Math.round(highestGrade);
  lowestGradeDisplay.textContent = Math.round(lowestGrade);
  averageGradeDisplay.textContent = Math.round(averageGrade);
}


resetGradesText.onclick = () => {
  const confirmGradeReset = confirm("Reset grades?");
  
  if (confirmGradeReset) {
    gradeInputs.forEach(input => input.value = "");
    
    gradesDisplayDiv.style.display = "none";
    gradesInputDiv.style.display = "block";
  }
}