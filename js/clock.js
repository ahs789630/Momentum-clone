const clock = document.querySelector('#clock');
function getClock(){
    clock.classList.remove(HIDDEN_CLASSNAME);
    const date = new Date;
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}`;
}

if(savedUsername === null) {
    clock.classList.add(HIDDEN_CLASSNAME);
}
else{
    getClock();
    setInterval(getClock, 1000);
}

  