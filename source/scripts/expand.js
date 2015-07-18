/**
 *
 */
/* jshint jquery:true */
$(function() {

  'use strict';

  $( '.js-toggle-replies' ).click(function( e ) {

    var $target = $( $( this ).attr( 'href' ) );

    e.preventDefault();
    $( this ).toggleClass( 'is-open' );
    $target.toggleClass( 'is-open' );

    if ( 'true' === $target.attr( 'aria-hidden' ) ) {

      $( this ).attr( 'aria-expanded', 'true' );
      $( this ).html( 'Collapse' );
      $target.attr( 'aria-hidden', 'false' );

    } else {

      $( this ).attr( 'aria-expanded', 'false' );
      $( this ).html( 'Expand' );
      $target.attr( 'aria-hidden', 'true' );

    }

  });

});
