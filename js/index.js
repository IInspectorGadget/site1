// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.materialboxed');
//     var instances = M.Materialbox.init(elems, {});
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.slider');
//     var instances = M.Slider.init(elems, {});
// });
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, {fullWidth: true,
//         indicators: true});
//   });

// $('.slider').slick();
new WOW().init();

$(document).ready(function(){
    $(".arrow").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 59.25;
            console.log(top)
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".right-side").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 59.25;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});





$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    focusOnSelect: false
  });
  $('.slider-nav').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });