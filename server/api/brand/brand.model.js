'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var BrandSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,

  colors: [{red: Number, green: Number, blue: Number}],
  popularProducts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  description: String
});

export default mongoose.model('Brand', BrandSchema);
