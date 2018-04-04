
var di2 = (function() {


    var sliderSelector = '.di2__slider';
    var slideBars = $('.slide-bar');
    var slideCircle = $('.slide-circle');
    // var slidesCount = $('.di2__slider-item:last-child');
    // console.log(slidesCount)

    $(sliderSelector).slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        infinite: false
    });

    fillActiveSlideBars(0);

    hideScrollBar();

    function fillActiveSlideBars(numb) {
        for(var i = 0; i < slideBars.length; i++) {
            if(parseInt($(slideBars[i]).data('slide')) < numb) {
            $(slideBars[i]).addClass('slide-bar-active');
            $(slideBars[i]).removeClass('slide-bar-last');
            } else {
            $(slideBars[i]).removeClass('slide-bar-active');
            $(slideBars[i]).removeClass('slide-bar-last');
            }
        }
        $('.slide-bar[data-slide="' + numb + '"]').addClass('slide-bar-last');
    }

    $(sliderSelector).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        fillActiveSlideBars(nextSlide);
        
        if(nextSlide+1 === slick.slideCount) {
            showScrollBar();
        } else {
            $(document).scrollTop(0, 0)
            hideScrollBar();
        }
      });

      
      $(slideCircle).on('click', function() {
        $(sliderSelector).slick('slickGoTo', $(this).parent().data('slide'));
      })


      
      function showNextSlide(e) {
        if(e.originalEvent.wheelDelta /120 > 0) {
          $(sliderSelector).slick('slickPrev');
        }else{
          $(sliderSelector).slick('slickNext');
        }
      }


      
      $(document).bind('mousewheel', debounce(showNextSlide));

})();

