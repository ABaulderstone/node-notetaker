const db = require('./db.json');
const fs = require('fs');
const { users } = db;

const updateDb = () => {
  const data = JSON.stringify(db);
  // Highlight file path relative to program execution
  fs.writeFileSync('./db/db.json', data);
};

const registerUser = async (details) => {
  const newUser = { ...details, notes: [] };
  users.push(newUser);
  updateDb();
};

const findUser = async () => {};

module.exports = { users, registerUser };
