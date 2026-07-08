/* =========================================================
   MODULE 16: Web Security Basics for JS Developers
   Topics: XSS, CSRF, CORS - what they are and how to avoid them
   ========================================================= */

// ---------------------------------------------------------
// 1) Cross-Site Scripting (XSS)
// XSS happens when untrusted user input is inserted into the
// page as HTML, letting an attacker run their own <script>.
// ---------------------------------------------------------

const userComment = "<img src=x onerror=alert('hacked!')>";

// VULNERABLE - innerHTML executes any HTML/script it's given
// document.getElementById("comments").innerHTML = userComment; // DON'T DO THIS

// SAFE - textContent inserts the string as plain text, not HTML
function renderCommentSafely(container, text) {
  container.textContent = text; // browser escapes it automatically
}

// If you DO need to render HTML from user input, sanitize it first
// (e.g. with a library like DOMPurify) before using innerHTML.

// ---------------------------------------------------------
// 2) Cross-Site Request Forgery (CSRF)
// CSRF tricks a logged-in user's browser into submitting a
// request to another site without their consent.
// Mitigation: CSRF tokens - a unique, secret token embedded in
// forms/requests that the server validates on each write request.
// ---------------------------------------------------------

async function submitFormWithCsrfToken(csrfToken, data) {
  return fetch("/api/update-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken, // server rejects the request without a valid token
    },
    body: JSON.stringify(data),
  });
}

// ---------------------------------------------------------
// 3) Cross-Origin Resource Sharing (CORS)
// By default browsers block JS on one origin (domain/port) from
// reading responses from a different origin, unless the SERVER
// explicitly allows it via response headers.
// ---------------------------------------------------------

// Example of what an Express server sends to allow a specific origin:
// res.setHeader("Access-Control-Allow-Origin", "https://my-frontend.com");
// res.setHeader("Access-Control-Allow-Methods", "GET, POST");

// Key takeaway: never expose API keys/secrets in frontend JS code -
// anything shipped to the browser is visible to the user.

module.exports = {};
