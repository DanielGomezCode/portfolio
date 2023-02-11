// Funcion para que la musica funcione

var musicIcon = document.getElementsByClassName('off')[0]
var musicStop = document.getElementsByClassName('pause')[0]
var audio = document.getElementById("song");
var textoMusic = document.getElementsByClassName('moving-text')[0]

musicIcon.addEventListener('click', function(){
   if(audio.paused) {
    audio.play();
    musicIcon.className = 'fa-solid fa-volume-high'
    textoMusic.textContent = 'Lo-fi Type Beat - Rain'

   } else {
     audio.currentTime = audio.duration;
     musicIcon.className = "fa-solid fa-volume-xmark off"
     textoMusic.textContent = 'Musica Desactivada'
   }
})

