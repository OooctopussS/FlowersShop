$(document).ready(function () {

  $("#review-1").on('click', function() {
     $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  });

  $("#review-2").on('click', function() {
    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  });
  
  $("#phone").mask("8 (999) 999-99-99");

    var rellax = new Rellax('.main', {
      breakpoints:[0, 768, 1700]
    });

  const flowersSlider = new Swiper('.main-shop-slider', {
    // Параметры
    loop: true,
    //Adaptive settings
      breakpoints: {
      // when window width is >=0px
      0: {
        slidesPerView: 1,
      },
      // when window width is >=342px
      342: {
        slidesPerView: 2,
      },
      // when window width is >= 769px
      601: {
        slidesPerView: 3,
      },
      // when window width is >= 828px
      828: {
        slidesPerView: 4,
      },
      // when window width is >= 1241px
      1241: {
        slidesPerView: 6,
      }
    },
    // Стрелки навигации
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const reviewsSlider = new Swiper('.bestflowers-slider', {
    // Параметры
    loop: true,
    slidesPerView: 1,
    // Стрелки навигации
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains("increase")) {
      ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("decrease")) {
      --e.target.parentElement.querySelector("input").value;
      if (e.target.parentElement.querySelector("input").value < 1){
        e.target.parentElement.querySelector("input").value = 1;
      }
    }
  });

  const cardsMore = document.querySelectorAll('.card-invise');
  document.addEventListener('click', function (e) {
    const cardCount = document.querySelectorAll('.card-invise');
    let cardsUp = document.querySelector('.items-more');
    if (e.target.classList.contains("items-more") && cardCount.length != 0) {
      for (let i = 0; i < cardsMore.length; i++){
        cardsMore[i].classList.remove('card-invise');
      }
      cardsUp.classList.remove('items-moredown');
      cardsUp.classList.add('items-moreup');
    }
    if (e.target.classList.contains("items-more") && cardCount.length == 0) {
      for (let i = 0; i < cardsMore.length; i++) {
        cardsMore[i].classList.add('card-invise');
      }
      cardsUp.classList.remove('items-moreup');
      cardsUp.classList.add('items-moredown');
    }
  });

  flowersSlider.keyboard.enable ();
  reviewsSlider.keyboard.enable ();
});

