const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);

  const rows = await db.query(
    `SELECT ProductID, ProductName, Brand, Model, Quantity, Price, Color, Stock FROM Products LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(product) {
  const result = await db.query(
    `INSERT INTO Products 
    (ProductID, ProductName, Brand, Model, Quantity, Price, Color, Stock) 
    VALUES 
    ('${product.ProductID}', '${product.ProductName}', '${product.Brand}', '${product.Model}', '${product.Quantity}', ${product.Price}, '${product.Color}', ${product.Stock})`
  );

  let message = 'Error in creating product';

  if (result.affectedRows) {
    message = 'Product created successfully';
  }

  return { message };
}

async function update(id, product) {
  const result = await db.query(
    `UPDATE Products 
    SET ProductName='${product.ProductName}', Brand='${product.Brand}', Model='${product.Model}', Quantity='${product.Quantity}', Price=${product.Price}, Color='${product.Color}', Stock=${product.Stock}
    WHERE ProductID='${id}'`
  );

  let message = 'Error in updating product';

  if (result.affectedRows) {
    message = 'Product updated successfully';
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM Products WHERE ProductID='${id}'`
  );

  let message = 'Error in deleting product';

  if (result.affectedRows) {
    message = 'Product deleted successfully';
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}