const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    effect:'coverflow',
    loop: true,
    loopedSlides: 8, 
    loopAdditionalSlides:1,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 3000,
    autoplay: {
      delay: 900,
      disableOnInteraction: false,
      waitForTransition:true,
    },

  

  });