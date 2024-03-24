document.addEventListener('DOMContentLoaded', addEventListeners);

function addEventListeners() {
	const dateP = document.getElementById('current-date');
	const hoursP = document.getElementById('current-hours');
	const minutesP = document.getElementById('current-minutes');

	const date = new Date(Date.now());

	dateP.innerHTML = date.toDateString();

	function updateTime() {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();
		// Format the string with leading zeroes
		const hoursStr = `${hours.toString().padStart(2, '0')}`;
		const minuitesStr = `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`;

		hoursP.innerText = hoursStr;
		minutesP.innerText = minuitesStr;
	}
	updateTime();
	setInterval(updateTime, 1000);
}
