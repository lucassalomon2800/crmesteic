// main.js

// Get elements
const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');
const closeButton = document.getElementById('closeButton');

// Show the login form when the login button is clicked
loginButton.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
});

// Hide the login form when the close button is clicked
closeButton.addEventListener('click', () => {
  loginForm.classList.add('hidden');
});
