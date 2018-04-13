var developerSlider = (function() {

    var sliderSelector = '.developer__slider';

    $(sliderSelector).slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        prevArrow: $('.developer__slider-arrow_left'),
        nextArrow: $('.developer__slider-arrow_right'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

})();