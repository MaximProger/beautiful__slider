$ (function() {

    // Slider https://kenwheeler.github.io/slick/

    /* Обработчик событий */
  
    $(window).on('load resize', function(){
      let win = $(this);
      if (win.width() >= 768) {
        $('#slider__wrap').slick({
          prevArrow: '<button class="slider__btn slider__btn--prev" type="button"><img src="./img/slider__btn--next.svg"></button>',
          nextArrow: '<button class="slider__btn slider__btn--next" type="button"><img src="./img/slider__btn--next.svg"></button>',
          arrows: true,
          dots: true,
          slidesPerRow: 3,
          rows: 2,
          responsive: [
          {
            breakpoint: 478,
            settings: {
            slidesPerRow: 1,
            rows: 1,
          }
          }
          ],
        });
      } else if (win.width() >= 320 && win.width() <= 768)  {
          $('#slider__wrap').slick({
              prevArrow: '<button class="slider__btn slider__btn--prev" type="button"><img src="./img/slider__btn--next.svg"></button>',
              nextArrow: '<button class="slider__btn slider__btn--next" type="button"><img src="./img/slider__btn--next.svg"></button>',
              arrows: true,
              dots: true,
              slidesPerRow: 2,
              rows: 2,
              responsive: [
              {
                breakpoint: 478,
                settings: {
                slidesPerRow: 1,
                rows: 1,
              }
              }
              ],
          });
      } else if (win.width() <= 320) {
          $('#slider__wrap').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,

          });
      }

    });

    /* Проверка на условие, при загрузки страницы */

    // let planWidth = $(window).innerWidth();
        
    // if (planWidth >= 768) {
    //   $('#slider__wrap').slick({
    //     prevArrow: '<button class="slider__btn slider__btn--prev" type="button"><img src="./img/slider__btn--next.svg"></button>',
    //     nextArrow: '<button class="slider__btn slider__btn--next" type="button"><img src="./img/slider__btn--next.svg"></button>',
    //     arrows: true,
    //     dots: true,
    //     slidesPerRow: 3,
    //     rows: 2,
    //     responsive: [
    //     {
    //       breakpoint: 478,
    //       settings: {
    //       slidesPerRow: 1,
    //       rows: 1,
    //     }
    //     }
    //     ],
    //   });
    // } else if (planWidth >= 320 && planWidth <= 768) {
    //   $('#slider__wrap').slick({
    //       prevArrow: '<button class="slider__btn slider__btn--prev" type="button"><img src="./img/slider__btn--next.svg"></button>',
    //       nextArrow: '<button class="slider__btn slider__btn--next" type="button"><img src="./img/slider__btn--next.svg"></button>',
    //       arrows: true,
    //       dots: true,
    //       slidesPerRow: 2,
    //       rows: 2,
    //       responsive: [
    //       {
    //         breakpoint: 478,
    //         settings: {
    //         slidesPerRow: 1,
    //         rows: 1,
    //       }
    //       }
    //       ],
    // });
    // } 
    // else if (win.width() <= 320) {
    //     $('#slider__wrap').slick({
    //       infinite: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       dots: true,
    //       arrows: false,

    //     });
    // }

});