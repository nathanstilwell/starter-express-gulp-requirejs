/*global require, __dirname*/

'use strict';

var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var requirejs = require('requirejs');
var root = path.join(__dirname, '../..');

var config = require(path.join(root, 'assets/javascript/build.json'));

gulp.task('javascript', function (done) {
  gutil.log(gutil.colors.cyan('Optimizing javascript using r.js ...'));
  requirejs.optimize(config, function optimizeSuccess (buildResponse) {
    gutil.log(gutil.colors.blue('    r.js Optimizer built modules'));
    gutil.log(gutil.colors.blue('======================================'));
    gutil.log('\n' + buildResponse);
    gutil.log(gutil.colors.blue('======================================'));
    done();
  }, function optimizeError (err) {
    gutil.log(gutil.colors.red('\n' + err));
  });
});
