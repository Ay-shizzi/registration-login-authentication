// DOM elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

// Error message elements
const emailError = document.getElementById("email_error");
const passwordError = document.getElementById("password_error");

// Regular expression for email validation
const mailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Function to handle login
function handleLogin() {
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");
  const enteredEmail = emailInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  if (storedEmail === enteredEmail && storedPassword === enteredPassword) {
    alert("Login successful!");
    window.location.href = "welcomepage.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

// Function to validate input
function validateInput(inputElement, errorElement, regex = null) {
  const inputValue = inputElement.value.trim();
  if (!inputValue) {
    errorElement.style.display = "block";
    return false;
  } else if (regex && !inputValue.match(regex)) {
    errorElement.style.display = "block";
    return false;
  } else {
    errorElement.style.display = "none";
    return true;
  }
}

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  handleLogin();
});
