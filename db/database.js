const mongoose = require('mongoose');

const productsModel = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  department: {
    type: String,
    enum: ['Grocery', 'Home/Garden', 'Outdoors', 'Movies', 'Books', 'Electronics', 'Beauty', 'Toys', 'Clothing', 'Automotive'],
    required: true,
  },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  shipping: {
    type: String,
    enum: ['Prime', 'FREE Shipping', 'Regular Shipping', 'Same-Day Delivery', 'One Day Shipping'],
    required: true,
  },
  stock: { type: Boolean, required: true, default: false },
  description: { type: Array, required: true },
});

const Products = mongoose.model('Products', productsModel);

const insert = (product, callback) => {
  Products.create(product, callback);
};

const findOneProduct = (idTarget, callback) => {
  Products.findOne({ id: idTarget }, (err, item) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
};

module.exports.insert = insert;
module.exports.findOneProduct = findOneProduct;
