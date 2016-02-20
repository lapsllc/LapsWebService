'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var GiftSchema = new mongoose.Schema({
  _state: {type: Number, 'default': 0},

  product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
  source: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  target: {
    email: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },

  userInfo: String
});

GiftSchema.methods = {
  state: function state() {
    switch (_state) {
      case 0:
        return 'Pending';

      case 1:
        return 'Shown';

      case 2:
        return 'HandedOver';

      default:
        return 'Unknown';
    }
  }
};

exports['default'] = mongoose.model('Gift', GiftSchema);
module.exports = exports['default'];
//# sourceMappingURL=gift.model.js.map
