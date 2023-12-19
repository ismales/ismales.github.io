import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  // autoHeight: true,

  breakpoints: {
    320: {
      slidesPerView: 1.12,
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
