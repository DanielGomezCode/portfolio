// Aparecer Servicios
var serviciosContainer = document.getElementsByClassName('servicios')[0]
var closeservicios = document.getElementsByClassName('close-servicios')[0]
var btnserviciosLink = document.getElementsByClassName('navbar__link__servicios')[0]

btnserviciosLink.addEventListener('click', function(e){
    serviciosContainer.classList.add('active')
    e.preventDefault()
})

closeservicios.addEventListener('click', function(e){
    serviciosContainer.classList.remove('active')
    e.preventDefault()
})

