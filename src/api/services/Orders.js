const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);

  const rows = await db.query(
    `SELECT OrderID, Price, UserID FROM Orders LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(order) {
  const result = await db.query(
    `INSERT INTO Orders 
    (OrderID, Price, UserID) 
    VALUES 
    ('${order.OrderID}', '${order.Price}', '${order.UserID}')`
  );

  let message = 'Error in creating order';
  let success = false;

  if (result.affectedRows) {
    message = 'Order created successfully';
    success = true;
  }

  return { success, message, OrderID: order.OrderID };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM Orders WHERE OrderID='${id}'`
  );

  let message = 'Error in deleting order';

  if (result.affectedRows) {
    message = 'Order deleted successfully';
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  remove
}
