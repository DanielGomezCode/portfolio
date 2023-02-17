// Aparecer About

var portafolioContainer = document.getElementsByClassName('portafolio')[0]
var closeportafolio = document.getElementsByClassName('close-portafolio')[0]
var btnportafolioLink = document.getElementsByClassName('navbar__link__portafolio')[0]

btnportafolioLink.addEventListener('click', function(e){
    portafolioContainer.classList.add('active')
    e.preventDefault()
})

closeportafolio.addEventListener('click', function(e){
    portafolioContainer.classList.remove('active')
    e.preventDefault()
})

// Carrusel Principal

const images = document.querySelectorAll('.portfolio-sup-img img');
let currentImageIndex = 0;
const timeInterval = 3000;

function nextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(nextImage, timeInterval);