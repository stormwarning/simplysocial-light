/**
 *
 */
/* jshint jquery:true */
$(document).ready(function() {

  $(function() {

    'use strict';

    $( '.js-toggle-dropdown' ).click(function( e ) {

      e.preventDefault();
      $( '.dropdown' ).toggleClass( 'is-open' );
      $( 'body' ).toggleClass( 'dropdown-open' );

      if ( 'true' === $( '.dropdown' ).attr( 'aria-hidden' ) ) {

        $( '.dropdown' ).attr( 'aria-hidden', 'false' );

      } else {

        $( '.dropdown' ).attr( 'aria-hidden', 'true' );

      }

    });

  });

});
