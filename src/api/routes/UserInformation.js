const express = require('express');
const router = express.Router();
const UserInfo = require('../services/UserInformation');

// GET
router.get('/', async function(req, res, next) {
  try {
    res.json(await UserInfo.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting user info `, err.message);
    next(err);
  }
});

/* POST  */
router.post('/', async function(req, res, next) {
  try {
    res.json(await UserInfo.create(req.body));
  } catch (err) {
    console.error(`Error while creating user info`, err.message);
    next(err);
  }
});

/* PUT */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await UserInfo.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user info`, err.message);
    next(err);
  }
});

/* DELETE */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await UserInfo.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user info`, err.message);
    next(err);
  }
});

module.exports = router;
