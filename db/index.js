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

const findUser = (username) => {
  return users.find((user) => user.username === username);
};

const matchPassword = (user, pass) => {
  return user?.password === pass;
};

const loginUser = (userDetails) => {
  const { username, password } = userDetails;
  const user = findUser(username);
  const validPassword = matchPassword(user, password);

  if (!validPassword) {
    throw new Error('Incorrect Username or password');
  }
  return user;
};

module.exports = { users, registerUser, loginUser };
