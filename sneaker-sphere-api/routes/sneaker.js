const express = require('express');
const router = express.Router();
const sneaker = require('../services/sneaker');

// GET
router.get('/', async function(req, res, next) {
  try {
    // change
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    // change
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;