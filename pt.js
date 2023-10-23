// Access DOM elements
const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');
const submitButton = document.getElementById('submit-button');

confirmPassword.addEventListener('blur', () => {
  if (passwordInput.value === confirmPassword.value) {
    submitButton.removeAttribute('disabled');
    passwordInput.style.border = 'thin solid green';
    confirmPassword.style.border = 'thin solid green';
    errorMsg.style.display = 'none';
  } else {
    submitButton.setAttribute('disabled', 'true');
    passwordInput.style.border = 'thin solid red';
    confirmPassword.style.border = 'thin solid red';
    errorMsg.style.display = 'inline';
  }
});