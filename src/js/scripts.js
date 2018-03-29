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
// end debounce

// Before/After main page slider start
(function() {

    function drags(dragElement, resizeElement, container) {
	
        // Initialize the dragging event on mousedown.
        dragElement.on('mousedown touchstart', function(e) {
          
          dragElement.addClass('draggable');
          resizeElement.addClass('resizable');
          
          // Check if it's a mouse or touch event and pass along the correct value
          var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
          
          // Get the initial position
          var dragWidth = dragElement.outerWidth(),
              posX = dragElement.offset().left + dragWidth - startX,
              containerOffset = container.offset().left,
              containerWidth = container.outerWidth();
       
          // Set limits
          minLeft = containerOffset + 10;
          maxLeft = containerOffset + containerWidth - dragWidth - 10;
          
          // Calculate the dragging distance on mousemove.
          dragElement.parents().on("mousemove touchmove", function(e) {
              
            // Check if it's a mouse or touch event and pass along the correct value
            var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
            
            leftValue = moveX + posX - dragWidth;
            
            // Prevent going off limits
            if ( leftValue < minLeft) {
              leftValue = minLeft;
            } else if (leftValue > maxLeft) {
              leftValue = maxLeft;
            }
            
            // Translate the handle's left value to masked divs width.
            widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
                  
            // Set the new values for the slider and the handle. 
            // Bind mouseup events to stop dragging.
            $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
              $(this).removeClass('draggable');
              resizeElement.removeClass('resizable');
            });
            $('.resizable').css('width', widthValue);
          }).on('mouseup touchend touchcancel', function(){
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
          });
          e.preventDefault();
        }).on('mouseup touchend touchcancel', function(e){
          dragElement.removeClass('draggable');
          resizeElement.removeClass('resizable');
        });
      }
      
      // Call & init
      $(document).ready(function(){
        $('.ba-slider').each(function(){
          var cur = $(this);
          // Adjust the slider
          var width = cur.width()+'px';
          cur.find('.resize img').css('width', width);
          // Bind dragging events
          drags(cur.find('.handle'), cur.find('.resize'), cur);
        });
      });
      
      // Update sliders on resize.
      $(window).resize(function(){
        $('.ba-slider').each(function(){
          var cur = $(this);
          var width = cur.width()+'px';
          cur.find('.resize img').css('width', width);
        });
      });

})();
// Before/After main page slider end

// Main page scroll listener and frames add animation start
var animateHTMLCtrl = (function () {
  var elems, windowHeight;
  var init = function () {
    elems = document.getElementsByClassName('hidden__frame')
    windowHeight = window.innerHeight;
    _addEventHandlers();
    _checkPosition();
  };
  function _addEventHandlers() {
    window.addEventListener('scroll', debounce(_checkPosition, 100));
    window.addEventListener('resize', debounce(init, 100));
  };
  function _checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var posFromTop = elems[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('hidden__frame', 'fade-in__frame')
      }
    }
  }

  return {
    init: init
  }
})();
// end animateHTMLCtrl
animateHTMLCtrl.init()
// Main page scroll listener and frames add animation start