function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  if (username === "" || password === "" || confirm_password === "") {
    alert("All fields are required");
    return false;
  }

  if (password !== confirm_password) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}

function enableButton() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  var registerButton = document.getElementById("registerButton");

  if (username !== "" && password !== "" && confirm_password !== "") {
    registerButton.disabled = false;
  } else {
    registerButton.disabled = true;
  }
}

function displaySuccessMessage() {
  alert("User registered successfully!");
}
