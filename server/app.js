const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(`${__dirname}/../react-client/`));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).res.send('hello');
});

module.exports = app;
