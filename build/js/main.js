//START footer
$(document).ready(function(){

  $("footer .title-nav-section").on('click', function () {
    if ($(window).width() <= 1200) {
      $(this).toggleClass('open');
      $(this).next().slideToggle();
    }
  });
  
  $(window).resize(function () {
    if ($(window).width() > 1200) {
      $("footer .title-nav-section").removeClass('open');
      $("footer .title-nav-section").next().fadeIn(0);
    }
  });
});
//END footer
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
//bread-crumbs
//fund
//gallery
$(document).ready(function(){
  var gallery360 = $('.gallery-360');
  if($('body').children(gallery360)){
    gallery360.owlCarousel({
        // margin: 30,
        loop: true,
        nav: true,
        pagination: true,   
        dots: false,
        navContainer: ".gallery-360__nav",
        navText : ["",""],
        responsiveClass:true,
        responsiveBaseElement:"body",
        responsive:{
            0:{
                items:1.1
            },
            563: {
                items: 2  
            },
            960: {
                items: 4  
            }
        }
    });
  };
  $('.gallery-360__item').magnificPopup({
    type: 'image',
    gallery:{
      enabled: true
    }
  });
})
//End gallery
//header start
$(document).ready(function(){
    // десктопное меню
    $('.header__menu').click(function(){
        $('.header__desctop-menu').addClass('header__side-menu--active');
    });
    $('.header__desctop-burger--wrapper').click(function(){
        $('.header__desctop-menu').removeClass('header__side-menu--active');
    });
    
    // мобильное меню
    $('.header__top-burger').click(function(){
        $('.header__sub--wrapper').addClass('is-active')
    });
    $('.header__sub-close').click(function(){
        $('.header__sub--wrapper').removeClass('is-active');
    })

    // лочим прокрутку сайта при активном десктопном/мобильном меню
    $('.header__menu, .header__top-burger').click(function() {
        $('body').toggleClass('body__lock');
    });
    // разлочиваем прокрутку сайта при убраном десктопном/мобильном меню
    $('.header__desctop-burger--wrapper, header__top-burger').click(function() {
        $('body').removeClass('body__lock');
    });

    // выпадающий список телефонов в шапке и сайдбаре
    var tel = $(".tel");
    var telList = $('.tel__list');
    var telBtn = $('.tel-btn');
    var telCurrent = $('.tel-current__link');

    telBtn.click(function(e){
        telList.fadeToggle();
        $(this).toggleClass('isactive')
    });

    telList.on('click', '.tel__item', function(){
        var th = $(this);
        var thText = th.text();
        telCurrent
        .text(thText)
        .attr('href', 'tel:'+thText+'');
        telList.fadeOut();
        telBtn.removeClass('isactive');
    });

    $(document).mouseup(function (e){
        if (!tel.is(e.target)
        && tel.has(e.target).length === 0) {
            telList.fadeOut();
            telBtn.removeClass('isactive');
        }
    });

    // фиксация шапки при скролле

    var	sticky = $('.header__sub--wrapper')
        pos = sticky.offset().top,
        win = $(window);

    win.on("scroll", function() {
        if(win.width() > 960){
            if(win.scrollTop() >= pos){
                $('.header').addClass("fixed");
            } else {
                $('.header').removeClass("fixed");
            }
        }
    });
});

//header end
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
//infra
jQuery(($) => {

    $(".infrastructure-item .title-item").on('click', function () {


        if ($(this).parent().hasClass('open')) {
            $(".infrastructure-item").removeClass('open');
            $(".infrastructure-item .about-item").fadeOut(0);
            $(this).parent().removeClass('open');
            $(this).next().fadeOut(0);

        } else {
            $(".infrastructure-item").removeClass('open');
            $(".infrastructure-item .about-item").fadeOut(0);
            $(this).parent().addClass('open');
            $(this).next().fadeIn();
        }

    });

});
//nav
//room-fund
function openRoom(evt, buildingNumber) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(buildingNumber).style.display = "block";
    evt.currentTarget.className += " active";
};

//sanatorium-progs
//section-activity
//section-advantages
//section-discount
//section-feedback

//section-room
jQuery(($) => {
  $('.room-card-gallery, .room-card-gallery-mobile').magnificPopup({
      delegate: 'a',
      type: 'image',
      // tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      }
  });

  $('.room-card-gallery-mobile').slick({
      dots: true,
  });

  $('.section-room-card .about-room-section .btn-blue').on('click', function () {
      let idParent = $(this).parent().attr('id');
      $(this).parent().children('.d-none').slideToggle();

      if ($(this).text().indexOf("Свернуть") >= 0) {
          switch (idParent) {
              case 'service':
                  $(this).text('Полный список услуг');
                  break;
              case 'comfort':
                  $(this).text('Показать все удобства: 15');
                  break;
              case 'documents':
                  $(this).text('Полный перечень документов');
                  break;
              case 'comfortService':
                  $(this).text('Показать все сервисы: 12');
                  break;
          }
      } else {
          switch (idParent) {
              case 'service':
                  $(this).text('Свернуть список услуг');
                  break;
              case 'comfort':
                  $(this).text('Свернуть список удобств');
                  break;
              case 'documents':
                  $(this).text('Свернуть список документов');
                  break;
              case 'comfortService':
                  $(this).text('Свернуть список сервисов');
                  break;
          }
      }
  });
});
//End section-room
 
//section-special-offres
//small-banner
//under-hero