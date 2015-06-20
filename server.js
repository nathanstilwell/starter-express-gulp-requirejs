/*jshint asi: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require, process, __dirname */
'use strict';

//
// App Creation and Environment Setup
//
var express = require('express');

// set to the root of the project
var root = __dirname;

var express = require('express');
var app = express();
var hbs = require('hbs');

var port = 9999;

//
//  Configure Express App
//

app.set('port', (process.env.PORT || port));
app.set('view engine', 'hbs');
app.set('views', root + '/public/templates');
app.set('view options', { layout: 'layouts/default.hbs' });
app.use(express.static(root + '/public'));

//
//  Handlebars Setup
//

// Register Template Partials

hbs.registerPartials(root + '/public/templates/partials');

//  Handlebars Helpers

var blocks = {};

hbs.registerHelper('extend', function(name, context) {
  var block = blocks[name];
  if (!block) {
      block = blocks[name] = [];
  }

  block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.registerHelper('block', function(name) {
  var val = (blocks[name] || []).join('\n');
  // clear the block
  blocks[name] = [];
  return val;
});

hbs.registerHelper('json', function(context) {
  return JSON.stringify(context);
});


//
//  Routes
//
app.get('/', function indexRoute (req, res) {
  res.render('index', {});
});

//
//  Start Listening on the Port
//

app.listen(app.get('port'), function() {
  process.stdout.write('App is running the ' + (process.env.NODE_ENV || 'development') + ' environment on port ' + app.get('port') + '\n');
})

