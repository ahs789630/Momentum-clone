const imges =[
    '0.jpg',
    '1.jpg',
    '2.jpg'
];

const todaysImages = imges[Math.floor(Math.random()*imges.length)];

const bgImage = document.createElement('img');
bgImage.className = 'bgi'
bgImage.src= `img/${todaysImages}`;
document.body.appendChild(bgImage);
document.querySelector(".body").style.background = bgImage.src;
