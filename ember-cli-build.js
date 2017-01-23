/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

if (EmberApp.env() === 'development') {
  babelConfig = {
    includePolyfill: true,
    blacklist: [
      'es6.arrowFunctions',
      'es6.blockScoping',
      'es6.classes',
      'es6.constants',
      'es6.destructuring',
      'es6.forOf',
      'es6.parameters',
      'es6.properties.computed',
      'es6.properties.shorthand',
      'es6.spread',
      'es6.tailCall',
      'es6.templateLiterals',
      'es6.regex.unicode',
      'es6.regex.sticky',
      'regenerator'
    ]
  };
}

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: babelConfig
  });
  return app.toTree();
};
