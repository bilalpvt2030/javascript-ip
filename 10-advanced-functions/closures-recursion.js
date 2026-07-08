/* =========================================================
   MODULE 10: Advanced Functions
   Topics: pure functions, factory functions, closures, recursion
   ========================================================= */

// ---- Pure Function (no side effects, same input -> same output) ----
function pureAdd(a, b) {
  return a + b;
}

// ---- Impure Function (side effect: modifies external state) ----
let total = 0;
function impureAdd(a) {
  total += a; // modifies variable outside its own scope
  return total;
}

// ---- Factory Function ----
function createUser(name, role) {
  return {
    name,
    role,
    describe() {
      return `${name} works as ${role}`;
    },
  };
}
const intern = createUser("Bilal", "JS Intern");
console.log(intern.describe());

// ---- Closures ----
// A closure = a function that "remembers" variables from the scope
// it was created in, even after that outer function has returned.
function createCounter() {
  let count = 0; // private state, not accessible from outside
  return function () {
    count++;
    return count;
  };
}
const counter1 = createCounter();
console.log(counter1(), counter1(), counter1()); // 1 2 3

const counter2 = createCounter(); // independent closure/state
console.log(counter2()); // 1 (unaffected by counter1)

// ---- Recursion ----
function factorial(n) {
  if (n <= 1) return 1;        // base case
  return n * factorial(n - 1); // recursive case
}
console.log("5! =", factorial(5));

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(7) =", fibonacci(7));

module.exports = {};
