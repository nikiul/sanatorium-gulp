//about-sanatorium
$(document).on('click','.js-videoPoster',function(e) {
  //отменяем стандартное действие button
  e.preventDefault();
  var poster = $(this);
  // ищем родителя ближайшего по классу
  var wrapper = poster.closest('.js-videoWrapper');
  videoPlay(wrapper);
});

//вопроизводим видео, при этом скрывая постер
function videoPlay(wrapper) {
  var iframe = wrapper.find('.js-videoIframe');
  // Берем ссылку видео из data
  var src = iframe.data('src');
  // скрываем постер
  wrapper.addClass('videoWrapperActive');
  // подставляем в src параметр из data
  iframe.attr('src',src);
};

var aboutCarousel = $("#owl-carousel__about-sanatorium");
function aboutCarouselInit() {
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
};
$(document).ready(function(){
    if($(window).width() < 810){
      aboutCarouselInit()
    };
    $(window).resize(function(){
        if($(window).width() < 810){
          aboutCarouselInit()
        }else{
          aboutCarousel.trigger('destroy.owl.carousel')
        };  
    })
});