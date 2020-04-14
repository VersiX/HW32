$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        variableWidth: true,
        prevArrow: $("#larr"),
        nextArrow: $("#rarr"),
        initialSlide: 0,
        centerMode: true
    });
});




