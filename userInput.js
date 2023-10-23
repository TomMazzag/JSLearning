const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const submitButton = document.getElementById('submit-button');
const sidebar = document.getElementById('sidebar');
const form = document.getElementById('comment-form')

submitButton.addEventListener('click', ($event) => {
  $event.preventDefault(); // stops submit form from working normally (resets page usually)
  sidebar.textContent = 'Hi there, ' + firstNameInput.value + ' ' + lastNameInput.value;
  form.reset(); // reset the user input
});

