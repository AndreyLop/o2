var constructionMginfic = (function() {

    $('.construction__gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.construction__gallery-item', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            }
        });
    });
    
})();
// end constructionMginfic

var constructionFillPerncets = (function() {
    var percNumbersActual = document.querySelectorAll('.construction__percents-numbers_actual');
    var percNumbersVisible = document.querySelectorAll('.construction__percents-numbers_visible');
    setTimeout(function() {
        Array.prototype.forEach.call(percNumbersActual, function(number, index) {
            var numbActual = parseInt(number.innerHTML);
            var numbVisible = parseInt(percNumbersVisible[index].innerHTML);
            number.parentNode.style.backgroundSize = parseInt(numbActual) + '%';
        
            function animateNumbers() {
                if(numbVisible < numbActual) {
                    numbVisible++;
                    percNumbersVisible[index].innerHTML = numbVisible + '%';
                    requestAnimationFrame(animateNumbers);
                }
            }
            animateNumbers();
        });

    }, 500);

})();


