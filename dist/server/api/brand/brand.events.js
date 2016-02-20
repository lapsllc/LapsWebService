/**
 * Brand model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Brand = require('./brand.model');
var BrandEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
BrandEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Brand.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    BrandEvents.emit(event + ':' + doc._id, doc);
    BrandEvents.emit(event, doc);
  };
}

exports['default'] = BrandEvents;
module.exports = exports['default'];
//# sourceMappingURL=brand.events.js.map
