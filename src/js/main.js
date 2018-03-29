// main oage svg navigation start

(function() {

    var NODES = {
        circles: document.querySelectorAll('.svg-nav__circle'),
        texts: document.querySelectorAll('.svg__text'),
        marker: document.querySelector('.svg-nav__marker')
    };

    var MARKER = {
        width: NODES.marker.getBoundingClientRect().width,
        height: NODES.marker.getBoundingClientRect().height
    };

    var bezier = MorphSVGPlugin.pathDataToBezier("#move_path", {offsetX: -MARKER.width, offsetY: -MARKER.height});
    console.log(bezier)

    Array.prototype.forEach.call(NODES.circles, function(circle) {
        circle.addEventListener('click', function(e) {
            console.log(e.offsetX - MARKER.width, e.offsetY - MARKER.height);
            TweenLite.to("#svg-nav__marker", 2, {bezier:{values:bezier}});
        });
    });

    Array.prototype.forEach.call(NODES.texts, function(text) {
        text.addEventListener('click', function(e) {
            console.log(e);
        });
    });

})();

// main oage svg navigation end


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