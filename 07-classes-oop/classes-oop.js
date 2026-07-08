/* =========================================================
   MODULE 7: Classes & Object-Oriented Programming (OOP)
   Topics: class syntax, constructors, fields, static members,
   inheritance, super(), getters/setters, private fields
   ========================================================= */

class Product {
  // class fields
  category = "General";
  #stock = 0; // private field (only accessible inside the class)

  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  // instance method
  getDisplayPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  // getter / setter for the private field
  get stock() {
    return this.#stock;
  }
  set stock(amount) {
    if (amount < 0) throw new Error("Stock cannot be negative");
    this.#stock = amount;
  }

  // static method - called on the class itself, not an instance
  static compareByPrice(a, b) {
    return a.price - b.price;
  }
}

class Course extends Product {
  category = "Online Course";

  constructor(title, price, instructor) {
    super(title, price); // must call super() before using "this" in a subclass
    this.instructor = instructor;
  }

  getDisplayPrice() {
    // method overriding + reusing the parent implementation
    return `${super.getDisplayPrice()} (taught by ${this.instructor})`;
  }
}

const jsCourse = new Course("JavaScript - The Complete Guide", 19.99, "Academind");
jsCourse.stock = 100;

console.log(jsCourse.getDisplayPrice());
console.log("Stock:", jsCourse.stock);
console.log("Category:", jsCourse.category);
console.log("instanceof Product:", jsCourse instanceof Product);

const products = [
  new Product("Mouse", 15),
  new Product("Keyboard", 45),
  jsCourse,
];
products.sort(Product.compareByPrice);
console.log("Sorted by price:", products.map((p) => p.title));

module.exports = {};
