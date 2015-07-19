/* jshint node:true */
'use strict';

// DEPENDENCIES =======================================================
var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();
var browserSync = require( 'browser-sync' );
var reload = browserSync.reload;


// FILE PATHS =========================================================
var source = {

  styles: 'source/styles/**/*.scss',
  scripts: 'source/scripts/*.js',
  images: 'source/images/*.{png,jpg,gif}',
  svgs: 'source/images/*.svg',
  plugins: 'source/vendor'

};
var assets = {

  styles: 'build/assets/styles',
  scripts: 'build/assets/scripts',
  images: 'build/assets/images'

};
var plugins = [

  source.plugins + '/fastclick/lib/fastclick.js',
  source.plugins + '/svg4everybody/svg4everybody.js',
  source.plugins + '/jquery-placeholder/jquery.placeholder.js',
  source.plugins + '/masonry/dist/masonry.pkgd.js'

];


// AUTOPREFIXER CONFIG ================================================
var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];


// COMPILE STYLESHEETS ================================================
gulp.task( 'styles', function() {

  return gulp.src( 'source/styles/*.scss' )
    .pipe( $.changed( 'styles', {
      extension: '.scss'
    }) )
    .pipe( $.sass({
      precision: 10,
      onError: console.error.bind( console, 'SASS error:' )
    }) )
    .pipe( $.autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }) )
    .pipe( $.csso() )
    .pipe( gulp.dest( assets.styles ) );

});


// CONCATENATE JS ==============================================
gulp.task( 'scripts', function() {

  return gulp.src( source.scripts )
    .pipe( $.concat( 'main.js' ) )
    .pipe( $.uglify() )
    .pipe( gulp.dest( assets.scripts ) );

});

gulp.task( 'plugins', function() {

  return gulp.src( plugins )
    .pipe( $.concat( 'plugins.js' ) )
    .pipe( $.uglify() )
    .pipe( gulp.dest( assets.scripts ) );

});


// OPTIMISE IMAGES ====================================================
gulp.task( 'images', function() {

  return gulp.src( source.images )
    .pipe( $.changed( assets.images ) )
    .pipe( $.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }) )
    .pipe( gulp.dest( assets.images ) );

});


// CREATE SVG SPRITE ==================================================
gulp.task( 'sprite', function() {

  return gulp.src( source.svgs )
  .pipe( $.plumber() )
  .pipe( $.svgSprite({
    log: 'verbose',
    mode: {
      symbol: {
        dest: './',
        sprite: 'sprite.symbol.svg'
      }
    }
  }) ).on( 'error', function( error ) { console.log( error ); })
  .pipe( gulp.dest( assets.images ) );

});


// WATCH FOR CHANGES AND RELOAD =======================================
gulp.task( 'serve', ['styles'], function() {
  browserSync({
    notify: false,
    logPrefix: '⎋',
    server: {
      baseDir: 'build'
    }
  });

  gulp.watch( ['**/*.html'], reload );
  gulp.watch( [ source.styles ], ['styles', reload] );
  gulp.watch( [ source.scripts ], ['scripts'] );
  gulp.watch( [ source.images ], ['images', reload] );
});
