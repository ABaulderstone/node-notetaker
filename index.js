const { mainMenuSelect, inputRegisterDetails } = require('./inputs');
const { users, registerUser } = require('./db');

(async () => {
  while (true) {
    switch (await mainMenuSelect()) {
      case 1:
        console.log('Register');
        const details = await inputRegisterDetails();
        registerUser(details);

        break;
      case 2:
        console.log('Sign In');
        break;
      case 3:
        console.log(users);
        break;
      case 4:
        process.exit();
        break;
      default:
        console.log('Unrecognised input');
    }
  }
})();
