/* =========================================================
   MODULE 8: Constructor Functions & Prototypes
   Topics: constructor functions, the prototype chain,
   Object.create, comparing prototypes to classes
   ========================================================= */

// ---- Constructor Function (pre-ES6 way of doing OOP) ----
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Methods added to the prototype are SHARED by all instances
// (more memory-efficient than defining methods inside the constructor)
Person.prototype.introduce = function () {
  return `Hi, I'm ${this.name} and I'm ${this.age}.`;
};

const p1 = new Person("Bilal", 22);
const p2 = new Person("Sara", 24);
console.log(p1.introduce());
console.log(p2.introduce());
console.log("Shared method?", p1.introduce === p2.introduce); // true

// ---- The Prototype Chain ----
console.log(Object.getPrototypeOf(p1) === Person.prototype); // true
console.log(p1.__proto__.__proto__ === Object.prototype);    // true

// ---- Classes are "syntactic sugar" over prototypes ----
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `Hi, I'm ${this.name}`;
  }
}
console.log(typeof PersonClass); // "function" - classes ARE functions under the hood

// ---- Object.create() ----
const animal = {
  makeSound() {
    return "Some generic sound";
  },
};
const dog = Object.create(animal);
dog.makeSound = function () {
  return "Woof!";
};
console.log(dog.makeSound());
console.log(Object.getPrototypeOf(dog) === animal); // true

module.exports = {};
