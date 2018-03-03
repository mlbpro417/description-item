const express = require('express');
const bodyParser = require('body-parser');
const description = require('./routes/description');

const app = express();

app.use(express.static(`${__dirname}/../react-client/`));

app.use(bodyParser.json());

app.use('/item', description);

module.exports = app;
