/*global define, console */

define([
  'jquery',
  'underscore',
  'backbone',

  'src/a'
],

function ($, _, backbone, mod1) {
  'use strict';

  mod1.init();

  console.log('backbone: ' + backbone.VERSION);
  console.log('underscore: ' + _.VERSION);
  console.log('jquery: ' + $.fn.jquery);
  console.log('index.js');
});