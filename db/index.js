const db = require('./db.json');
const fs = require('fs');
const { comparePassword, encryptPassword } = require('./password-utils');
const { users } = db;

const updateDb = () => {
  const data = JSON.stringify(db);
  // Highlight file path relative to program execution
  fs.writeFileSync('./db/db.json', data);
};

const registerUser = async (details) => {
  const { username, password } = details;
  const encryptedPass = await encryptPassword(password);
  const newUser = { username, password: encryptedPass, notes: [] };
  users.push(newUser);
  updateDb();
};

const findUser = (username) => {
  return users.find((user) => user.username === username);
};

const matchPassword = (user, pass) => {
  if (!user) return false;
  return comparePassword(pass, user.password);
};

const loginUser = async (userDetails) => {
  const { username, password } = userDetails;
  const user = findUser(username);
  const validPassword = await matchPassword(user, password);

  if (!validPassword) {
    throw new Error('Incorrect Username or password');
  }
  return user;
};

const updateNotes = (user, note) => {
  const index = users.findIndex((dbUser) => dbUser.username === user.username);
  users[index].notes.push(note);
  updateDb();
};

module.exports = { users, registerUser, loginUser, updateNotes };
