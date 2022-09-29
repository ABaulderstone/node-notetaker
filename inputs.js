const prompts = require('prompts');
const { text } = require('prompts/dist/prompts');
const {
  passwordValidation,
  usernameRegisterValidation,
} = require('./validations');

const mainMenuSelect = async () => {
  const choice = await prompts({
    type: 'select',
    name: 'value',
    message: 'What would you like to do?',
    choices: [
      {
        title: 'Register',
        value: 1,
      },
      {
        title: 'Log in',
        value: 2,
      },
      {
        title: 'Read Notes',
        value: 3,
      },
      {
        title: 'Add a note',
        value: 4,
      },
      {
        title: 'Exit',
        value: 5,
      },
    ],
  });

  return choice.value;
};

const inputRegisterDetails = async () => {
  const { username } = await prompts({
    type: 'text',
    name: 'username',
    message: 'Enter a username:',
    validate: usernameRegisterValidation,
  });
  const { password } = await prompts({
    type: 'password',
    name: 'password',
    message: 'Enter a password:',
    validate: passwordValidation,
  });
  return { username, password };
};

const inputLoginDetails = async () => {
  const { username } = await prompts({
    type: 'text',
    name: 'username',
    message: 'Enter your username:',
  });
  const { password } = await prompts({
    type: 'password',
    name: 'password',
    message: 'Enter your password:',
  });
  return { username, password };
};

const inputNote = async () => {
  const { note } = await prompts({
    type: 'text',
    name: 'note',
    message: 'Enter a note',
  });
  return note;
};

module.exports = {
  mainMenuSelect,
  inputRegisterDetails,
  inputLoginDetails,
  inputNote,
};
