var preloader = (function() {

  var NODES = {
    preloader: document.querySelector('.preloader'),
    loadOuterCircle: document.querySelector('.preloader__loading-circlce'),
    loadInnerCircle: document.querySelector('.preloader__inner-circle'),
    percents: document.querySelector('.preloader__loading-percents')
  };

  var offset = NODES.loadOuterCircle.getTotalLength();
  var startingRadius = parseInt(NODES.loadInnerCircle.getAttribute('r'));
  NODES.loadOuterCircle.style.strokeDasharray = offset;
  NODES.loadOuterCircle.style.strokeDashoffset = offset;
  var currentDashOffset;
  var outerStep = 6;
  var innerStep = 6;

  function _hidePreloader() {
    NODES.preloader.style.display = 'none';
  };

  // Hide outer circle and percents
  function _hideOuterCircle() {
    NODES.loadOuterCircle.style.display = 'none';
    NODES.percents.style.display = 'none';
  };

  function _calculatePerncets() {
    var perc = 100 - ((currentDashOffset / offset) * 100).toFixed();
    NODES.percents.innerHTML = perc + '%';
  };

  function _animatePreloaderOuterCircle() {
    currentDashOffset = NODES.loadOuterCircle.style.strokeDashoffset
    if( currentDashOffset >= 0) {
      requestAnimationFrame(_animatePreloaderOuterCircle);
      NODES.loadOuterCircle.style.strokeDashoffset-=outerStep;
      _calculatePerncets();
    } else {
      // hide outer circle and percents and start frowing inner
      _hideOuterCircle();
      _animatePreloaderInnerCircle();
    }
  };

  function _animatePreloaderInnerCircle() {
    if(startingRadius <= 1900) {
      startingRadius+=innerStep;
      requestAnimationFrame(_animatePreloaderInnerCircle);
      NODES.loadInnerCircle.setAttribute('r','' + startingRadius);
    } else {
      // remove preloader here
      _hidePreloader();
    }
  };

  function init() {
    sessionStorage.setItem('preloaderActivated', true);
    _animatePreloaderOuterCircle();
  };

  return {
    init: init
  };

})();

  preloader.init();


// TweenLite.to(loadCircle, 5, 
//   {
//     css: {strokeDashoffset: 0}, 
//     onUpdateParams:["{self}"], 
//     onUpdate:function(tl) {
//   // tl references {self} which is the timeline
//     var tlp = tl.progress() * 100 >> 0;
//     percents.innerHTML = tlp + '%';
//   }
// });
