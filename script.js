

// Select the login form and input fields
const loginForm = document.querySelector('.login-form');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');

// Create error message elements
const usernameError = document.createElement('p');
const passwordError = document.createElement('p');

// Style error messages
usernameError.style.color = 'red';
usernameError.style.fontSize = '0.9em';
usernameError.style.margin = '5px 0';

passwordError.style.color = 'red';
passwordError.style.fontSize = '0.9em';
passwordError.style.margin = '5px 0';

// Append error messages to the form
usernameField.parentNode.insertBefore(usernameError, usernameField.nextSibling);
passwordField.parentNode.insertBefore(passwordError, passwordField.nextSibling);

// Listen for the form submission event
loginForm.addEventListener('submit', function (e) {
    let isValid = true;

    // Clear previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Validate username
    if (usernameField.value.trim() === '') {
        usernameError.textContent = 'Username cannot be empty.';
        isValid = false;
    }

    // Validate password
    if (passwordField.value.trim() === '') {
        passwordError.textContent = 'Password cannot be empty.';
        isValid = false;
    } else if (passwordField.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Prevent form submission if there are errors
    if (!isValid) {
        e.preventDefault();
    }
});

// Add a reset button functionality
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.type = 'button';
resetButton.style.marginTop = '10px';
loginForm.appendChild(resetButton);

resetButton.addEventListener('click', function () {
    // Clear input fields
    usernameField.value = '';
    passwordField.value = '';

    // Clear error messages
    usernameError.textContent = '';
    passwordError.textContent = '';
});

