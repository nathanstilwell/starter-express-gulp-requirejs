/*global requirejs */

requirejs.config({
    baseUrl: 'js/vendor',
    paths: {
      src: '/js/src',
    //
    //  Globals
    //
    //  We're making a special exception for globals
    //  that are bower installed
    //
      jquery: 'jquery/jquery',
      underscore: 'underscore/underscore',
      backbone: 'backbone/backbone'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});