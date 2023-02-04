const loginInput = document.querySelector("#login-Form input");
const loginForm= document.querySelector("#login-Form");
const greeting = document.querySelector("#greeting");

const HIDDENCLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit() {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDENCLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintingGreetings(username);
}


function paintingGreetings(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDENCLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); 

if (savedUsername === null) {
    loginForm.classList.remove(HIDDENCLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintingGreetings(savedUsername);
}

