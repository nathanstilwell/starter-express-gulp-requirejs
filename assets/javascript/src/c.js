/*global define, console*/

'use strict';

define([], function () {
  return function cModule (name) {
    name = name || '';
    console.log('Module C says, ' + name );
  };
});