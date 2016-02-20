'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProductSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,

  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },

  colors: [{ red: Number, green: Number, blue: Number }],
  description: String,
  image: Buffer
});

exports['default'] = mongoose.model('Product', ProductSchema);
module.exports = exports['default'];
//# sourceMappingURL=product.model.js.map
