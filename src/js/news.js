var newsOpenSlider = (function() {

    var sliderItems = document.querySelectorAll('.news-open__image');
    var sliderContainer = $('.news-open__images')
    if(sliderItems.length > 1) {
        sliderContainer.slick({
            prevArrow: $('.news-open__slider_arrow-left'),
            nextArrow: $('.news-open__slider_arrow-right'),
        });
    }

})();