const tabsDiv = document.getElementById("tabsDiv");

const pendingTasksTab = document.getElementById("pendingTasksTab");
const completedTasksTab = document.getElementById("completedTasksTab");
const pendingTasksDiv = document.getElementById("pendingTasksDiv");
const taskInput = document.getElementById("taskInput");
const pendingTasksDisplay = document.getElementById("pendingTasksDisplay");

const manageTaskDiv = document.getElementById("manageTaskDiv");
const taskNameDisplay = document.getElementById("taskNameDisplay");

const completedTasksDiv = document.getElementById("completedTasksDiv");
const completedTasksDisplay = document.getElementById("completedTasksDisplay");

// display saved tasks
pendingTasksDisplay.innerHTML = localStorage.getItem("pendingTasks") || "";
completedTasksDisplay.innerHTML = localStorage.getItem("completedTasks") || "";


function handleTabs(openIndex, closeIndex, tab) {
  const tabs = [pendingTasksDiv, completedTasksDiv];
  
  tabs[openIndex].style.display = "block";
  tabs[closeIndex].style.display = "none";
  
  if (tab === "pending") {
    pendingTasksTab.style.color = "#333";
    pendingTasksTab.style.fontWeight = "bold";
    
    completedTasksTab.style.color = "#666";
    completedTasksTab.style.fontWeight = "normal";
  }
  else {
    completedTasksTab.style.color = "#333";
    completedTasksTab.style.fontWeight = "bold";
    
    pendingTasksTab.style.color = "#666";
    pendingTasksTab.style.fontWeight = "normal";
  }
}


function getAndFormatDate() {
  const now = new Date();
  
  let currentDate = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  
  // if the current date is 9 or below, prepend 0
  currentDate = currentDate < 10 ? "0" + currentDate : currentDate;
  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const meridiem = hours >= 12 ? "PM" : "AM";
  
  // make hours the 12-time format
  hours = hours % 12 || 12;
  // if current hour or minute is 9 or below, prepend 0
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  
  const formattedTime = `${hours}:${minutes} ${meridiem}`;
  
  const abbrMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return `${currentDate} ${abbrMonthNames[currentMonth]} ${currentYear} • ${formattedTime}`;
}


function addTask() {
  if (!taskInput.value) {
    alert("Please enter task name!");
    return;
  }
  
  const task = document.createElement("li");
  task.textContent = taskInput.value.trim();
  taskInput.value = "";
  
  // append each element to task
  const dateAddedDisplay = document.createElement("span");
  dateAddedDisplay.textContent = getAndFormatDate();
  task.appendChild(dateAddedDisplay);
  
  const moveUpBtn = document.createElement("button");
  moveUpBtn.textContent = "Move Up";
  task.appendChild(moveUpBtn);
  
  const moveDownBtn = document.createElement("button");
  moveDownBtn.textContent = "Move Down";
  task.appendChild(moveDownBtn);
  
  // append task to pendingTasksDisplay
  pendingTasksDisplay.appendChild(task);
  
  localStorage.setItem("pendingTasks", pendingTasksDisplay.innerHTML);
}


let selectedTask = null;


function moveTask(event) {
  // the task youre moving
  const targetTask = event.target.parentElement;
  const taskIndex = Array.from(pendingTasksDisplay.children).indexOf(targetTask);
  
  if (event.target.tagName === "LI") {
    tabsDiv.style.display = "none";
    pendingTasksDiv.style.display = "none";
    manageTaskDiv.style.display = "flex";
    
    selectedTask = event.target;
    
    // get the name of the selected task
    taskNameDisplay.textContent = event.target.firstChild.textContent;
  }
  
  if (event.target.innerText === "Move Up") {
    // stop moving up if task is on top
    taskIndex === 0 ? null : pendingTasksDisplay.insertBefore(targetTask, targetTask.previousSibling);
    
    localStorage.setItem("pendingTasks", pendingTasksDisplay.innerHTML);
  }
  
  if (event.target.innerText === "Move Down") {
    // replace the task below with the task youre moving
    pendingTasksDisplay.insertBefore(targetTask, targetTask.nextSibling.nextSibling);
    
    localStorage.setItem("pendingTasks", pendingTasksDisplay.innerHTML);
  }
}


function managePendingTask(event) {
  if (event.target.innerText === "Mark as Complete") {
    const confirmComplete = confirm(`Move "${taskNameDisplay.textContent}" to completed tasks?`);
    
    if (confirmComplete) {
      alert(`"${taskNameDisplay.textContent}" has been moved!`);
      
      const completedTask = document.createElement("li");
      completedTask.textContent = selectedTask.firstChild.textContent;
      
      // append the date and delete button to completedTask first
      const dateCompletedDisplay = document.createElement("span");
      dateCompletedDisplay.textContent = getAndFormatDate();
      
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      completedTask.appendChild(dateCompletedDisplay);
      completedTask.appendChild(deleteBtn);
      // then append completedTask to completedTasksDisplay
      completedTasksDisplay.appendChild(completedTask);
      // remove the completed task from pending tasks
      pendingTasksDisplay.removeChild(selectedTask);
      localStorage.setItem("pendingTasks", pendingTasksDisplay.innerHTML);
      // save completedTasks to its own storage
      localStorage.setItem("completedTasks", completedTasksDisplay.innerHTML);
    }
  }
  
  if (event.target.innerText === "Edit") {
    const newTaskName = prompt("Enter new task name:");
    
    
    if (newTaskName) {
      taskNameDisplay.textContent = newTaskName;
      selectedTask.firstChild.textContent = newTaskName;
      
      localStorage.setItem("pendingTasks", pendingTasksDisplay.innerHTML);
    }
  }
  
  if (event.target.innerText === "Delete") {
    const confirmDelete = confirm(`Permanently delete "${taskNameDisplay.textContent}"? This action is irreversible.`);
    
    if (confirmDelete) {
      pendingTasksDisplay.removeChild(selectedTask);
      localStorage.setItem("pendingTasks", pendingTasksDisplay.innerHTML);
      
      manageTaskDiv.style.display = "none";
      tabsDiv.style.display = "flex";
      pendingTasksDiv.style.display = "flex";
    }
  }
  
  if (event.target.innerText === "Go Back") {
    manageTaskDiv.style.display = "none";
    tabsDiv.style.display = "flex";
    pendingTasksDiv.style.display = "flex";
  }
}


function manageCompletedTasks(event) {
  if (event.target.innerText === "Delete") {
    const targetTask = event.target;
    
    const confirmDelete = confirm(`Permanently delete "${targetTask.previousSibling.textContent}"? This action is irreversible.`);
    
    if (confirmDelete) {
      completedTasksDisplay.removeChild(targetTask.parentElement);
      localStorage.setItem("completedTasks", completedTasksDisplay.innerHTML);
    }
  }
}