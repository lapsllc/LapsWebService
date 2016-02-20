'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var BrandSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,

  colors: [{ red: Number, green: Number, blue: Number }],
  popularProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  description: String
});

exports['default'] = mongoose.model('Brand', BrandSchema);
module.exports = exports['default'];
//# sourceMappingURL=brand.model.js.map
