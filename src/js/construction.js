var constructionPopups = (function() {

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

// end constructionPopups