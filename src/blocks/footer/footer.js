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