$(function(){
    $('.eventcard').slick({

            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1, 
            variableWidth: true,
            prevArrow: '.arrow-left>',
            nextArrow: '.arrow-right>',

            responsive: [
                
                {
                    breakpoint: 1280,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                    }
                  },
                // {
                //   breakpoint: 1024,
                //   settings: {
                //     slidesToShow: 3,
                //     slidesToScroll: 3,
                //     infinite: true,
                //     dots: true
                //   }
                // },
                // {
                //   breakpoint: 600,
                //   settings: {
                //     slidesToShow: 2,
                //     slidesToScroll: 2
                //   }
                // },
                // {
                //   breakpoint: 480,
                //   settings: {
                //     slidesToShow: 1,
                //     slidesToScroll: 1
                //   }
                // }

              ] 
    });
    

})
