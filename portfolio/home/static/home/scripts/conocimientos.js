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
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    500: {
      slidesPerView: 2 // Tendre 3 cajas hasta que el n de pixeles sea menos de 768
    },
    769: {
      slidesPerView: 3 // Tendre 3 cajas hasta que el n de pixeles sea menos de 768
    },
    1020: {
      slidesPerView: 4
    },
    1220: {
      slidesPerView: 5
    },
  },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
