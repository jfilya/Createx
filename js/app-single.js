$(function(){
    $('.bloges').slick({
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',
            infinite: true,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1, 
            responsive: [               
                {
                    breakpoint: 1281,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                    }
                  },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 769,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true
                  }
                },
                {
                  breakpoint: 501,
                  settings: {
                    dots:true,
                    slidesToShow: 1,
                    centerMode: true
                  }
                }
              ] 
    });

})





// с помощью панели разработчика смотрим , как называется класс со стрелками и точками и в css  исправляем так, как нам нужно