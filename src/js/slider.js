new Swiper(".blog__list", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    speed: 700,
    breakpoints: {
        320: {
            spaceBetween: 8,
        },
        768: {
            spaceBetween: 32,
        }
    }

});

var swiperContainer = document.querySelector('.swiper-wrapper');
swiperContainer.addEventListener('transitionEnd', function() { 
  var activeSlide = swiperContainer.querySelector('.swiper-slide-active'); 
  activeSlide.style.transform = 'scale(1)'; 
});
swiperContainer.addEventListener('transitionStart', function() { 
  var prevSlide = swiperContainer.querySelector('.swiper-slide-prev'); 
  prevSlide.style.transform = 'scale(0.8)'; 
});