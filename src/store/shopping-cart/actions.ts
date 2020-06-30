import {
  IAddToCartAction,
  ADD_TO_CART,
  IProduct,
  IRemoveFromCartAction,
  REMOVE_FROM_CART,
} from "./types";

export const addToCart = (product: IProduct): IAddToCartAction => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (key: string): IRemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  key,
});
