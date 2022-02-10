$(function(){
    $('.card-content').slick({
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1, 
            responsive: [               
                {
                    breakpoint: 1281,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  },
                {
                  breakpoint: 769,
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 501,
                  settings: {
                    dots:true,
                    slidesToShow: 1
                  }
                }
              ] 
    });

})

