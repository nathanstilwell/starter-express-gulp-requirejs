/*global define, console */

define([
  'jquery',
  'underscore',
  'backbone',

  'src/a'
],

function ($, _, backbone, a) {
  'use strict';

  a('Index');

  console.log('backbone: ' + backbone.VERSION);
  console.log('underscore: ' + _.VERSION);
  console.log('jquery: ' + $.fn.jquery);
  console.log('index.js');
});
