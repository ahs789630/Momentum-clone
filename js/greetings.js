const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const logoutForm = document.querySelector('#logout-form');
const wrapperLogin = document.querySelector('.wrapper-login');
const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY ='username';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    paintGreetings();
    paintQuotes();
    getClock();
    toDo();
    setInterval(getClock, 1000);
}

function onLogoutSubmit() {
    localStorage.removeItem(USERNAME_KEY);
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    wrapperLogin.classList.add(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}
else{
    paintGreetings(); 
}
logoutForm.addEventListener('submit',onLogoutSubmit);    