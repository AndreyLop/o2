// Main page scroll listener and frames add animation start
var animateHTMLCtrl = (function() {
    var aniamteClass = 'animate-me',
    elems = document.querySelectorAll('.animate-me'),
    windowHeight = window.innerHeight,
    animatedElements;
  
    var init = function() {
        _addEventHandlers();
    }

    // if to more elements to animate remove event listener from scroll
    function _checkForAnimatedElements() {
        if(elems.length === 0 ) {
            window.removeEventListener('scroll', _checkPosition);
        }
    }
  
    function _addEventHandlers() {
      window.addEventListener('scroll', _checkPosition);
      window.addEventListener('resize', debounce(init, 100));
    }
  
    function _checkPosition() {
    windowHeight = window.innerHeight;
      for (var i = 0; i < elems.length; i++) {
        var posFromTop = elems[i].getBoundingClientRect().top;
        if (posFromTop - windowHeight <= 0) {
          elems[i].classList.remove(aniamteClass);
        }
      }
      _checkForAnimatedElements();
    }
    _checkPosition();
    return {
      init: init
    }
  
  })();

animateHTMLCtrl.init();
// end animateHTMLCtrl


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



    // var bezier = MorphSVGPlugin.pathDataToBezier("#move_path", {offsetX: -MARKER.width, offsetY: -MARKER.height});


    // function check(obj, i, ev) {
    //     var xDiff = obj.x - (ev.offsetX - MARKER.width);
    //     var yDiff = (ev.offsetY - MARKER.height) - obj.y;
    //     if(xDiff >= -4 && xDiff <= 4 && yDiff >=-4 && xDiff <= 4) {
    //         console.log(i);
    //     }
    // }

    // var copyBezier = bezier.concat();
    // for(var i = 0; i < bezier.length; i++) {
    //     var xDiff = bezier[i].x - (e.offsetX - MARKER.width);
    //     var yDiff = (e.offsetY - MARKER.height) - bezier[i].y;
    //     if(xDiff >= -3 && xDiff <= 3 && yDiff >=-3 && xDiff <= 3) {
    //         copyBezier.splice(i+1);
    //         break;
    //     }
    // }
    // TweenLite.to("#svg-nav__marker", 2, {bezier:{values:copyBezier}});

})();
// main page svg navigation end


// main page tabs start
(function() {

    var activeTabClass = 'contacts__tab_active';
    var hiddenTabContentClas = 'contacts__tab-content__hidden';

    var NODES = {
        cTabs:document.querySelector('.contacts__tabs'),  
        cTab: document.querySelectorAll('.contacts__tab'),
        cTabContent: document.querySelectorAll('.contacts__tab-content')
    };

    function removeActiveClassFromTabs() {
        Array.prototype.forEach.call(NODES.cTab, function(node) {
            node.classList.remove(activeTabClass);
        });
    };

    function hideTabsContent() {
        Array.prototype.forEach.call(NODES.cTabContent, function(node) {
            node.classList.add(hiddenTabContentClas);
        });
    };

    NODES.cTabs.addEventListener('click', function(e) {
        if(Array.prototype.indexOf.call(e.target.classList)!==1) {
            removeActiveClassFromTabs();
            hideTabsContent();
            e.target.classList.add(activeTabClass);
            document.getElementById(e.target.dataset.tab).classList.remove(hiddenTabContentClas);
        };
    });

})();
// main page tabs end

// bottom sliders start
(function() {
    $('.advantages__slider').slick({
        prevArrow: $('.advantages-slider_arrows .slider_arrow-left'),
        nextArrow: $('.advantages-slider_arrows .slider_arrow-right'),
        dots: true,
        customPaging : function(slider, i) {
            return '<span class="advantages__slider-dot"><span>';
        }
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
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
})();
// bottom sliders end