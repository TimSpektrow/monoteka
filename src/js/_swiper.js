const heroSwiper = new Swiper('.hero__swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.hero__swiper-button-next',
    prevEl: '.hero__swiper-button-prev',
  },
});

const categorySwiper = new Swiper('.category-swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 1,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
   breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1500: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
});




const offersSwiper = new Swiper('.offers__swiper', {
  spaceBetween: 20,
  pagination: {
    el: '.offers__swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.offers__swiper-button-next',
    prevEl: '.offers__swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
