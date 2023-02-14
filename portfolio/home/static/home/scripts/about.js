// Aparecer About

var aboutContainer = document.getElementsByClassName('about')[0]
var closeAbout = document.getElementsByClassName('close-about')[0]
var btnAboutLink = document.getElementsByClassName('navbar__link__acerca')[0]

btnAboutLink.addEventListener('click', function(e){
    aboutContainer.classList.add('active')
    e.preventDefault()
})

closeAbout.addEventListener('click', function(e){
    aboutContainer.classList.remove('active')
    e.preventDefault()
})


// Cambio de imagenes
var imagenesAbout = ["static/home/img/about-img.png", "static/home/img/about-img-two.png", "static/home/img/about-img-three.png", "static/home/img/about-img-four.png"]
var contadorAbout = 0;

setInterval(changeImage, 3000);

function changeImage() {
  var image = document.getElementById("myImage");
  image.src = imagenesAbout[contadorAbout];
  contadorAbout = (contadorAbout + 1) % imagenesAbout.length;
}