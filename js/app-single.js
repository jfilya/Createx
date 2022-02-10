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
                      slidesToScroll: 1
                    }
                  },
                {
                  breakpoint: 769,
                  settings: {
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

