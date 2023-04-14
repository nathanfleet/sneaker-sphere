const express = require('express');
const router = express.Router();
const Orders = require('../services/Orders');
const helper = require('../helper');

// GET
router.get('/', async function(req, res, next) {
  try {
    res.json(await Orders.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting orders `, err.message);
    next(err);
  }
});

/* POST  */
router.post('/', async (req, res, next) => {
  console.log(req.body);
  try {
    // Generate a new OrderID
    const newOrderID = helper.generateOrderID();

    const order = {
      OrderID: newOrderID,
      Price: req.body.Price,
      UserID: req.body.UserID,
    };

    res.json(await Orders.create(order));
  } catch (err) {
    console.error(`Error while creating order`, err.message);
    next(err);
  }
});

/* DELETE */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await Orders.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting order`, err.message);
    next(err);
  }
});

module.exports = router;
