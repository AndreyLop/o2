// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
  };
  
};

var sliderSelector = '.suka';
var slideBars = $('.slide-bar');
var slideCircle = $('.slide-circle');

$(sliderSelector).slick({
  arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false
});
fillActiveSlideBars(0);
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
