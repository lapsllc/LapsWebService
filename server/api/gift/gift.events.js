/**
 * Gift model events
 */

'use strict';

import {EventEmitter} from 'events';
var Gift = require('./gift.model');
var GiftEvents = new EventEmitter();

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
  }
}

export default GiftEvents;
