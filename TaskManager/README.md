# TaskManager  
A browser-based task management system with pending/completed task lists, task reordering, editing tools, timestamps, and full data persistence through localStorage.

## Features

### Task Creation  
- Add new tasks with a single input field  
- Each task automatically receives:
  - A timestamp (date + time, formatted)  
  - Move Up / Move Down buttons  
- Tasks are stored in the **Pending Tasks** list by default  
- Saves changes instantly to localStorage  
### Pending vs Completed Tabs  
- Two tabs:
  - **Pending Tasks**
  - **Completed Tasks**
- Tab switching updates visibility and active tab styling  
- Both lists persist even after page reload  
### Task Interaction in Pending List  
- Clicking a task opens a **Manage Task** panel  
- From there, you can:
  - Mark as Complete  
  - Edit task name  
  - Delete task  
  - Go Back to task list  
- Reordering tools:
  - **Move Up** (unless already at the top)  
  - **Move Down** (shifts task to lower position)  
- All actions update localStorage immediately  
### Completion Workflow  
When a task is marked complete:  
1. Confirmation prompt appears  
2. Task moves from Pending → Completed  
3. A timestamp and **Delete** button are appended  
4. Task is saved to `completedTasks` in localStorage
### Completed Tasks Management  
- Each completed task has a Delete button  
- Deleting asks for confirmation  
- Removal updates storage instantly  

## Date & Time Formatting  
Every task uses the built-in date formatter which produces output like:  
`04 Feb 2025 • 09:42 PM`  
Formatting includes:  
- Leading zeros for dates  
- Abbreviated month names  
- 12-hour time format with AM/PM  
- Leading zeros for hours/minutes  

## Data Persistence  
The app saves:  
- All pending tasks → `pendingTasks` key  
- All completed tasks → `completedTasks` key  
- Both keys store the generated HTML for fast restoration  
On page load, tasks reappear automatically.

## How it Works
### Adding a Task  
- Validates empty input  
- Creates a `<li>` with:
  - Task name  
  - Date added  
  - Move Up/Down buttons  
- Appends to pending list  
- Saves updated layout  
### Managing a Task  
- Opens a dedicated panel  
- Allows editing, completing, deleting  
- Uses a stored reference (`selectedTask`)  
### Moving Tasks  
- Identifies clicked button  
- Calculates index in the list  
- Inserts the element before/after neighbors  
### Managing Completed Tasks  
- Each completed task:
  - Shows timestamp  
  - Has a Delete button  
- Deletion removes only selected element  

## Screenshots
- [TaskManager Pending Tasks Tab](TaskManagerPending.png)
- [TaskManager Completed Tasks Tab](TaskManagerCompleted.png)
- [TaskManager Manage Task Window](TaskManagerManageTask.png)

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML | UI layout |
| CSS | Styling |
| JavaScript | App logic |
| localStorage | Saves tasks |
| DOM manipulation | Creates and moves list items |

## How to Run
1. Navigate to the TaskManager folder:
   ```bash
   cd TaskManager
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Enhancements  
- Drag-and-drop task sorting  
- Search bar  
- Automatic sync with cloud storage  