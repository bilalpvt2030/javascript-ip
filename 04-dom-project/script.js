/* =========================================================
   Task Tracker - DOM manipulation practice
   ========================================================= */

// ---- Selecting elements ----
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");

let tasks = [];
let nextId = 1;

function updateEmptyMessage() {
  emptyMessage.style.display = tasks.length === 0 ? "block" : "none";
}

// ---- Creating & inserting elements ----
function renderTask(task) {
  const li = document.createElement("li");
  li.dataset.id = task.id; // using data-* attributes (dataset)
  if (task.completed) li.classList.add("completed");

  const span = document.createElement("span");
  span.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}

// ---- Handling form submit (preventDefault) ----
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const task = { id: nextId++, text, completed: false };
  tasks.push(task);
  renderTask(task);
  input.value = "";
  updateEmptyMessage();
});

// ---- Event Delegation ----
// Instead of adding a listener to every <li>, we add ONE listener
// to the parent <ul> and check which child was actually clicked.
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  const id = Number(li.dataset.id);

  if (event.target.tagName === "BUTTON") {
    // remove task (delete button clicked)
    tasks = tasks.filter((t) => t.id !== id);
    li.remove();
    updateEmptyMessage();
  } else {
    // toggle completed (clicked the text/row itself)
    const task = tasks.find((t) => t.id === id);
    task.completed = !task.completed;
    li.classList.toggle("completed");
  }
});

updateEmptyMessage();
