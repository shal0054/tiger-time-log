document.addEventListener('DOMContentLoaded', addEventListeners);

let dateP;

function addEventListeners() {
	dateP = document.getElementById('current-date');
	timeP = document.getElementById('current-time');

	const date = new Date(Date.now());

	dateP.innerHTML = date.toDateString();

	const dt = new Date();

	const time = dt.toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	});

	timeP.innerHTML = time;
}
