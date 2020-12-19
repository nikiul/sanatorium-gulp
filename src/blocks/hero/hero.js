var heroCarousel = $("#owl-carousel__banner");
var aboutCarousel = $("#owl-carousel__about-sanatorium");
// HERO CAROUSEL
function heroCarouselInit() {
    if($(window).children(heroCarousel) && $(window).width() < 810){
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
    if($(window).children(heroCarousel) && $(window).width() < 810){
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

$(document).ready(function(){
    heroCarouselInit();
    aboutCarouselInit();
    $(window).resize(function(){
        heroCarouselInit();
        aboutCarouselInit();
    })
}); 