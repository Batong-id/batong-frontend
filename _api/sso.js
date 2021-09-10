import config from '_api/config';

const { SSO_UI_URL, DOMAIN, BASE_URL } = config;

const loginUrl = `${SSO_UI_URL}/login?service=${DOMAIN}${BASE_URL}`;
const logoutUrl = `${SSO_UI_URL}/logout?url=${DOMAIN}${BASE_URL}`;

export function redirectToSSOLogin() {
  if (typeof window !== 'undefined') {
    window.location.replace(loginUrl);
  }
}

export function redirectToSSOLogout() {
  if (typeof window !== 'undefined') {
    window.location.replace(logoutUrl);
  }
}
