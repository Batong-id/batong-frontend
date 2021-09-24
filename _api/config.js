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
      const { name, role, refresh } = JSON.parse(
        localStorage.getItem('batonk')
      );
      const refreshToken = refresh;

      try {
        const response = await axios.post(urlRefreshToken, {
          refresh: refreshToken
        });
        const storageData = {
          name: name,
          role: role,
          token: response.data.access,
          refresh: response.data.refresh
        };

        localStorage.setItem('batonk', JSON.stringify(storageData));

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
    DOMAIN: url
  },
  production: {
    API_BASE_URL: 'api.batong.id',
    BASE_URL: 'batong.id'
  },
  development: {
    API_BASE_URL: 'http://localhost:5000/api/v1',
    BASE_URL: 'http://localhost:3000'
  }
};

export default {
  ...config.base,
  ...config[process.env.NODE_ENV]
};
