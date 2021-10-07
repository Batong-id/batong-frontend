import axios from 'axios';

import config from '../config';

axios.defaults.baseURL = config.API_BASE_URL;
export const product = '/product';
export const productById = (productId) => `/product/id/${productId}`;
export const productBySlug = (productSlug) => `/product/slug/${productSlug}`;
export const productByCategory = (productCategory) =>
  `/product/category/${productCategory}`;
export const addProduct = '/product/create';
export const deleteProductById = (productId) => `/product/delete/${productId}`;
export const updateProductById = (productId) => `/product/update/${productId}`;
