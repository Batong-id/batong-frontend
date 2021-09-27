import { ErrorToast } from '../components/Toast';

// pass errors from react-hook-form
export const toastErrorMessage = ({ errors, title }) => {
  let foundNotif = false;
  for (const errorParent of Object.values(errors)) {
    for (const key in errorParent) {
      if (key !== 'message') continue;
      ErrorToast(title, errorParent[key]);
      foundNotif = true;
      break;
    }

    if (foundNotif) break;
  }
};
