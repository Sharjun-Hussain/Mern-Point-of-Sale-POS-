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
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  images: {
    
      type: [String]
      
    },
  }
);


const products = mongoose.model('product', ProductModel);
module.exports = products;