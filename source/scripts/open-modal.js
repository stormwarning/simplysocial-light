/**
 *
 */
/* jshint jquery:true */
$(function() {

  'use strict';

  $( '.js-toggle-modal' ).click(function( e ) {

    e.preventDefault();
    $( '.modal' ).toggleClass( 'is-open' );
    $( 'body' ).toggleClass( 'modal-open' );

    if ( 'true' === $( '.modal' ).attr( 'aria-hidden' ) ) {

      $( '.modal' ).attr( 'aria-hidden', 'false' );

    } else {

      $( '.modal' ).attr( 'aria-hidden', 'true' );

    }

  });

});
