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
    $('.shadow').toggleClass('body-shadow');
});

// лочим прокрутку сайта при активном десктопном/мобильном меню
$('.header__menu, .header__top-burger').click(function() {
    $('body').toggleClass('body__lock');
});
// разлочиваем прокрутку сайта при убраном десктопном/мобильном меню
$('.header__desctop-burger--wrapper, header__top-burger').click(function() {
    $('body').removeClass('body__lock');
});


// Выпадающий список в шапке
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
  
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
  
});
//infra
//hero
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
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

//nav
//room-fund
//sanatorium-progs
//small-banner
//under-hero