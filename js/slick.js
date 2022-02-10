$(function(){
    $('.eventcard').slick({

            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1, 
            centerPadding: '40px',
            prevArrow: '.arrow-left',
            nextArrow: '.arrow-right',

            responsive: [               
                {
                    breakpoint: 1281,
                    settings: {

                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                  },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 769,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 501,
                  settings: {
                    dots:true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ] 
    });
})
