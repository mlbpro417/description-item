const express = require('express');
const db = require('../../db/database');

const router = express.Router();

router.route('/:id/description').get((req, res) => {
  const { id } = req.params;
  db.findOneProduct(id, (err, product) => {
    if (err) {
      res.sendStatus(404);
    }
    res.json(product);
  });
});

module.exports = router;
