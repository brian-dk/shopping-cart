import {
  IAddToCartAction,
  ADD_TO_CART,
  IProduct,
  IRemoveFromCartAction,
  REMOVE_FROM_CART,
  IChangeQuantityAction,
  CHANGE_QUANTITY,
} from "./types";

export const addToCart = (product: IProduct): IAddToCartAction => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (key: string): IRemoveFromCartAction => ({
  type: REMOVE_FROM_CART,
  key,
});

export const changeQuantity = (
  key: string,
  quantity: number
): IChangeQuantityAction => ({
  type: CHANGE_QUANTITY,
  key,
  quantity,
});
