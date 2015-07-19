/**
 *
 */
/* jshint jquery:true */
$(function() {

  'use strict';

  $( '.js-toggle-modal' ).click(function( e ) {

    var $target = $( $( this ).data( 'toggle' ) );

    e.preventDefault();
    $target.toggleClass( 'is-open' );
    $( 'body' ).toggleClass( 'modal-open' );

    if ( 'true' === $target.attr( 'aria-hidden' ) ) {

      $( 'html' ).css( 'overflow', 'hidden' );
      $target.attr( 'aria-hidden', 'false' );

    } else {

      $( 'html' ).css( 'overflow', '' );
      $target.attr( 'aria-hidden', 'true' );

    }

  });

});
