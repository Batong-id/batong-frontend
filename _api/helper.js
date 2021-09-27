import config from './config';

export const redirect = (path) =>
  window.location.replace(`${config.BASE_URL}${path}`);
