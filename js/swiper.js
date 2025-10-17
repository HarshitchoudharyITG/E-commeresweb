   var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });


      var swiper = new Swiper(".mySwiper1", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });


     var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });



       const slides = document.querySelectorAll('.swiper-slide1');
    let index = 0;

    document.getElementById('next').addEventListener('click', () => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    });

    document.getElementById('prev').addEventListener('click', () => {
      slides[index].classList.remove('active');
      index = (index - 1 + slides.length) % slides.length;
      slides[index].classList.add('active');
    });


    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 10000);