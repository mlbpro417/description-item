const data = require('../data/seedData');
const mongoose = require('mongoose');
const db = require('./database');

mongoose.connect('mongodb://localhost/amazon');

const connect = mongoose.connection;
connect.on('error', console.error.bind(console, '*** Connection on MongoDB error ***'));
connect.once('open', () => console.log('*** Connection on MongoDB successful ***'));

const seedDb = (arr) => {
  arr.map((x) => {
    const singleProduct = {
      id: x.id,
      department: x.department,
      brand: x.brand,
      model: x.model,
      price: x.price,
      shipping: x.shipping,
      stock: x.stock,
      description: x.description,
    };
    db.insert(singleProduct, (err) => {
      if (err) throw err;
      console.log('Data insert into DB');
    });
    return x;
  });
};

seedDb(data);
