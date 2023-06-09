const express = require('express');
const router = express.Router();
const Products = require('../services/Products');

// GET
router.get('/', async function(req, res, next) {
  try {
    res.json(await Products.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

/* POST  */
router.post('/', async function(req, res, next) {
  console.log(req.body);
  try {
    res.json(await Products.create(req.body));
  } catch (err) {
    console.error(`Error while creating product`, err.message);
    next(err);
  }
});

/* PUT */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await Products.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating product`, err.message);
    next(err);
  }
});

/* DELETE */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await Products.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting product`, err.message);
    next(err);
  }
});

module.exports = router;
