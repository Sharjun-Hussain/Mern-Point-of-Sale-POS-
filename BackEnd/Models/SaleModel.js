const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
  total_amount: {
    type: Number,
    required: true,
  },
  payment_method: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;S