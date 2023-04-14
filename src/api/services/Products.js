const db = require('./db');
const helper = require('../helper');

async function getMultiple(page = 1){
  const listPerPage = parseInt(process.env.LIST_PER_PAGE, 10);
  const offset = helper.getOffset(page, listPerPage);

  const rows = await db.query(
    `SELECT ProductID, ProductName, Brand, Model, Quantity, Price, Color FROM Products LIMIT ${offset},${listPerPage}`
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
    (ProductID, ProductName, Brand, Model, Quantity, Price, Color) 
    VALUES 
    ('${product.ProductID}', '${product.ProductName}', '${product.Brand}', '${product.Model}', '${product.Quantity}', ${product.Price}, '${product.Color}')`
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
    SET ProductName='${product.ProductName}', Brand='${product.Brand}', Model='${product.Model}', Quantity='${product.Quantity}', Price=${product.Price}, Color='${product.Color}'
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
