const API_KEY = '582cfae98505df2d5fce44b49cf21f70';

function onGeoOk(position){
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    console.log('you live in ',lat,lng);
    const url  = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=kr&units=Metric` 
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector('#weather span:first-child');
        const weather = document.querySelector('#weather span:last-child');
        city.innerText =data.name ;
        weather.innerText =` ${data.main.temp}C\n${data.weather[0].main}`;
    });
}
function onGeoError(){
    alert('Can\'t find you. ')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);