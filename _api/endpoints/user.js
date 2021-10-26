import axios from 'axios';

import config from '../config';

axios.defaults.baseURL = config.API_BASE_URL;
export const login = '/auth/login/';
export const regist = '/auth/register/';
export const forgotPassword = '/auth/forgotPassword/';
export const resetPassword = (token) => `/auth/resetPassword/${token}`;
export const user = '/user/';
