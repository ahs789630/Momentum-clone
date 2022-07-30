const imges =[
    '0.jpeg',
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    '5.jpeg',
];

const todaysImages = imges[Math.floor(Math.random()*imges.length)];

const bgImage = document.createElement('img');
bgImage.className = 'bgi'
bgImage.src= `img/${todaysImages}`;
document.body.appendChild(bgImage);
document.querySelector("body").style.background = bgImage.src;
