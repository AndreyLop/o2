// main page svg navigation start
(function() {

    var NODES = {
        circles: document.querySelectorAll('.svg-nav__circle'),
        texts: document.querySelectorAll('.svg__text'),
        activeItem: document.querySelector('.svg-nav__selected'),
        svgNavItems: document.querySelectorAll('.svg-nav__item')
    };

    var SELECTORS = {
        svgNavItem: 'svg-nav__item',
        svgNavSelected: 'svg-nav__selected',
        heroSlider: '.hero__slider'
    }

    var topSlider = $(SELECTORS.heroSlider).slick({
        arrows: false,
        fade: true,
        autoplay: true
    });

    topSlider.on('afterChange', function(e, slick, slide) {
        changeMarkerPositionBySlider(slide);
    });

    function changeMarkerPositionBySlider(slide) {
        Array.prototype.forEach.call(NODES.svgNavItems, function(item) {
            if(item.dataset.slide == slide) {
                NODES.activeItem.classList.remove(SELECTORS.svgNavSelected);
                item.classList.add(SELECTORS.svgNavSelected);
                NODES.activeItem = item;
            }
        });
    }

    function changeMarkerPositionClick(e) {
        var parent = e.target.parentNode;

        if(Array.prototype.indexOf.call(parent.classList, SELECTORS.svgNavItem) === -1 ) {
            parent = parent.parentNode;
        }

        if(Array.prototype.indexOf.call(parent.classList, SELECTORS.svgNavSelected) === -1) {
            NODES.activeItem.classList.remove(SELECTORS.svgNavSelected);
            parent.classList.add(SELECTORS.svgNavSelected);
            NODES.activeItem = parent;
        }

        topSlider.slick('slickGoTo', parseInt(parent.dataset.slide));
        if(e.type === 'click') {
            e.preventDefault();
        }
    };
    
    Array.prototype.forEach.call(NODES.circles, function(circle) {
        circle.addEventListener('click', changeMarkerPositionClick);
    });

    Array.prototype.forEach.call(NODES.texts, function(text) {
        text.addEventListener('click', changeMarkerPositionClick);
    });

})();
// main page svg navigation end


// bottom sliders start
(function() {
    $('.advantages__slider').slick({
        prevArrow: $('.advantages-slider_arrows .slider_arrow-left'),
        nextArrow: $('.advantages-slider_arrows .slider_arrow-right'),
        dots: true,
        customPaging : function(slider, i) {
            return '<span class="advantages__slider-dot"><span>';
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            }
        ]
    });
    $('.values__slider').slick({
        prevArrow: $('.values-slider_arrows .slider_arrow-left'),
        nextArrow: $('.values-slider_arrows .slider_arrow-right')
    });
    $('.projects__slider').slick({
        slidesToShow: 5,
        prevArrow: $('.projects-slider_arrows .slider_arrow-left'),
        nextArrow: $('.projects-slider_arrows .slider_arrow-right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
})();
// bottom sliders end