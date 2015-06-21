/*global define, console*/

'use strict';

define(['src/b', 'src/c'], function  (b, c) {
  return function aModule (name) {
    name = name || '';

    console.log('Module A says, ' + name);

    b(name);
    c(name);
  };
});
