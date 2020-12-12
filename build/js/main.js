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

//fix hover element on mobile
let allEl = document.querySelectorAll('*')
for(let i = 0; i < allEl.length; i++){
  allEl.ontouchstart = () => this.mouseover()
  allEl.ontouchcancel = () => this.mouseover()
};

//Проверка поддержки WEBP
function check_webp_feature(feature, callback) {
  var kTestImages = {
      lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
      lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
      alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
      animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
  };
  var img = new Image();
  img.onload = function () {
      var result = (img.width > 0) && (img.height > 0);
      callback(feature, result);
  };
  img.onerror = () => callback(feature, false);
  img.src = "data:image/webp;base64," + kTestImages[feature];
};
//Если браузер поддерживает WEBP, то добавляем класс тегу body
check_webp_feature('lossy', function (feature, isSupported) {
  isSupported ? document.body.classList.add('webp-support-js') : document.body.classList.add('webp-nosupport-js')
});

// Перекрашивание средней полоски в бургер меню при наведении на header__menu
var bg = document.getElementById('menu-icon-line');
document.getElementById('header__menu').addEventListener("mouseover", function(){bg.style.background = "#006CB5";this.addEventListener("mouseout", function(){bg.style.background = "";});
});

// бургер в десктопном меню
const desctopBtn = document.querySelector('.header__menu');
const desctopBtn2 = document.querySelector('.header__desctop-burger--wrapper');
const desctopmenuIcon = document.querySelector('.header__desctop-burger__menu-icon');
const desctopMenu = document.querySelector('.header__desctop-menu');

// Клик по кнопке для скрытия / показа фильтра и изменения  иконки
desctopBtn.onclick = function(){
    desctopmenuIcon.classList.toggle('header__desctop-menu--active');
    desctopMenu.classList.toggle('header__side-menu--active');
};
desctopBtn2.onclick = function(){
    desctopmenuIcon.classList.toggle('header__desctop-menu--active');
    desctopMenu.classList.toggle('header__side-menu--active');
};

// бургер в сайдбаре
const sidebarToggleBtn = document.querySelector('.header__top-burger--wrapper');
const menuIcon = document.querySelector('.header__top-burger__menu-icon');
const sidebar = document.querySelector('.header__side-menu');

// Клик по кнопке для скрытия / показа фильтра и изменения  иконки
sidebarToggleBtn.onclick = function(){
    menuIcon.classList.toggle('header__top-burger__menu-icon--active');
    sidebar.classList.toggle('header__side-menu--active');
};

// добавляем Тень при активном боковом меню
$('.header__top-burger').click(function() {
    $('.header__side-menu').toggleClass('body-shadow');
});

// лочим прокрутку сайта при активном десктопном/мобильном меню
$('.header__menu, .header__top-burger').click(function() {
    $('body').toggleClass('body__lock');
});
// разлочиваем прокрутку сайта при убраном десктопном/мобильном меню
$('.header__desctop-burger--wrapper, header__top-burger').click(function() {
    $('body').removeClass('body__lock');
});

// выпадающий список в шапке и сайдбаре
var tel = $(".tel");
var telList = $('.tel__list');
var telBtn = $('.tel-btn');
var telCurrent = $('.tel-current__link');

telBtn.click(function(e){
	telList.fadeToggle();
});

telList.on('click', '.tel__item', function(){
	var th = $(this);
	var thText = th.text();
	telCurrent
		.text(thText)
		.attr('href', 'tel:'+thText+'');
		telList.fadeOut();
});

$(document).mouseup(function (e){
	if (!tel.is(e.target)
			&& tel.has(e.target).length === 0) {
		telList.fadeOut(); // скрываем его
	}
});

// скролл шапки
window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 160) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}
//hero
$(document).ready(function(){
    $("#owl-carousel__banner").owlCarousel({
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