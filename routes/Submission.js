const express = require('express');
const router = express.Router();
const Submission = require('../services/Submission');

// GET
router.get('/', async function(req, res, next) {
  try {
    res.json(await Submission.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting submissions `, err.message);
    next(err);
  }
});

/* POST  */
router.post('/', async function(req, res, next) {
  try {
    res.json(await Submission.create(req.body));
  } catch (err) {
    console.error(`Error while creating submission`, err.message);
    next(err);
  }
});

/* PUT */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await Submission.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating submission`, err.message);
    next(err);
  }
});

/* DELETE */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await Submission.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting submission`, err.message);
    next(err);
  }
});

module.exports = router;
