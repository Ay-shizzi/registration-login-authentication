// DOM elements
const returnBtn = document.getElementById("return-btn");

returnBtn.addEventListener("click", function (event) {
  event.preventDefault();
  resetForm();
});

// Function to reset form
function resetForm() {
  window.location.href = "index.html";

  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}
