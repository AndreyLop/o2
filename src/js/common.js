var langMenu=function(){
    var e=document.querySelector(".nav_item_lang"),
    n=document.querySelector(".lang");
    e.addEventListener("click",function(e){
        e.preventDefault(),
        n.classList.contains("lang__opened")?n.classList.remove("lang__opened"):n.classList.add("lang__opened")})}();


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