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
    },

    effect: 'coverflow',
    coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    depth: 50,
    scale: 0.8,
  },
});