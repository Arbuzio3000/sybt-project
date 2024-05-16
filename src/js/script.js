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

/* ---- particles.js config ---- */

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
  
  
  /* ---- stats.js config ---- */
  
  