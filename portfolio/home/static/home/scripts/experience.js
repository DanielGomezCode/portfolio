// Aparecer Experience



var experienceContainer = document.getElementsByClassName('experience')[0]
var closeExperience = document.getElementsByClassName('close-experience')[0]
var btnExperienceLink = document.getElementsByClassName('open-experience')[0]

btnExperienceLink.addEventListener('click', function(e){
    aboutContainer.classList.remove('active')
    experienceContainer.classList.add('active')
    e.preventDefault()
})

closeExperience.addEventListener('click', function(e){
    experienceContainer.classList.remove('active')
    e.preventDefault()
})