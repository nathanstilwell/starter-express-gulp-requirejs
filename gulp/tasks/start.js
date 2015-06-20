/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require, console*/

'use strict';

var gulp = require('gulp');
var gulpNodemon = require('gulp-nodemon');
var path = require('path');
var RainbowBarf = require('rainbow-barf');
var barf = new RainbowBarf();

gulp.task('start', function () {
  gulpNodemon({
    script: 'server.js',
    watch: [
      'public/templates/',
      'server.js'
    ],
    ext: 'hbs js',
    env: { 'NODE_ENV': 'development' }
  })
  .on('restart', function nodemonRestartHandler (files) {
    if (files) {
      barf('\nApplication restarted from changes to:', ['c:bright_green']);
      files.forEach(function (file) {
        barf('    ' + path.basename(file), ['c:bright_blue']);
        barf(''); // blank line for a little breathing room
      }); // each
    } else {
      barf('\nApplication restarted manually\n', ['c:bright_green']);
    }
  }); // on
}); // start
