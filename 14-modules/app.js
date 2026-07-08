/* MODULE 14: JS Modules - importing named + default exports */
import { add, multiply, PI } from "./math.js";
import capitalize from "./stringUtils.js";

console.log("add(2,3) =", add(2, 3));
console.log("multiply(4,5) =", multiply(4, 5));
console.log("PI =", PI);
console.log(capitalize("javascript modules"));

// Dynamic import (code-splitting) - loads the module only when needed
document.getElementById("load-btn")?.addEventListener("click", async () => {
  const { add: dynamicAdd } = await import("./math.js");
  console.log("Dynamically imported add(10,10) =", dynamicAdd(10, 10));
});
