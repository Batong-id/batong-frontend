import axios from 'axios';

import config from './config';

axios.defaults.baseURL = config.API_BASE_URL;
export const login = '/auth/login/';
export const regist = '/auth/register/';
export const forgotPassword = '/auth/forgotPassword/';
export const resetPassword = (token) => `/auth/resetPassword/${token}`;
export const user = '/user/';
// export const urlRefreshToken = '/auth/token/refresh/';

//store
export const allStore = '/store/';
export const getOwnStore = '/store/mystore/';
export const addStore = '/store/create/';
export const updateStore = (storeId) => `/store/update/${storeId}`;
export const getStoreBySlug = (storeSlug) => `/store/slug/${storeSlug}`;
export const deleteStore = (storeId) => `/store/de/${storeId}`;
