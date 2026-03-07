document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  // Hide existing button initially
  existingBtn.style.display = "none";

  // Check localStorage on load
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  }

  // Handle form submit
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert("Logged in as " + username);

    if (checkbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "block";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }
  });

  // Existing user login
  existingBtn.addEventListener("click", function () {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      alert("Logged in as " + storedUser);
    }
  });

});