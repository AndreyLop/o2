var langMenu=(function(){
    var navLangItems=document.querySelectorAll(".nav__item-lang");

    Array.prototype.forEach.call(navLangItems, function(item) {
        item.addEventListener("click",function(e){
            e.preventDefault(),
            this.classList.contains("nav__item-lang_opened") 
            ? this.classList.remove("nav__item-lang_opened")
            : this.classList.add("nav__item-lang_opened")
        });
    });
    
    })();

//fix nav during scroll down
var navFixed = (function(){ 
    var header = document.querySelector('.header-container');
    var fixed = header.offsetTop;
    function isScrolled() {
        if(window.pageYOffset > fixed) {
            header.classList.add('header__fixed');
        } else {
            header.classList.remove('header__fixed');
        }
    };
    window.addEventListener('scroll' ,debounce(isScrolled,100));
})();

//tabs start
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

    if(NODES.cTabs) {
        NODES.cTabs.addEventListener('click', function(e) {
            if(Array.prototype.indexOf.call(e.target.classList)!==1) {
                removeActiveClassFromTabs();
                hideTabsContent();
                e.target.classList.add(activeTabClass);
                document.getElementById(e.target.dataset.tab).classList.remove(hiddenTabContentClas);
            };
        });
    }
    
})();
//tabs end


//main drop down menu
var dropDownMenu = (function() {

    var showMenuBtn = document.querySelector('.nav__item_menu');
    var hideMenuBtn = document.querySelector('.menu__close-btn');
    var menu = document.querySelector('.menu');

    function showMenu() {                
        if(menu.classList.contains('menu_closed')) {
            menu.classList.remove('menu_closed');
        }
    };

    // this one hides menu by addng class and shows scrollbar
    function hideMenu(){
        menu.classList.add('menu_closed');
        document.removeEventListener('click', outsideClickListener);
        showScrollBar();
    };

    // this listener checks if click was outside menu or on close menu btn
    function outsideClickListener(event) {
        if(!menu.contains(event.target)  
        && !event.target.classList.contains('nav__item_menu')
        && !event.target.parentNode.classList.contains('nav__item_menu')
        && !event.target.parentNode.parentNode.classList.contains('nav__item_menu')) {
            hideMenu();
        }
    }

    // show menu on click and add event listener to hide outside menu
    showMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showMenu();
        document.addEventListener('click', outsideClickListener);
        hideScrollBar();
    });

    hideMenuBtn.addEventListener('click', function() {
        hideMenu();
    });
})();

//preloader logic start
var preloader = (function() {

    var NODES = {
      preloader: document.querySelector('.preloader'),
      loadOuterCircle: document.querySelector('.preloader__loading-circlce'),
      loadInnerCircle: document.querySelector('.preloader__inner-circle'),
      percents: document.querySelector('.preloader__loading-percents'),
      contentMask: document.querySelector('.preloader__logo-content-mask'),
      logo: document.querySelector('.preloader__logo')
    };
  
    var offset = NODES.loadOuterCircle.getTotalLength();
    var startingRadius = parseInt(NODES.loadInnerCircle.getAttribute('r'));
    NODES.loadOuterCircle.style.strokeDasharray = offset;
    NODES.loadOuterCircle.style.strokeDashoffset = offset;
    
    var finalRadius = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight;

    var currentDashOffset = parseInt(NODES.loadOuterCircle.style.strokeDashoffset);

    //how fast loading circle moves
    var outerStep = 6;
    //how fast inner circle grows
    var innerStep = 20;
    var maskOpacity = parseFloat(NODES.contentMask.style.opacity);
    //how fast opacity on green mask reduced
    var maskRevealStep = 0.01;
    var logoOpacity = 1;
    //how fast opacity on logo reduced
    var hideLogoStep = 0.012;
  
    function _hidePreloader() {
      NODES.preloader.style.display = 'none';
    };

    function _showPreloader() {
        NODES.preloader.style.display = 'block';
    }

    function _hideGreenContentMaks() {
        NODES.contentMask.display = 'none;'
    }
  
    // Hide outer circle and percents
    function _hideOuterCircle() {
      NODES.loadOuterCircle.style.display = 'none';
      NODES.percents.style.display = 'none';
    };
  
    function _calculatePerncets() {
      var perc = 100 - ((currentDashOffset / offset) * 100).toFixed();
      NODES.percents.innerHTML = perc + '%';
    };
  
    function _animatePreloaderOuterCircle(e) {
        console.log(e)
      currentDashOffset-=outerStep
      if( currentDashOffset >= 0) {
        NODES.loadOuterCircle.style.strokeDashoffset=currentDashOffset;
        requestAnimationFrame(_animatePreloaderOuterCircle);
        _calculatePerncets();
      } else {
        // hide outer circle and percents and start frowing inner
        _hideOuterCircle();
        _animatePreloaderInnerCircle();
      }
    };
  
    function _animatePreloaderInnerCircle() {
      if(startingRadius <= finalRadius + 300) {
        startingRadius+=innerStep;
        maskOpacity-=maskRevealStep;
        logoOpacity-=hideLogoStep;
        requestAnimationFrame(_animatePreloaderInnerCircle);
        //increase circle radius
        NODES.loadInnerCircle.setAttribute('r',startingRadius);
        //remove opacity from mask
        NODES.contentMask.style.opacity = maskOpacity;
        //remove opacity from logo
        NODES.logo.style.opacity = logoOpacity;
      } else {
        // remove preloader here
        _hidePreloader();
        showScrollBar();
      }
    };
  
    function init() {
        hideScrollBar();
        _showPreloader();
        sessionStorage.setItem('preloaderActivated', true);
        _animatePreloaderOuterCircle();
    };
  
    return {
      init: init,
      hidePreloader: _hidePreloader
    };
  
  })();

