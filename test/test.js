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
  
  const currentDate = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const currentTime = now.toLocaleTimeString();
  const meridiem = now.getHours() >= 12 ? "PM" : "AM";
  
  const abbrMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return `${currentDate} ${abbrMonthNames[currentMonth]} ${currentYear} • ${currentTime} ${meridiem}`;
}


function addTask() {
  if (!taskInput.value) {
    alert("Please enter task name!");
    return;
  }
  
  const task = document.createElement("li");
  task.textContent = taskInput.value.trim();
  taskInput.value = "";
  
  const moveUpBtn = document.createElement("button");
  moveUpBtn.textContent = "UP";
  task.appendChild(moveUpBtn);
  
  const moveDownBtn = document.createElement("button");
  moveDownBtn.textContent = "DO";
  task.appendChild(moveDownBtn);
  
  const dateAddedDisplay = document.createElement("span");
  dateAddedDisplay.textContent = getAndFormatDate();
  task.appendChild(dateAddedDisplay);
  
  pendingTasksDisplay.appendChild(task);
  
  localStorage.setItem("pendingTasks", pendingTasksDisplay.innerHTML);
}


let selectedTask = null;


function moveTask(event) {
  const targetTask = event.target.parentElement;
  const taskIndex = Array.from(pendingTasksDisplay.children).indexOf(targetTask);
  
  if (event.target.tagName === "LI") {
    tabsDiv.style.display = "none";
    pendingTasksDiv.style.display = "none";
    manageTaskDiv.style.display = "block";
    
    selectedTask = event.target;
    
    taskNameDisplay.textContent = event.target.firstChild.textContent;
  }
  
  if (event.target.innerText === "UP") {
    taskIndex === 0 ? null : pendingTasksDisplay.insertBefore(targetTask, targetTask.previousSibling);
    
    localStorage.setItem("pendingTasks", pendingTasksDisplay.innerHTML);
  }
  
  if (event.target.innerText === "DO") {
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
      
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      
      const dateCompletedDisplay = document.createElement("span");
      dateCompletedDisplay.textContent = getAndFormatDate();
      
      completedTask.appendChild(deleteBtn);
      completedTask.appendChild(dateCompletedDisplay);
      completedTasksDisplay.appendChild(completedTask);
      pendingTasksDisplay.removeChild(selectedTask);
      
      localStorage.setItem("pendingTasks", pendingTasksDisplay.innerHTML);
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
      tabsDiv.style.display = "block";
      pendingTasksDiv.style.display = "block";
    }
  }
  
  if (event.target.innerText === "Go Back") {
    manageTaskDiv.style.display = "none";
    tabsDiv.style.display = "block";
    pendingTasksDiv.style.display = "block";
  }
}


function manageCompletedTasks(event) {
  if (event.target.innerText === "X") {
    const targetTask = event.target;
    
    const confirmDelete = confirm(`Permanently delete "${targetTask.previousSibling.textContent}"? This action is irreversible.`);
    
    if (confirmDelete) {
      completedTasksDisplay.removeChild(targetTask.parentElement);
      localStorage.setItem("completedTasks", completedTasksDisplay.innerHTML);
    }
  }
}