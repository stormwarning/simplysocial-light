/**
 *
 */
/* jshint jquery:true */
$(function() {

  'use strict';

  $( '.js-toggle-replies' ).click(function( e ) {

    e.preventDefault();
    $( '.card-replies' ).toggleClass( 'is-open' );

    if ( 'true' === $( '.card-replies' ).attr( 'aria-hidden' ) ) {

      $( '.card-replies' ).attr( 'aria-hidden', 'false' );

    } else {

      $( '.card-replies' ).attr( 'aria-hidden', 'true' );

    }

  });

});
