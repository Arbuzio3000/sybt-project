$('.header__link').click( function() {
    $('.header__link')
        .removeClass('active')
    $(this)
        .addClass('active')
});


$('.promo__btn').hover( function() {
    $(this)
        .addClass('promo__btn_active').siblings().removeClass('promo__btn_active')
});

/* ---- particles.js config  настройка сетки на promo---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 150,
      },
      "color": {
        "value": "#2E80FE"
      },
      "shape": {
        "type": "circle",
      },
      "opacity": {
        "value": 0.5,
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#D9D9D9",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
      }
    },

  });
  

  //изменение header при скролле

  $(window).scroll(function(){
		if($(this).scrollTop()>650){
			$('.header').addClass('scroll');
      $('.header__link').addClass('scroll');
		} else{
      $('.header').removeClass('scroll');
			$('.header__link').removeClass('scroll');
		}
	});


  //настройка слайдера

  const swiper_services = new Swiper('.services__slider', {
    // Optional parameters
    direction: 'horizontal',
    autoHeight: true,
    loop: false,
    slidesPerView: 3,
    spaceBetween: 25,

    // Navigation arrows
    navigation: {
      nextEl: '.services__slider-button-next',
      prevEl: '.services__slider-button-prev',
    },

    // If we need pagination
    pagination: {
      el: '#services__swiper',
      clickable: true,
    },

    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });

  const swiper_portfolio = new Swiper('.portfolio__slider', {
    // Optional parameters
    direction: 'horizontal',

    autoHeight: true,
    autoplay: {
      delay: 2000,
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 25, 

    // If we need pagination
    pagination: {
      el: '#portfolio__swiper',
      clickable: true,
    },

    
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });

  const swiper_testimonials = new Swiper('.testimonials__slider', {
    // Optional parameters
    direction: 'horizontal',
    breakpointsBase: 'container',
    centeredSlides: true,
    initialSlide: 2,

    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 25, 
  });


  $("a[href^='#']").click(function() {
    const href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
