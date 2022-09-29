const {
  mainMenuSelect,
  inputRegisterDetails,
  inputLoginDetails,
  inputNote,
  inputAnyKey,
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
        let attemps = 0;
        while (attemps < 3) {
          try {
            const details = await inputLoginDetails();
            loggedInUser = loginUser(details);
            break;
          } catch (e) {
            console.log(e.message);
            attemps++;
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
    await inputAnyKey();
    console.clear();
  }
})();
