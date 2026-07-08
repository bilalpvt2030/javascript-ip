/* =========================================================
   MODULE 15: Node.js & Express.js Basics
   A minimal REST API demonstrating routes, middleware, and
   parsing JSON request bodies.
   Run with: npm install && node server.js
   ========================================================= */

const express = require("express");
const app = express();
const PORT = 3000;

// ---- Middleware: parse incoming JSON bodies ----
app.use(express.json());

// simple in-memory "database"
let tasks = [
  { id: 1, title: "Learn JavaScript fundamentals", done: true },
  { id: 2, title: "Build a REST API with Express", done: false },
];

// ---- CORS middleware (allow cross-origin requests) ----
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
  next();
});

// ---- GET all tasks ----
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ---- GET single task ----
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// ---- POST create a task ----
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const newTask = { id: tasks.length + 1, title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// ---- DELETE a task ----
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== Number(req.params.id));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
