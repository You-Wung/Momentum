const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const but = document.getElementById("btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	event.preventDefault();//default동작 차단
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
}

function paintGreetings(username) {
	greeting.innerText = "Welcome\n" + username;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

function butclicked() {
	const check = localStorage.getItem(USERNAME_KEY);
	if (check !== null)
	{
		localStorage.removeItem(USERNAME_KEY);
		greeting.classList.add(HIDDEN_CLASSNAME);
		loginInput.value = "";
		loginForm.classList.remove(HIDDEN_CLASSNAME);
	}
}

but.addEventListener("click", butclicked);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}