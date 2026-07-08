/* =========================================================
   MODULE 6: Objects & "this"
   Topics: object literals, shorthand, destructuring, spread,
   getters/setters, dynamic property access, "this" behavior
   ========================================================= */

// ---- Object Literal & Property Shorthand ----
const name = "Bilal";
const role = "Intern";
const profile = {
  name,          // shorthand for name: name
  role,
  skills: ["JS", "DOM", "Async"],
  greet() {      // method shorthand
    return `Hi, I'm ${this.name}, working as a ${this.role}.`;
  },
};
console.log(profile.greet());

// ---- Dynamic Property Access ----
const dynamicKey = "skills";
console.log(profile[dynamicKey]);

// ---- Object Destructuring & Spread ----
const { name: internName, ...otherDetails } = profile;
console.log(internName, otherDetails);

const updatedProfile = { ...profile, role: "Full Time" };
console.log("Original role:", profile.role, "| Updated role:", updatedProfile.role);

// ---- Getters & Setters ----
const account = {
  _balance: 1000,
  get balance() {
    return `$${this._balance}`;
  },
  set balance(amount) {
    if (amount < 0) throw new Error("Balance cannot be negative");
    this._balance = amount;
  },
};
console.log(account.balance);
account.balance = 1500;
console.log(account.balance);

// ---- Understanding "this" ----
const counter = {
  count: 0,
  increment: function () {
    this.count++; // "this" = the object calling the method
    console.log("Regular function this.count:", this.count);
  },
  incrementArrow: () => {
    // Arrow functions do NOT have their own "this" -
    // they inherit it from the surrounding (outer) scope.
    console.log("Arrow function 'this' is NOT the object:", this);
  },
};
counter.increment();
counter.increment();
counter.incrementArrow();

module.exports = {};
