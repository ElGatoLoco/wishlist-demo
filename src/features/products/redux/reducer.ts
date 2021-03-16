import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, ProductsReducer, ProductsState } from './types';

const initialState: ProductsState = {
  products: [],
  errors: [],
};
export const productsReducer: ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, errors: [] };
    case GET_PRODUCTS_ERROR:
      return { ...state, errors: [...state.errors, action.payload] };
    default:
      return state;
  }
};
