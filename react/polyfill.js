require('core-js/es6/map');
require('core-js/es6/set');
require('core-js/es6/promise');

if (typeof(Object) !== 'undefined') {
  if (typeof(Object.assign) !== 'function') {
    Object.assign = require('object-assign');
  }
}
