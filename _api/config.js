import axios from 'axios';

import auth from './auth';
import { urlRefreshToken } from './endpoints';

let url;

if (typeof window !== 'undefined') {
  url = window.location.origin;
}

axios.interceptors.request.use(
  (config) => {
    const userAuth = auth.loggedIn();
    if (userAuth) {
      const { token } = userAuth;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === 'undefined') {
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url ===
        config[process.env.NODE_ENV].API_BASE_URL + '/token/refresh/' &&
      typeof window !== 'undefined'
    ) {
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      typeof window !== 'undefined'
    ) {
      originalRequest._retry = true;
      const { name, role, refresh, isSSO } = JSON.parse(
        localStorage.getItem('fooqi')
      );
      const refreshToken = refresh;

      try {
        const response = await axios.post(urlRefreshToken, {
          refresh: refreshToken
        });
        const storageData = {
          isSSO: isSSO,
          name: name,
          role: role,
          token: response.data.access,
          refresh: response.data.refresh
        };

        localStorage.setItem('fooqi', JSON.stringify(storageData));

        axios.defaults.headers['Authorization'] =
          'Bearer ' + response.data.access;
        originalRequest.headers['Authorization'] =
          'Bearer ' + response.data.access;
        return await axios(originalRequest);
      } catch {
        return Promise.reject(error);
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

const config = {
  base: {
    DOMAIN: url,
    SSO_UI_URL: 'https://sso.ui.ac.id/cas2'
  },
  production: {
    API_BASE_URL: 'https://fuki.cs.ui.ac.id/api',
    BASE_URL: '/'
  },
  development: {
    API_BASE_URL: 'http://localhost:8000/api',
    BASE_URL: '/'
  }
};

export default {
  ...config.base,
  ...config[process.env.NODE_ENV]
};
