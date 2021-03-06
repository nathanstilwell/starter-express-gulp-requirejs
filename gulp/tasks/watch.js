/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: true*/

'use strict';

var gulp = require('gulp');

gulp.task('watch', function watchTask () {
  gulp.watch(['assets/less/**/*.less'], ['less']);
  gulp.watch(['test/**/*.js'], ['test']);
  gulp.watch(['assets/javascript/**/*.js'], ['javascript']);
});
