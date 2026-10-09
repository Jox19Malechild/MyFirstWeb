/* ==========================================================
   script.js - Activity 3 interactive features
   1. Contact form validation and preview (compulsory)
   2. Theme switch (light / dark)
   3. Gallery viewer (Previous / Next)
   4. Expandable project details
   ========================================================== */

/* ---------- 1. CONTACT FORM VALIDATION AND PREVIEW ---------- */

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const topicInput = document.getElementById("topic");
const messageInput = document.getElementById("message");
const preview = document.getElementById("form-preview");

// Simple email pattern: text, @, text, dot, text (no spaces)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Shows (or clears) an error message next to a field
function showError(input, message) {
  const errorBox = document.getElementById(input.id + "-error");
  errorBox.textContent = message;
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

// Checks all three fields. Returns true only when everything is valid.
function validateForm() {
  let valid = true;

  // trim() removes spaces, so a whitespace-only value becomes empty
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Please enter your name. Spaces alone are not accepted.");
    valid = false;
  } else {
    showError(nameInput, "");
  }

  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email, for example name@example.com.");
    valid = false;
  } else {
    showError(emailInput, "");
  }

  if (messageInput.value.trim() === "") {
    showError(messageInput, "Please write a message. Spaces alone are not accepted.");
    valid = false;
  } else {
    showError(messageInput, "");
  }

  return valid;
}

// Fills the preview box using textContent (safe for user-typed text)
function showPreview() {
  document.getElementById("preview-status").textContent =
    "Your details were validated in the browser. No message was sent.";
  document.getElementById("preview-name").textContent = nameInput.value.trim();
  document.getElementById("preview-email").textContent = emailInput.value.trim();
  document.getElementById("preview-topic").textContent = topicInput.value;
  document.getElementById("preview-message").textContent = messageInput.value.trim();
  preview.hidden = false;
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // keep everything local, no page reload
  if (validateForm()) {
    showPreview();
  } else {
    preview.hidden = true; // hide an old preview when the form is invalid
  }
});


/* ---------- 2. THEME SWITCH ---------- */

const themeButton = document.getElementById("theme-toggle");

// Applies "light" or "dark" and updates the button text and state
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const isDark = theme === "dark";
  themeButton.textContent = isDark ? "Light mode" : "Dark mode";
  themeButton.setAttribute("aria-pressed", String(isDark));
}

// Load the saved choice if there is one (saving is optional, so errors are ignored)
let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("theme") || "light";
} catch (error) {
  savedTheme = "light";
}
applyTheme(savedTheme);

themeButton.addEventListener("click", function () {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (error) {
    /* storage not available, the theme still works for this visit */
  }
});


/* ---------- 3. GALLERY VIEWER ---------- */

// Array of photos: file, alt text and caption for each one
const photos = [
  {
    src: "images/jox.jpg",
    alt: "Jacques wearing a black cap and a cream T-shirt, standing next to a dark car and holding his cap with both hands",
    caption: "Photo 1: Me, Jacques, adjusting my cap on a relaxed day outside."
  },
  {
    src: "images/Kabunda.png",
    alt: "Jacques in a cream T-shirt with a yellow logo, standing under a blue shade next to a car with his hands by his sides",
    caption: "Photo 2: A relaxed portrait of me standing under a blue shade."
  },
  {
    src: "images/Project1.png",
    alt: "Jacques in a white football jersey and denim shorts, stepping playfully outside a building with large glass windows",
    caption: "Photo 3: Me in my football jersey, having fun outside a building."
  }
];

let currentPhoto = 0;

const viewerImg = document.getElementById("viewer-img");
const viewerCaption = document.getElementById("viewer-caption");
const viewerCount = document.getElementById("viewer-count");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

// Shows the photo at the current position and handles the first and last photo
function showPhoto() {
  const photo = photos[currentPhoto];
  viewerImg.src = photo.src;
  viewerImg.alt = photo.alt;
  viewerCaption.textContent = photo.caption;
  viewerCount.textContent = "Photo " + (currentPhoto + 1) + " of " + photos.length;
  prevButton.disabled = currentPhoto === 0;                 // first photo: no Previous
  nextButton.disabled = currentPhoto === photos.length - 1; // last photo: no Next
}

prevButton.addEventListener("click", function () {
  if (currentPhoto > 0) {
    currentPhoto--;
    showPhoto();
  }
});

nextButton.addEventListener("click", function () {
  if (currentPhoto < photos.length - 1) {
    currentPhoto++;
    showPhoto();
  }
});

showPhoto();


/* ---------- 4. EXPANDABLE PROJECT DETAILS ---------- */

const toggleButtons = document.querySelectorAll(".toggle-btn");

// Opens or closes the details that belong to one button
function toggleDetails(button) {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  button.textContent = isOpen ? "Show details" : "Hide details";
  panel.hidden = isOpen;
}

toggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    toggleDetails(button);
  });
});