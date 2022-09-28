const { password } = require('prompts/dist/prompts');
const { users } = require('./db');

const passwordValidation = (str) => {
  if (str.length < 6) return 'Password must contain at least 6 characters';
  if (!/[A-Z]/.test(str)) return 'Password must contain a capital letter';
  if (!/[0-9]/.test(str)) return 'Password must contain a number';
  return true;
};

const usernameRegisterValidation = (str) => {
  if (users.some((user) => user.username === str))
    return 'A user with that name already exists';

  return true;
};

module.exports = { passwordValidation, usernameRegisterValidation };
