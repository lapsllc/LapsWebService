/**
 * Gift model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Gift = require('./gift.model');
var GiftEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
GiftEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Gift.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    GiftEvents.emit(event + ':' + doc._id, doc);
    GiftEvents.emit(event, doc);
  };
}

exports['default'] = GiftEvents;
module.exports = exports['default'];
//# sourceMappingURL=gift.events.js.map
