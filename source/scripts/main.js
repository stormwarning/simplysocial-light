$(function() {
  FastClick.attach( document.body );
});

$( 'input, textarea' ).placeholder({
  customClass: 'has-placeholder'
});

$( '.js-masonry' ).masonry({
  itemSelector: '.card'
});
