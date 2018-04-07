var langMenu=function(){
    var navLangItem=document.querySelector(".nav__item-lang"),
    n=document.querySelector(".lang");
    navLangItem.addEventListener("click",function(e){
        console.log('tset');
        
        e.preventDefault(),
        this.classList.contains("nav__item-lang_opened") 
        ? this.classList.remove("nav__item-lang_opened")
        : this.classList.add("nav__item-lang_opened")})}();


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
// main page tabs end


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