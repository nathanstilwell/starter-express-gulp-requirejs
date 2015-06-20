/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global module, require, console*/

'use strict';

module.exports = function  (name) {
  var b = require('./b');
  var c = require('./c');

  name = name || '';

  console.log('Module A says, ' + name);

  b(name);
  c(name);
};
