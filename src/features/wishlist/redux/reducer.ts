import { ADD_TO_WISHLIST, CLEAR_WISHLIST, REMOVE_FROM_WISHLIST, WishlistReducer, WishlistState } from './types';

const initialState: WishlistState = {
  items: [],
};
export const wishlistReducer: WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      console.log(`Adding to wishlist product with id ${action.payload}`);

      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_FROM_WISHLIST:
      return { ...state, items: state.items.filter((item) => item !== action.payload) };
    case CLEAR_WISHLIST:
      return { ...state, items: [] };
    default:
      return state;
  }
};
