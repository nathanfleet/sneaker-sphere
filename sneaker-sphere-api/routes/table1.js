const express = require('express');
const router = express.Router();
const table1 = require('../services/table1');

// GET
router.get('/', async function(req, res, next) {
  try {
    // change to name of table
    res.json(await table1.getMultiple(req.query.page));
  } catch (err) {
    // change
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;