if(!sessionStorage.getItem('preloaderActivated')) {
    preloader.init();
}
//preloader.init();
//preloader logick end

 
// var preloader2 = (function() {
//     var canvas = document.querySelector('.myCanvas');
//     var greenOverlay = document.querySelector('.canvas__green-overlay');
//     var ctx = canvas.getContext('2d');
  
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
  
//     var ch = canvas.height,
//     cw = canvas.width,
//     innerCircleRadius = 100,
//     outerCircleRadius = 120,
//     progressStart = 0,
//     progressStop = 2.1,
//     percent,
//     textXCoord = cw/2,
//     textYCoord = ch/2 + 140,
//     greenOverlayOpacity = 0.8,
//     greenOverlayOpacityStep = 0.01;
//     loadColor = '#568752';
  
//     function _drawInnerCircle() {
//       ctx.beginPath();
//       ctx.arc(cw/2, ch/2, innerCircleRadius, 0*Math.PI, 2*Math.PI);
//       ctx.globalCompositeOperation="destination-out";
//       ctx.fill();
//     };
  
//     function _drawProgressCircle(e) {
//         console.log(e);
//       //draw text
//       //draw white rect over old text start
//       ctx.fillStyle='#ffffff';
//       ctx.fillRect(textXCoord-20, textYCoord - 15, 45, 20);
//       //draw white rect over old text end
  
//       //draw new text start
//       percent = ((progressStart/progressStop) * 100).toFixed();
//       ctx.fillStyle = loadColor;
//       ctx.font = "20px OpenSans";
//       ctx.textAlign = 'center';
//       ctx.fillText(percent+'%', textXCoord, textYCoord);
//       //draw text end
  
//       // draw outer circle start
//       ctx.lineWidth = 1;
//       ctx.strokeStyle = '#ffffff'; 
//       ctx.beginPath();
//       ctx.arc(cw/2, ch/2, outerCircleRadius, 0*Math.PI, 2*Math.PI);
//       ctx.stroke();
//       ctx.strokeStyle = loadColor; 
//       ctx.beginPath();
//       ctx.arc(cw/2, ch/2, outerCircleRadius, 0*Math.PI, progressStart*Math.PI);
//       ctx.globalCompositeOperation="source-over";
//       ctx.stroke();
//       progressStart+=0.01;
//       // If fulle outer circle begin inner circle grow
//       if(progressStart <= progressStop) {
//         requestAnimationFrame(_drawProgressCircle);
//       } else {
//         _animateInnerCircleGrow();
//       }
//       // draw outer circle end
//     };
  
//     function _animateInnerCircleGrow() {
//       _drawInnerCircle();
//       greenOverlayOpacity-=greenOverlayOpacityStep;
//       greenOverlay.style.opacity = greenOverlayOpacity;
//       innerCircleRadius+=10;
//       if(innerCircleRadius < 1200) {
//         requestAnimationFrame(_animateInnerCircleGrow);
//       } else {
//         canvas.style.display = 'none';
//         greenOverlay.style.display = 'none';
//       }
//     };
  
//     function init() {
//       sessionStorage.setItem('preloaderActivated', true);
//       ctx.fillStyle = "#ffffff";
//       ctx.fillRect(0, 0, cw, ch);
//       _drawInnerCircle();
//       _drawProgressCircle();
//     };
  
//     return {
//       init: init
//     };
  
//   })();
  
//   preloader2.init();