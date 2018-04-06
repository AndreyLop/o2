var developerSlider = (function() {

    var sliderSelector = '.developer__slider';

    $(sliderSelector).slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        prevArrow: $('.developer__slider-arrow_left'),
        nextArrow: $('.developer__slider-arrow_right')
    });

})();