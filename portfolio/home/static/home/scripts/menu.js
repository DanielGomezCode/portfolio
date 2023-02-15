// Funcion para aparecer paleta de colores
var paleta = document.getElementsByClassName('color-title-btn')[0]
var paletaContainer = document.getElementsByClassName('title-colors')[0]

paleta.addEventListener('click', function(){
  paletaContainer.classList.toggle('active')
})


// Aparecer navbar 
var varBtn = document.getElementsByClassName('bars')[0]
var varbtnmovil = document.getElementsByClassName('bars-movil')[0]
var menu = document.getElementsByClassName('navbar')[0]
var inicioBar = document.getElementsByClassName('inicio')[0]
var complementosNav = document.getElementsByClassName('complementos')[0]

varBtn.addEventListener('click', function(){
  menu.classList.add('active')
  aboutContainer.classList.remove('active')
  experienceContainer.classList.remove('active')
  conocimientosContainer.classList.remove('active')
  serviciosContainer.classList.remove('active')
  inicioBar.classList.add('active')
  complementosNav.classList.add('active')
})

varBtn.addEventListener('dblclick', function(){
  alert('Debes seleccionar una seccion para poder continuar :)')
})

varbtnmovil.addEventListener('click', function(){
  menu.classList.add('active')
  serviciosContainer.classList.remove('active')
  aboutContainer.classList.remove('active')
  experienceContainer.classList.remove('active')
  conocimientosContainer.classList.remove('active')
  inicioBar.classList.add('active')
  complementosNav.classList.add('active')
})


// Funcion para que la musica funcione

var musicIcon = document.getElementsByClassName('off')[0]
var musicStop = document.getElementsByClassName('pause')[0]
var audio = document.getElementById("song");
var textoMusic = document.getElementsByClassName('text-song')[0]

musicIcon.addEventListener('click', function(){
   if(audio.paused) {
    audio.play();
    musicIcon.className = 'fa-solid fa-volume-high point change-color'
    textoMusic.textContent = 'Lo-fi Type Beat - Rain'

   } else {
     audio.currentTime = audio.duration;
     musicIcon.className = "fa-solid fa-volume-xmark point change-color off"
     textoMusic.textContent = 'Song Off - Please On'
   }
})

// Funcion para cambiar el color de los titulos

var btnBlue = document.getElementsByClassName('blue')[0]
var btnRed = document.getElementsByClassName('red')[0]
var btnYellow = document.getElementsByClassName('yellow')[0]
var btnGreen = document.getElementsByClassName('green')[0]
var btnAqua = document.getElementsByClassName('aqua')[0]
var btnOrange = document.getElementsByClassName('orange')[0]
var titleColors = document.getElementsByClassName('change-color')

btnBlue.addEventListener('click', function(){
  for (let i = 0; i < titleColors.length; i++) {
    titleColors[i].classList.add('blue')
    titleColors[i].classList.remove('yellow')
    titleColors[i].classList.remove('red')
    titleColors[i].classList.remove('green')
    titleColors[i].classList.remove('aqua')
    titleColors[i].classList.remove('orange')
  }
})
btnRed.addEventListener('click', function(){
  for (let i = 0; i < titleColors.length; i++) {
    titleColors[i].classList.add('red')
    titleColors[i].classList.remove('blue')
    titleColors[i].classList.remove('green')
    titleColors[i].classList.remove('yellow')
    titleColors[i].classList.remove('aqua')
    titleColors[i].classList.remove('orange')
  }
})
btnYellow.addEventListener('click', function(){
  for (let i = 0; i < titleColors.length; i++) {
    titleColors[i].classList.add('yellow')
    titleColors[i].classList.remove('blue')
    titleColors[i].classList.remove('green')
    titleColors[i].classList.remove('red')
    titleColors[i].classList.remove('aqua')
    titleColors[i].classList.remove('orange')
  }
})
btnGreen.addEventListener('click', function(){
  for (let i = 0; i < titleColors.length; i++) {
    titleColors[i].classList.add('green')
    titleColors[i].classList.remove('blue')
    titleColors[i].classList.remove('red')
    titleColors[i].classList.remove('yellow')
    titleColors[i].classList.remove('aqua')
    titleColors[i].classList.remove('orange')
  }
})
btnOrange.addEventListener('click', function(){
  for (let i = 0; i < titleColors.length; i++) {
    titleColors[i].classList.add('orange')
    titleColors[i].classList.remove('blue')
    titleColors[i].classList.remove('green')
    titleColors[i].classList.remove('yellow')
    titleColors[i].classList.remove('aqua')
    titleColors[i].classList.remove('red')
  }
})
btnAqua.addEventListener('click', function(){
  for (let i = 0; i < titleColors.length; i++) {
    titleColors[i].classList.add('aqua')
    titleColors[i].classList.remove('blue')
    titleColors[i].classList.remove('green')
    titleColors[i].classList.remove('yellow')
    titleColors[i].classList.remove('red')
    titleColors[i].classList.remove('orange')
  }
})

