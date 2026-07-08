# JavaScript Internship

Practical demo code written to accompany the internship report, mapped to the
Udemy course "JavaScript - The Complete Guide (Beginner + Advanced)". Each
folder is self-contained and commented so it can be opened, read, and run
independently in VS Code.

## How to present this to your mentor

Open the folder in VS Code, then for each topic open the matching file and
run it (see "How to run" below). The comments at the top of every file
explain exactly what concepts it demonstrates.

## Folder map (topic -> course module)

| Folder | Topic | Course Module |
|---|---|---|
| `01-fundamentals` | Variables, data types, type conversion | Module: JS Fundamentals |
| `02-control-flow` | if/switch/loops/try-catch | Control Structures |
| `03-functions` | Functions, arrow fns, bind/call/apply | Functions |
| `04-dom-project` | DOM selection/creation/events (Task Tracker app) | The DOM |
| `05-arrays-iterables` | Array methods, Set, Map, spread/destructuring | Arrays & Iterables |
| `06-objects-this` | Objects, getters/setters, `this` | Objects |
| `07-classes-oop` | Classes, inheritance, static, private fields | Classes & OOP |
| `08-prototypes` | Constructor functions, prototype chain | Prototypes |
| `09-events` | Bubbling/capturing, delegation, event object | Events |
| `10-advanced-functions` | Closures, factory functions, recursion | Advanced Functions |
| `12-async-js` | Callbacks, Promises, async/await | Async JavaScript |
| `13-http-fetch` | fetch() GET/POST, JSON, error handling | HTTP Requests |
| `14-modules` | import/export, dynamic import | JS Modules |
| `15-node-express` | Node.js + Express REST API | Back-end Basics |
| `16-security-notes` | XSS, CSRF, CORS explained with code | Security |

## How to run

- **Plain `.js` files** (01, 02, 03, 05, 06, 07, 08, 10, 12, 13, 16): run with
  Node directly, e.g. `node 01-fundamentals/variables-datatypes.js`, or paste
  into the browser console.
- **`04-dom-project` and `09-events`**: open `index.html` directly in a
  browser (double-click it).
- **`14-modules`**: needs a local server because of ES module CORS rules -
  easiest way is the "Live Server" extension in VS Code, then open
  `index.html`.
- **`15-node-express`**: run `npm install` then `npm start` inside that
  folder, then visit `http://localhost:3000/tasks` in a browser or Postman.

## Why this matters

This code was written to actively practice each concept from the course
rather than just watch the lectures - it's the "learn by doing" companion to
the topic-by-topic report.
