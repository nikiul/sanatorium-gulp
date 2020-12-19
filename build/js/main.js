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
//START footer
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
//END footer
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
        $(this).find('.header__top-burger__menu-icon').toggleClass('header__top-burger__menu-icon--active');
        $('.header__sub--wrapper').toggleClass('is-active')
    });

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
}

// 
$(document).ready(function(){
    $("#owl-carousel__room-fund").owlCarousel({
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
                items:1.5
            },
            563: {
                items: 2,  
            }
        }
    });
  });
//sanatorium-progs
//section-activity
//section-discount
//section-feedback
//small-banner
//under-hero