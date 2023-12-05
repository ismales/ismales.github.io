const swiper = new Swiper(".swiper", {
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    500: {
      enabled: false,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
