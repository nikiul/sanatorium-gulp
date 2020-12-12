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

$(document).ready(function(){
  $("#owl-carousel__about-sanatorium").owlCarousel({
      margin: 10,
      loop: true,
      nav: true,
      pagination: true,   
      dots: true,
      navText : ["",""],
      responsiveClass:true,
      responsiveBaseElement:"body",
      responsive:{
          0: {
              item:1.05
          },
          320:{
              items:1.5
          },
          604: {
              items: 2,  
          }
      }
  });
});