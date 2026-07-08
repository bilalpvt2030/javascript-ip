/* =========================================================
   MODULE 5: Arrays & Iterables
   Topics: mutating/non-mutating methods, iteration methods,
   spread operator, destructuring, Set & Map
   ========================================================= */

const skills = ["HTML", "CSS", "JavaScript"];

// ---- Adding / Removing ----
skills.push("Node.js");        // add to end
skills.unshift("Git");         // add to start
skills.pop();                  // remove from end
console.log("After push/unshift/pop:", skills);

// ---- splice() : add/remove at any index ----
skills.splice(1, 0, "VS Code"); // insert at index 1
console.log("After splice:", skills);

// ---- slice() : copy a range (non-mutating) ----
const firstTwo = skills.slice(0, 2);
console.log("slice(0,2):", firstTwo);

// ---- Searching ----
console.log("indexOf JS:", skills.indexOf("JavaScript"));
console.log("includes Git:", skills.includes("Git"));
const found = skills.find((s) => s.startsWith("Java"));
console.log("find:", found);

// ---- Iteration Methods ----
skills.forEach((skill, i) => console.log(`${i}: ${skill}`));

const lengths = skills.map((skill) => skill.length);
console.log("map -> lengths:", lengths);

const longNames = skills.filter((skill) => skill.length > 4);
console.log("filter -> long names:", longNames);

const totalChars = skills.reduce((total, skill) => total + skill.length, 0);
console.log("reduce -> total characters:", totalChars);

const sorted = [...skills].sort(); // spread to avoid mutating original
console.log("sorted copy:", sorted);

// ---- Spread Operator & Destructuring ----
const moreSkills = [...skills, "Express.js", "MongoDB"];
console.log("spread:", moreSkills);

const [first, second, ...rest] = moreSkills;
console.log("destructured:", first, second, rest);

// ---- Set (unique values) ----
const uniqueSkills = new Set(["JS", "JS", "CSS", "HTML"]);
console.log("Set (duplicates removed):", [...uniqueSkills]);

// ---- Map (key-value pairs, any key type) ----
const skillLevels = new Map();
skillLevels.set("JavaScript", "Intermediate");
skillLevels.set("Node.js", "Beginner");
for (const [key, value] of skillLevels) {
  console.log(`Map -> ${key}: ${value}`);
}

module.exports = {};
