// Aparecer Servicios
var serviciosContainer = document.getElementsByClassName('servicios')[0]
var closeservicios = document.getElementsByClassName('close-servicios')[0]
var btnserviciosLink = document.getElementsByClassName('navbar__link__servicios')[0]

btnserviciosLink.addEventListener('click', function(e){
    serviciosContainer.classList.add('active')
    menu.classList.remove('active')
    e.preventDefault()
})

closeservicios.addEventListener('click', function(e){
    serviciosContainer.classList.remove('active')
    menu.classList.add('active')
    e.preventDefault()
})

//mostrar contacto
var btnportCont = document.getElementsByClassName('servicio-btn-invitacion')[0]
var abrirCont = document.getElementsByClassName('contacto')[0]

btnportCont.addEventListener('click', function(e){
    abrirCont.classList.add('active')
    serviciosContainer.classList.remove('active')
    e.preventDefault()
})