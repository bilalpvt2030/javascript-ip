/* =========================================================
   MODULE 13: HTTP Requests (AJAX / fetch API)
   Topics: fetch() GET & POST, JSON parsing, error handling
   Run this file in a browser console, or in Node 18+ (fetch is built in)
   ========================================================= */

// ---- GET request ----
async function getTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log("GET result:", data);
  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}

// ---- POST request ----
async function createTodo(title) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: false }),
    });
    const created = await response.json();
    console.log("POST result:", created);
  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}

getTodos();
createTodo("Finish JavaScript internship report");

module.exports = {};
