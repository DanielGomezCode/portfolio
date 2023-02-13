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