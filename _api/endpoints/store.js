import axios from 'axios';

import config from '../config';

axios.defaults.baseURL = config.API_BASE_URL;
//store
export const allStore = '/store/';
export const getOwnStore = '/store/mystore/';
export const addStore = '/store/create/';
export const updateStore = (storeId) => `/store/update/${storeId}`;
export const getStoreBySlug = (storeSlug) => `/store/slug/${storeSlug}`;
export const deleteStore = (storeId) => `/store/de/${storeId}`;
