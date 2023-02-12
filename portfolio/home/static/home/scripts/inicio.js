// Escritura

var text = document.querySelector('.inicio__escritura-profesion')


var textLoad = () => {
    setTimeout(() => {
        text.textContent = "Desarrollador";
    }, 0)
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 4300)
    setTimeout(() => {
        text.textContent = "Full-stack";
    }, 8300)
}

textLoad()
setInterval(textLoad, 12300)

// Contador
var tecnologiasNumero = document.getElementsByClassName('one')[0]
var experienciaNumero = document.getElementsByClassName('two')[0]
var proyectosNumero = document.getElementsByClassName('three')[0]


var indice = cantidadFacebook = 0, Ycantidad = 0, Tcantidad = 0, tiempo = 2001;

var tiempo1 = setInterval(() => {
    tecnologiasNumero.textContent = (cantidadFacebook += 1);

    if(cantidadFacebook=== 20){
        clearInterval(tiempo1)
    }
}, 50)

var tiempo2 = setInterval(() => {
    experienciaNumero.textContent = (Ycantidad += 1);

    if(Ycantidad === 2){
        clearInterval(tiempo2)
    }
}, 50)

var tiempo3 = setInterval(() => {
    proyectosNumero.textContent = (Tcantidad += 1);

    if(Tcantidad === 10){
        clearInterval(tiempo3)
    }
}, 50)

$(document).ready(function () {
    // Fakes the loading setting a timeout
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 1500);
  });
  