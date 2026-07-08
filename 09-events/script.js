/* =========================================================
   MODULE 9: Events deep-dive
   Topics: addEventListener, the event object, preventDefault,
   bubbling vs capturing, stopPropagation, event delegation
   ========================================================= */

const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

// ---- Bubbling (default): event fires on target, then bubbles UP ----
outer.addEventListener("click", () => console.log("1. Outer (bubbling phase)"));
middle.addEventListener("click", () => console.log("2. Middle (bubbling phase)"));
inner.addEventListener("click", (event) => {
  console.log("3. Inner clicked (target):", event.target.id);
  // event.stopPropagation(); // uncomment to stop the bubble here
});

// ---- Capturing: fires on the way DOWN, before bubbling ----
outer.addEventListener("click", () => console.log("0. Outer (capturing phase)"), {
  capture: true,
});

// ---- The Event Object ----
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key, "| shiftKey:", event.shiftKey);
});

// ---- preventDefault() example (would stop a link navigating, etc.) ----
const links = document.querySelectorAll("a");
links.forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Default link navigation prevented.");
  })
);
