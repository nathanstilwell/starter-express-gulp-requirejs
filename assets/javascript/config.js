/*global requirejs */

requirejs.config({
    baseUrl: '/assets/javascript',
    paths: {
      jquery: 'vendor/jquery/jquery',
      underscore: 'vendor/underscore/underscore',
      backbone: 'vendor/backbone/backbone'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        }
    }
});
