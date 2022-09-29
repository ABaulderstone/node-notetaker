const {
  mainMenuSelect,
  inputRegisterDetails,
  inputLoginDetails,
  inputNote,
} = require('./inputs');

const { users, registerUser, loginUser, updateNotes } = require('./db');

let loggedInUser;
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
        if (!loggedInUser) {
          console.log('You must be logged in to do that');
        } else {
          const note = await inputNote();
          updateNotes(loggedInUser, note);
        }
        break;
      case 5:
        process.exit();
      default:
        console.log('Unrecognised input');
    }
  }
})();
