$(function () {
    $('.banner_slider').owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 500,
        autoplayHoverPause: true,
        // autoWidth:true,
        nav: true,
        navText: ['<a  class="arrow_lf"><i class="fa-solid fa-chevron-left"></i></a>', '<a  class="arrow_rt"><i class="fa-solid fa-chevron-right"></i></a>'],
        responsive: {
            0: {
                items: 1,
            }
        }
    })
});