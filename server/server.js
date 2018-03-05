const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/amazon');
app.listen(3001);
