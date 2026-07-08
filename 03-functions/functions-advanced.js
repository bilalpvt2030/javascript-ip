/* =========================================================
   MODULE 3: Functions (Basics -> Advanced)
   Topics: declarations vs expressions, arrow functions,
   default & rest params, callbacks, bind/call/apply, IIFE
   ========================================================= */

// ---- Function Declaration (hoisted) ----
function add(a, b) {
  return a + b;
}

// ---- Function Expression (not hoisted) ----
const subtract = function (a, b) {
  return a - b;
};

// ---- Arrow Functions ----
const multiply = (a, b) => a * b;
const square = (x) => x * x;
const sayHi = () => console.log("Hi!");

console.log(add(2, 3), subtract(5, 2), multiply(4, 3), square(5));

// ---- Default & Rest Parameters ----
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet(), greet("Bilal"));

function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

// ---- Callback Functions ----
function processUserInput(callback) {
  const input = "javascript";
  callback(input.toUpperCase());
}
processUserInput((result) => console.log("Callback result:", result));

// ---- Higher-Order Functions ----
function createMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = createMultiplier(2);
console.log("double(6) =", double(6));

// ---- bind(), call(), apply() ----
const person = { name: "Bilal" };
function introduce(profession) {
  console.log(`I'm ${this.name}, a ${profession}.`);
}
const boundIntroduce = introduce.bind(person);
boundIntroduce("JS Developer Intern");
introduce.call(person, "Frontend Intern");
introduce.apply(person, ["Full-Stack Intern"]);

// ---- IIFE (Immediately Invoked Function Expression) ----
(function () {
  console.log("IIFE executed immediately - keeps variables private.");
})();

module.exports = {};
