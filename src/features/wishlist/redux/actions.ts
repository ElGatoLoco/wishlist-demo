import {
  ADD_TO_WISHLIST,
  AddToWishlist,
  CLEAR_WISHLIST,
  ClearWishlist,
  REMOVE_FROM_WISHLIST,
  RemoveFromWishlist,
} from './types';

export const addToWishlist = (productId: number): AddToWishlist => ({
  type: ADD_TO_WISHLIST,
  payload: productId,
});

export const removeFromWishlist = (productId: number): RemoveFromWishlist => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});

export const clearWishlist = (): ClearWishlist => ({
  type: CLEAR_WISHLIST,
  payload: null,
});
