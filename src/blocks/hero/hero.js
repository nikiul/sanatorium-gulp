var heroCarousel = $("#owl-carousel__banner");
function heroCarouselInit() {
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
};
$(document).ready(function(){
    if($(window).width() < 810){
        heroCarouselInit()
    };
    $(window).resize(function(){
        if($(window).width() < 810){
            heroCarouselInit()
        }else{
            heroCarousel.trigger('destroy.owl.carousel')
        };  
    })
});