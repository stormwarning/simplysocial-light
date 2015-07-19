/**
 *
 */
/* jshint jquery:true */
$(document).ready(function() {

  $(function() {

    'use strict';

    FastClick.attach( document.body );

  });


  $( 'input, textarea' ).placeholder({
    customClass: 'has-placeholder'
  });


  $(function() {

    $( '.js-toggle-modal' ).magnificPopup({
      type: 'inline',
      closeMarkup: '<button class="button  button--link  mfp-close" type="button">
              <svg class="icon  icon--close">
                <use xlink:href="/simplysocial-light/assets/images/sprite.symbol.svg#icon-close"></use>
              </svg>
            </button>',
      midClick: true,
      preloader: false
    });

  });


  $(function() {

    'use strict';

    var $msnry = $( '.js-masonry' );

    $msnry.imagesLoaded( function() {

      $msnry.masonry({
        itemSelector: '.card'
      });

    });

  });

});
