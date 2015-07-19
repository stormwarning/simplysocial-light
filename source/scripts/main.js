/**
 *
 */
/* jshint jquery:true */
$(function() {
  FastClick.attach( document.body );
});

$( 'input, textarea' ).placeholder({
  customClass: 'has-placeholder'
});

$(function() {
  var $msnry = $( '.js-masonry' );

  $msnry.imagesLoaded( function() {

    $msnry.masonry({
      itemSelector: '.card'
    });

  });
});
