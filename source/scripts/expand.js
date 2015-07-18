/**
 *
 */
/* jshint jquery:true */
$(function() {

  'use strict';

  $( '.js-toggle-expand' ).click(function( e ) {

    var $target;
    var $changeContent;

    if ( $( this ).attr( 'href' ) ) {

      $target = $( $( this ).attr( 'href' ) );
      $changeContent = true;

    } else {

      $target = $( $( this ).data( 'toggle' ) );
      $changeContent = false;

    }

    e.preventDefault();
    $( this ).toggleClass( 'is-open' );
    $target.toggleClass( 'is-open' );

    if ( 'true' === $target.attr( 'aria-hidden' ) ) {

      if ( $changeContent ) {
        $( this ).html( 'Collapse' );
      }

      $( this ).attr( 'aria-expanded', 'true' );
      $target.attr( 'aria-hidden', 'false' );

    } else {

      if ( $changeContent ) {
        $( this ).html( 'Expand' );
      }

      $( this ).attr( 'aria-expanded', 'false' );
      $target.attr( 'aria-hidden', 'true' );

    }

  });

});
