const express = require('express');
const router = express.Router();
const db = require('../services/db');
const helper = require('../helper');

router.post('/', async (req, res) => {
  try {
    const {
      UserID,
      ProductName,
      Brand,
      Model,
      Quantity,
      Price,
      Color,
      Image,
    } = req.body;

    // Generate a new product ID
    const newProductID = helper.generateProdID();

    // Insert product data into products table
    const productInsertQuery = `
      INSERT INTO Products (ProductID, ProductName, Brand, Model, Quantity, Price, Color, Image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await db.query(productInsertQuery, [newProductID, ProductName, Brand, Model, Quantity, Price, Color, Image]);

    // Insert submission data into submissions table
    const newSubmissionID = helper.generateSubID();
    const submissionInsertQuery = `
      INSERT INTO Submission (SubmissionID, UserID, ProductID)
      VALUES (?, ?, ?)
    `;
    await db.query(submissionInsertQuery, [newSubmissionID, UserID, newProductID]);

    res.json({
      success: true,
      message: 'Product and submission created successfully',
      data: {
        ProductID: newProductID,
        SubmissionID: newSubmissionID,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating product and submission',
    });
  }
});

module.exports = router;
