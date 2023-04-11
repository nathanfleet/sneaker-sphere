const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);

  const rows = await db.query(
    `SELECT UserID, Name, Address, Email FROM \`UserInformation\` LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(user) {
  const result = await db.query(
    `INSERT INTO \`UserInformation\` 
    (UserID, Name, Address, Email) 
    VALUES 
    ('${user.userID}', '${user.name}', '${user.address}', '${user.email}')`
  );

  let message = 'Error in creating user';

  if (result.affectedRows) {
    message = 'User created successfully';
  }

  return { message };
}

async function update(id, user) {
  const result = await db.query(
    `UPDATE \`UserInformation\` 
    SET Name='${user.name}', Address='${user.address}', Email='${user.email}'
    WHERE UserID='${id}'`
  );

  let message = 'Error in updating user';

  if (result.affectedRows) {
    message = 'User updated successfully';
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM \`UserInformation\` WHERE UserID='${id}'`
  );

  let message = 'Error in deleting user';

  if (result.affectedRows) {
    message = 'User deleted successfully';
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};