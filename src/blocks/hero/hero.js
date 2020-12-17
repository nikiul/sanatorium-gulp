//hero
// $(document).ready(function(){
//     $("#owl-carousel__banner").owlCarousel({
//         margin: 10,
//         loop: true,
//         nav: true,
//         pagination: true,   
//         dots: true,
//         navText : ["",""],
//         responsiveClass:true,
//         responsiveBaseElement:"body",
//         responsive:{
//             0:{
//                 items:1.5
//             },
//             563: {
//                 items: 2,  
//             }
//         }
//     });
// });


// $(document).ready(function() {
//     function checkWidth() {
//       var windowWidth = $('body').innerWidth(),
//           elem = $(".banner__blocks-row"); 
//       if(windowWidth < 810){
//         elem.addClass('owl-carousel');
//         elem.addClass('owl-theme');
//         // elem.attr('id', 'owl-carousel__banner');
//       }
//       else{
//         elem.removeClass('owl-carousel');
//         elem.removeClass('owl-theme');
//         // elem.removeAttr('id', 'owl-carousel__banner');

//       }
//     }
  
//     checkWidth();
  
//     $(window).resize(function(){
//       checkWidth();
//     });
// });

if($(window).width() < 810){
    $(document).ready(function() {
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
                    items: 2  
                }
            }
        });
    });
};