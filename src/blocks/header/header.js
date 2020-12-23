//header start
$(document).ready(function(){
    // десктопное меню
    $('.header__menu').click(function(){
        $('.header__desctop-menu').addClass('header__side-menu--active');
        $('body').addClass('body__lock');
    });
    $('.header__desctop-burger--wrapper').click(function(){
        $('.header__desctop-menu').removeClass('header__side-menu--active');
        $('body').removeClass('body__lock');
    });
    
    // мобильное меню
    $('.header__top-burger').click(function(){
        $('.header__sub--wrapper').addClass('is-active')
        $('body').addClass('body__lock');
    });
    $('.header__sub-close').click(function(){
        $('.header__sub--wrapper').removeClass('is-active');
        $('body').removeClass('body__lock');
    })

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