import axios from 'axios';

const auth = {
  /**
   * Logs a user in, returning a promise with `true` when done
   * @param  {string} email The email of the user
   * @param  {string} password The password of the user
   */
  login(user) {
    if (auth.loggedIn()) {
      return Promise.resolve(true);
    }

    if (typeof window !== 'undefined') {
      localStorage.batonk = JSON.stringify(user);
    }

    return Promise.resolve(true);
  },

  /**
   * Logs the current user out
   */
  logout() {
    localStorage.removeItem('batonk');
    Reflect.deleteProperty(axios.defaults.headers.common, 'Authorization');
  },

  /**
   * Checks if a user is logged in
   */
  loggedIn() {
    let isUserExist;

    if (typeof window !== 'undefined') {
      isUserExist = Boolean(localStorage.batonk);
    }
    return isUserExist ? JSON.parse(localStorage.batonk) : false;
  }
};

export default auth;
