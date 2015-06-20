/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: true*/

'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var LessPluginNpmImport = require('less-plugin-npm-import');
var LessPluginCleanCss = require('less-plugin-clean-css');

var npmimport = new LessPluginNpmImport();
var cleancssplugin = new LessPluginCleanCss();

gulp.task('less', function() {
  gulp.src('assets/less/*.less')
  .pipe(sourcemaps.init())
  .pipe(less({
    paths: [
      'assets/less'
    ],
    plugins: [npmimport, cleancssplugin]
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/css'));
});


