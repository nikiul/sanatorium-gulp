
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

$('.header__top-burger').click(function(){
    $(this).find('.header__top-burger__menu-icon').toggleClass('header__top-burger__menu-icon--active');
    $('.header__sub--wrapper').toggleClass('is-active')
})

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

// Конец фиксация шапки при скролле