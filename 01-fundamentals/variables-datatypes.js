/* =========================================================
   MODULE 1: JavaScript Fundamentals
   Topics: var/let/const, primitive data types, typeof,
   type conversion vs coercion, template literals, operators
   ========================================================= */

// ---- Variables & Constants ----
var oldWay = "avoid using var (function-scoped, hoisted)";
let mutableValue = 10;      // block-scoped, can be reassigned
const PI = 3.14159;         // block-scoped, cannot be reassigned

mutableValue = 20; // OK
// PI = 3.14; // ERROR: Assignment to constant variable.

// ---- Core Data Types ----
const age = 22;                 // Number
const name = "Bilal";           // String
const isLearning = true;        // Boolean
let notAssigned;                // undefined
const empty = null;             // null (intentional "no value")
const bigNumber = 9007199254740993n; // BigInt
const uniqueId = Symbol("id");  // Symbol

console.log(typeof age, typeof name, typeof isLearning);
console.log(typeof notAssigned, typeof empty); // note: typeof null === "object" (famous JS quirk)

// ---- Template Literals ----
const greeting = `Hi, I'm ${name} and I'm ${age} years old.`;
console.log(greeting);

// ---- Type Conversion vs Coercion ----
const strNumber = "25";
const converted = Number(strNumber);      // explicit CONVERSION
const coerced = "25" + 1;                 // implicit COERCION -> "251"
const coercedMath = "25" - 1;             // implicit COERCION -> 24 (numeric context)

console.log(converted, typeof converted);
console.log(coerced, typeof coerced);
console.log(coercedMath, typeof coercedMath);

// ---- Operators ----
console.log(5 + 3, 5 - 3, 5 * 3, 5 / 3, 5 % 3, 5 ** 2);
console.log(5 === "5");  // false -> strict equality (no coercion)
console.log(5 == "5");   // true  -> loose equality (with coercion)

module.exports = {}; // present so file can be required without errors in a Node context
