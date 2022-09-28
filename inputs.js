const prompts = require('prompts');
const { passwordValidation } = require('./validations');

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
        title: 'Exit',
        value: 4,
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
  });
  const { password } = await prompts({
    type: 'password',
    name: 'password',
    message: 'Enter a password:',
    validate: passwordValidation,
  });
  return { username, password };
};

module.exports = { mainMenuSelect, inputRegisterDetails };
