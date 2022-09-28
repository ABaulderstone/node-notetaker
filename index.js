const {
  mainMenuSelect,
  inputRegisterDetails,
  inputLoginDetails,
} = require('./inputs');

const { users, registerUser, loginUser } = require('./db');

let loggedInUser = null;
(async () => {
  while (true) {
    switch (await mainMenuSelect()) {
      case 1:
        console.log('Register');
        const details = await inputRegisterDetails();
        registerUser(details);

        break;
      case 2:
        while (true) {
          try {
            const details = await inputLoginDetails();
            loggedInUser = loginUser(details);
            break;
          } catch (e) {
            console.log(e.message);
          }
        }
        break;
      case 3:
        if (!loggedInUser) {
          console.log('You must be logged in to do that');
        } else {
          loggedInUser.notes.forEach((note) => console.log(note));
        }
        break;
      case 4:
        console.log('Add notes');
        break;
      case 5:
        process.exit();
      default:
        console.log('Unrecognised input');
    }
  }
})();
