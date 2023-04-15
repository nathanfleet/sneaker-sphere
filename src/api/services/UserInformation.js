const db = require('./db');
const helper = require('../helper');

async function getMultiple(page = 1) {
  const listPerPage = parseInt(process.env.LIST_PER_PAGE, 10);
  const offset = helper.getOffset(page, listPerPage);

  const rows = await db.query(
    `SELECT UserID, Name, Address, Email FROM \`UserInformation\` LIMIT ${offset},${listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(User) {
  console.log('User object:', User); // Added this line to log the User object

  const resultCheck = await db.query(
    `SELECT COUNT(*) as count FROM \`UserInformation\` WHERE UserID='${User.UserID}'`
  );

  if (resultCheck[0].count > 0) {
    const error = new Error('User already registered');
    error.statusCode = 409;
    throw error;
  }

  const result = await db.query(
    `INSERT INTO \`UserInformation\` 
    (UserID, Name, Address, Email) 
    VALUES 
    ('${User.UserID}', '${User.Name}', '${User.Address}', '${User.Email}')`
  );

  let message = 'Error in creating user';

  if (result.affectedRows) {
    message = 'User created successfully';
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
  remove,
};