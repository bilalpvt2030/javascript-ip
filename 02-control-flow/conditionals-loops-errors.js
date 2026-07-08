/* =========================================================
   MODULE 2: Control Structures, Loops & Error Handling
   Topics: if/else, switch, ternary, truthy/falsy, loops,
   break/continue, labeled statements, try/catch, custom errors
   ========================================================= */

// ---- if / else if / else ----
function checkAge(age) {
  if (age < 13) {
    return "Child";
  } else if (age < 20) {
    return "Teenager";
  } else {
    return "Adult";
  }
}
console.log(checkAge(22));

// ---- Ternary operator ----
const status = 22 >= 18 ? "Adult" : "Minor";
console.log(status);

// ---- Truthy / Falsy ----
// Falsy values: false, 0, "", null, undefined, NaN
if ("") console.log("won't run");
if ("non-empty") console.log("truthy string runs");

// ---- switch-case ----
function dayType(day) {
  switch (day) {
    case "Sat":
    case "Sun":
      return "Weekend";
    default:
      return "Weekday";
  }
}
console.log(dayType("Sun"));

// ---- for / for-of / for-in ----
for (let i = 0; i < 3; i++) console.log("for loop:", i);

const skills = ["JS", "DOM", "Async", "Node"];
for (const skill of skills) console.log("for-of:", skill);

const user = { name: "Bilal", role: "Intern" };
for (const key in user) console.log("for-in:", key, "=", user[key]);

// ---- while / do-while ----
let count = 0;
while (count < 3) {
  console.log("while:", count);
  count++;
}

// ---- break / continue / labeled statements ----
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outerLoop;
    if (i === 2) break outerLoop;
    console.log(`i=${i}, j=${j}`);
  }
}

// ---- Error Handling: try/catch/finally + custom errors ----
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError("Age cannot be negative.");
  }
  return age;
}

try {
  validateAge(-5);
} catch (err) {
  console.error(`Caught ${err.name}: ${err.message}`);
} finally {
  console.log("Validation attempt finished.");
}

module.exports = {};
