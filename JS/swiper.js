const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slideToClickedSlide: true,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
            slideToClickedSlide: true,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 0,
            slideToClickedSlide: true,
        }
    },
    speed: 3000,
    autoplay: {
        enabled: true,
        delay: 4000,
    },
});