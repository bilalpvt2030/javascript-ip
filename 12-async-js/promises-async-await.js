/* =========================================================
   MODULE 12: Asynchronous JavaScript
   Topics: sync vs async, callbacks, Promises, async/await,
   error handling, Promise.all()
   ========================================================= */

// ---- Callback-based async (old style, can lead to "callback hell") ----
function fetchUserCallback(id, callback) {
  setTimeout(() => {
    callback({ id, name: "Bilal" });
  }, 500);
}
fetchUserCallback(1, (user) => console.log("Callback style:", user));

// ---- Promises ----
function fetchUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: "Bilal" });
      else reject(new Error("Invalid user id"));
    }, 500);
  });
}

fetchUserPromise(1)
  .then((user) => {
    console.log("Promise .then:", user);
    return fetchUserPromise(2); // chaining
  })
  .then((user2) => console.log("Chained result:", user2))
  .catch((err) => console.error("Promise error:", err.message))
  .finally(() => console.log("Promise chain finished."));

// ---- async / await (cleaner syntax over Promises) ----
async function loadUser(id) {
  try {
    const user = await fetchUserPromise(id);
    console.log("async/await result:", user);
    return user;
  } catch (err) {
    console.error("async/await error:", err.message);
  }
}
loadUser(3);
loadUser(-1); // triggers the reject/catch path

// ---- Promise.all() - run multiple async ops in parallel ----
async function loadMultipleUsers() {
  const results = await Promise.all([
    fetchUserPromise(10),
    fetchUserPromise(20),
    fetchUserPromise(30),
  ]);
  console.log("Promise.all results:", results);
}
loadMultipleUsers();

module.exports = {};
