// document.addEventListener('DOMContentLoaded', init);

// function init() {}

function addEventListener() {
	document
		.getElementById('login-btn')
		.addEventListener('click', handleLoginClick);
	document
		.getElementById('passwordPrepend')
		.addEventListener('click', toggleHidePassword);
}

function handleLoginClick(ev) {
	ev.preventDefault();
	ev.stopPropagation();

	const { username, password } = getLoginValues();

	console.log(username, password);
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
