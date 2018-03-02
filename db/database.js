const mongoose = require('mongoose');

const productsModel = mongoose.Schema({
  id: Number,
  department: {
    type: String,
    enum: ['Grocery', 'Home/Garden', 'Outdoors', 'Movies', 'Books', 'Electronics', 'Beauty', 'Toys', 'Clothing', 'Automotive'],
  },
  brand: String,
  model: String,
  price: Number,
  shipping: {
    type: String,
    enum: ['Prime', 'FREE Shipping', 'Regular Shipping', 'Same-Day Delivery', 'One Day Shipping'],
  },
  stock: Boolean,
  description: Array,
});

const Products = mongoose.model('Products', productsModel);

const insert = (product, cb) => {
  Products.create(product, cb);
};

module.exports.insert = insert;
