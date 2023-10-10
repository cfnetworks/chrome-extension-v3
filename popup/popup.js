// add listener to send a message on click of button
document.addEventListener('DOMContentLoaded', function () {
	var replaceButton = document.getElementById('replace-button');
	replaceButton.addEventListener('click', function () {
		chrome.runtime.sendMessage({ replace: true });
	});
});