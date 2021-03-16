import { Reducer } from 'redux';

import { ProductT, ReduxAction } from '../../../shared/types';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export type GetProducts = ReduxAction<typeof GET_PRODUCTS>;
export type GetProductsSuccess = ReduxAction<typeof GET_PRODUCTS_SUCCESS, ProductT[]>;
export type GetProductsError = ReduxAction<typeof GET_PRODUCTS_ERROR, Error>;

export type ProductsState = {
  products: ProductT[];
  errors: Error[];
};

export type ProductsAction = GetProducts | GetProductsSuccess | GetProductsError;
export type ProductsReducer = Reducer<ProductsState, ProductsAction>;
