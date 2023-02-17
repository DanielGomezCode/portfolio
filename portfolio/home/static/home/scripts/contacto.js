// Aparecer Contacto

var contactoContainer = document.getElementsByClassName('contacto')[0]
var closecontacto = document.getElementsByClassName('close-contacto')[0]
var btncontactoLink = document.getElementsByClassName('navbar__link__contacto')[0]

btncontactoLink.addEventListener('click', function(e){
    contactoContainer.classList.add('active')
    menu.classList.remove('active')
    e.preventDefault()
})

closecontacto.addEventListener('click', function(e){
    contactoContainer.classList.remove('active')
    e.preventDefault()
})
