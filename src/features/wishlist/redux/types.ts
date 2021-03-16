import { Reducer } from 'redux';

import { ReduxAction } from '../../../shared/types';

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const CLEAR_WISHLIST = 'CLEAR_WISHLIST';

export type AddToWishlist = ReduxAction<typeof ADD_TO_WISHLIST, number>;
export type RemoveFromWishlist = ReduxAction<typeof REMOVE_FROM_WISHLIST, number>;
export type ClearWishlist = ReduxAction<typeof CLEAR_WISHLIST>;

export type WishlistState = {
  items: number[];
};

export type WishlistAction = AddToWishlist | RemoveFromWishlist | ClearWishlist;
export type WishlistReducer = Reducer<WishlistState, WishlistAction>;
