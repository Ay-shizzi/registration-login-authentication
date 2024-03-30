// DOM elements
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("reg-btn");
const loginBtn = document.getElementById("login-btn");

// Error message elements
const firstNameError = document.getElementById("first-name_error");
const lastNameError = document.getElementById("last-name_error");
const emailError = document.getElementById("email_error");
const passwordError = document.getElementById("password_error");

// Regular expression for email validation
const mailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Function to handle registration
function handleRegistration() {
  const isValid =
    validateInput(firstNameInput, firstNameError) &&
    validateInput(lastNameInput, lastNameError) &&
    validateInput(emailInput, emailError, mailValid) &&
    validateInput(passwordInput, passwordError);

  if (isValid) {
    // Save inputs in local storage
    localStorage.setItem("firstName", firstNameInput.value.trim());
    localStorage.setItem("lastName", lastNameInput.value.trim());
    localStorage.setItem("email", emailInput.value.trim());
    localStorage.setItem("password", passwordInput.value.trim());

    alert("Registration successful!");
    console.log("Registration successful!");
    window.location.href = "login.html";
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

// Event listeners
registerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  handleRegistration();
});
