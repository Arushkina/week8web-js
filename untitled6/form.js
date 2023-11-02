document.addEventListener('DOMContentLoaded', function() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const registerButton = document.getElementById('registerButton');
  const warningMessage = document.getElementById('warning');
  const successMessage = document.getElementById('successMessage');

  function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (username === '' || password === '' || confirmPassword === '') {
      registerButton.disabled = true;
      warningMessage.textContent = 'Please fill in all fields.';
    } else if (password !== confirmPassword) {
      registerButton.disabled = true;
      warningMessage.textContent = 'Passwords do not match.';
    } else {
      registerButton.disabled = false;
      warningMessage.textContent = '';
    }
  }

  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (username === '' || password === '' || confirmPassword === '') {
      warningMessage.textContent = 'Please fill in all fields.';
      return;
    }

    if (password !== confirmPassword) {
      warningMessage.textContent = 'Passwords do not match.';
      return;
    }

    successMessage.textContent = 'Registration successful!';
  });

  usernameInput.addEventListener('input', validateForm);
  passwordInput.addEventListener('input', validateForm);
  confirmPasswordInput.addEventListener('input', validateForm);
});
