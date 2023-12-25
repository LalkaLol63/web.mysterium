let currentImageIndex = 0;
let popupBg = document.querySelector('.gallery-popup-bg');
let popup = document.querySelector('.popup');
let openPopupImages = document.querySelectorAll('.gallery-photo img');
let leftNavBtn = document.querySelector('.left-nav')
let rightNavBtn = document.querySelector('.right-nav')

const images = [
    'assets/img/gallery-photo1.png',
    'assets/img/gallery-photo2.png',
    'assets/img/gallery-photo3.png'
];

openPopupImages.forEach((image) => {
    image.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = image.getAttribute('src');
        document.querySelector('.popup-img').src = imgSrc;
        currentImageIndex = images.indexOf(imgSrc);
        popupBg.classList.add('active');
    })
});

leftNavBtn.addEventListener('click', (e) => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.querySelector('.popup-img').src = images[currentImageIndex];
});

rightNavBtn.addEventListener('click', (e) => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector('.popup-img').src = images[currentImageIndex];
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
    }
});