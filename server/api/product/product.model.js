'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProductSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,

  brand: {type: mongoose.Schema.Types.ObjectId, ref: 'Brand'},

  colors: [{red: Number, green: Number, blue: Number}],
  description: String,
  image: Buffer
});

export default mongoose.model('Product', ProductSchema);
