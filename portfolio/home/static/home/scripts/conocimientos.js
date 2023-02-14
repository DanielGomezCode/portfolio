// Aparecer conocimientos
var conocimientosContainer = document.getElementsByClassName('conocimientos')[0]
var closeconocimientos = document.getElementsByClassName('close-conocimientos')[0]
var btnconocimientosLink = document.getElementsByClassName('about-right-btn')[0]

btnconocimientosLink.addEventListener('click', function(e){
    aboutContainer.classList.remove('active')
    conocimientosContainer.classList.add('active')
    e.preventDefault()
})

closeconocimientos.addEventListener('click', function(e){
    conocimientosContainer.classList.remove('active')
    e.preventDefault()
})




// Primer Slider (lenguajes)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });