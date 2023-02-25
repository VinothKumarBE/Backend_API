const mongoose = require('mongoose');


var products = new mongoose.Schema({
  productId: {
      type: mongoose.Schema.ObjectId,
     
     
  },
  productName: {
      type: String,
      trim: true
  },
  color: {
      type: String,
      trim: true
  },
itemQty: {
      type: String,
      trim: true
  },
itemWearBy: {
      type: String,
      trim: true
  },
isItemAvailable: {
      type: String,
      trim: true
  },
type: {
      type: String,
      trim: true
  },
price: {
    type: Number,
    trim: true
},
discountPrice: {
  type: Number,
  trim: true
},
itemDescription: {
      type: String,
      trim: true
  },
  createdAt: {
      type: Date,
      default: Date.now
  },
modifiedAt: {
      type: Date,
      default: Date.now
  }
});

const Product = mongoose.model('Product', products);

module.exports = Product;
