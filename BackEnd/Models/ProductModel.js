const mongoose = require("mongoose");

const ProductModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  prize: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  images: {
    filename: {
      type: String,
      required: true,
    },
  }
});


let productModel = mongoose.model('product',ProductModel)

module.exports = productModel;