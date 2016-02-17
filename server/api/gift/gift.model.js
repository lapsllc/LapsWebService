'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var GiftSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,

  _state: Number,

  target: {
    email: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }
});

GiftSchema.methods = {
  state: function () {
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

export default mongoose.model('Gift', GiftSchema);
