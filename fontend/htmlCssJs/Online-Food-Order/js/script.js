const swiper = new Swiper('.mySwiper', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },
  // Adding a default slice per view helps visibility
  slidesPerView: 1,
});