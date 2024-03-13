document.addEventListener('DOMContentLoaded', addEventListeners);

function addEventListeners() {
	document
		.getElementById('login-btn')
		.addEventListener('click', handleLoginClick);
	document
		.getElementById('passwordPrepend')
		.addEventListener('click', toggleHidePassword);

	// Listen for resize events
	window.addEventListener('resize', checkScreenSize);
}

function handleLoginClick(ev) {
	ev.preventDefault();
	ev.stopPropagation();

	const { username, password } = getLoginValues();

	console.log(username, password);
	let baseUrl = window.location.href;
	window.location.href = baseUrl += 'main.html';
	console.log(baseUrl);
}

function getLoginValues() {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	return { username, password };
}

function toggleHidePassword(ev) {
	const passwordField = document.getElementById('password');
	const passwordIcon = document.getElementById('password-icon');

	if (passwordField.type === 'password') {
		passwordField.type = 'text';
		passwordIcon.classList.add('bi-eye');
		passwordIcon.classList.remove('bi-eye-slash');
	} else {
		passwordField.type = 'password';
		passwordIcon.classList.add('bi-eye-slash');
		passwordIcon.classList.remove('bi-eye');
	}
}

///////////////////////////////////////

// Function to check the screen size and add the appropriate class
function checkScreenSize() {
	const usernameDiv = document.getElementById('username-input-div');
	const screenWidth = window.innerWidth;

	// Add class based on screen width
	if (screenWidth > 500) {
		usernameDiv.classList.add('input-group');
	} else {
		usernameDiv.classList.remove('input-group');
	}
}

// Call the function initially to set the correct class
checkScreenSize();
