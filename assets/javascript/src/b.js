/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global module, console*/

'use strict';

module.exports = function (name) {
  name = name || '';
  console.log('Module B says, ' + name );
};