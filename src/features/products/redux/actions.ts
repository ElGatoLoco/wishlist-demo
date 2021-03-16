import { ProductT } from '../../../shared/types';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GetProducts,
  GetProductsError,
  GetProductsSuccess,
} from './types';

export const getProducts = (): GetProducts => ({
  type: GET_PRODUCTS,
  payload: null,
});

export const getProductsSuccess = (products: ProductT[]): GetProductsSuccess => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductsError = (error: Error): GetProductsError => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});
