$(document).ready(function(){
    var heroCarousel = $("#owl-carousel__banner");
    var aboutCarousel = $("#owl-carousel__about-sanatorium");
    var offerCarousel = $("#offers-block-slider");
    var fundCarousel = $(".owl-carousel__room-fund");
    // HERO CAROUSEL
    function heroCarouselInit() {
        if($('body').children(heroCarousel) && $(window).width() < 810){
            heroCarousel.owlCarousel({
                margin: 10,
                loop: true,
                nav: true,
                pagination: true,   
                dots: true,
                navText : ["",""],
                responsiveClass:true,
                responsiveBaseElement:"body",
                responsive:{
                    0:{
                        items:1.1
                    },
                    563: {
                        items: 2  
                    }
                }
            });
        }else{
            heroCarousel.trigger('destroy.owl.carousel')
        }; 
    };

    //ABOUT CAROUSEL
    function aboutCarouselInit() {
        if($('body').children(aboutCarousel) && $(window).width() < 810){
            aboutCarousel.owlCarousel({
                margin: 10,
                loop: true,
                nav: true,
                pagination: true,   
                dots: true,
                navText : ["",""],
                responsiveClass:true,
                responsiveBaseElement:"body",
                responsive:{
                    0:{
                        items:1.1
                    },
                    563: {
                        items: 2  
                    }
                }
            });
        } else {
            aboutCarousel.trigger('destroy.owl.carousel');
        }
    };

    //OFFER CAROUSEL
    function offerCarouselInit() {
        if($('body').children(offerCarousel) && $(window).width() < 810){
            offerCarousel.owlCarousel({
                margin: 10,
                loop: true,
                nav: true,
                pagination: true,   
                dots: true,
                navText : ["",""],
                responsiveClass:true,
                responsiveBaseElement:"body",
                responsive:{
                    0:{
                        items:1.1
                    },
                    563: {
                        items: 2  
                    }
                }
            });
        } else {
            offerCarousel.trigger('destroy.owl.carousel');
        }
    };

    //section room-fund
    function fundCarouselInit() {
        if($('body').children(fundCarousel) && $(window).width() <= 600){
            fundCarousel.owlCarousel({
                margin: 10,
                loop: true,
                nav: true,
                pagination: true,   
                dots: true,
                navText : ["",""],
                responsiveClass:true,
                responsiveBaseElement:"body",
                responsive:{
                    0:{
                        items:1.1
                    },
                    563: {
                        items: 2  
                    }
                }
            });
        } else {
            fundCarousel.trigger('destroy.owl.carousel');
        }
    };


    heroCarouselInit();
    aboutCarouselInit();
    offerCarouselInit()
    fundCarouselInit()
    $(window).resize(function(){
        heroCarouselInit();
        aboutCarouselInit();
        offerCarouselInit()
        fundCarouselInit()
    });
}); 