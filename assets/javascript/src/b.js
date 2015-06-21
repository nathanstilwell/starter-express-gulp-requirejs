/*global define, console*/

'use strict';

define([], function () {
  return function bModule (name) {
    name = name || '';
    console.log('Module B says, ' + name );
  };
});