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