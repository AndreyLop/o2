var preloader = (function() {
  var canvas = document.querySelector('.myCanvas');
  var ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  console.log(devicePixelRatio);
  var ch = canvas.height,
  cw = canvas.width,
  innerCircleRadius = 100,
  outerCircleRadius = 120,
  progressStart = 0,
  progressStop = 2.1,
  percent,
  textXCoord = cw/2,
  textYCoord = ch/2 + 140,
  loadColor = '#bada55';

  function _drawInnerCircle() {
    ctx.beginPath();
    ctx.arc(cw/2, ch/2, innerCircleRadius, 0*Math.PI, 2*Math.PI);
    ctx.globalCompositeOperation="destination-out";
    ctx.fill();
  };

  function _drawProgressCircle() {
    //draw text
    // draw white rect over old text start
    ctx.fillStyle='#ffffff';
    ctx.fillRect(textXCoord-20, textYCoord - 15, 45, 20);
    // draw white rect over old text end

    // draw new tex start
    percent = ((progressStart/progressStop) * 100).toFixed();
    ctx.fillStyle = loadColor;
    ctx.font = "20px OpenSans";
    ctx.textAlign = 'center';
    ctx.fillText(percent+'%', textXCoord, textYCoord);
    // draw new tex start
    //draw text end

    // draw outer circle start
    ctx.strokeStyle = loadColor; 
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cw/2, ch/2, outerCircleRadius, 0*Math.PI, progressStart*Math.PI);
    ctx.globalCompositeOperation="source-over";
    ctx.stroke();
    progressStart+=0.01;
    // If fulle outer circle begin inner circle grow
    if(progressStart <= progressStop) {
      requestAnimationFrame(_drawProgressCircle);
    } else {
      _animateInnerCircleGrow();
    }
    // draw outer circle end
  };

  function _animateInnerCircleGrow() {
    _drawInnerCircle();
    innerCircleRadius+=3;
    if(innerCircleRadius < 1200) {
      requestAnimationFrame(_animateInnerCircleGrow);
    } else {
      canvas.style.display = 'none';
    }
  };

  function init() {
    sessionStorage.setItem('preloaderActivated', true);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, cw, ch);
    _drawInnerCircle();
    _drawProgressCircle();
  };

  return {
    init: init
  };

})();

preloader.init();