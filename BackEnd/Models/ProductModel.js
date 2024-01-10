const mongoose = require("mongoose");

const ProductModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
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
      
    },
  }
});


const products = mongoose.model('product', ProductModel);
module.exports = products;