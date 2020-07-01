import {
  IAddToCartAction,
  ADD_TO_CART,
  IRemoveFromCartAction,
  REMOVE_FROM_CART,
  IChangeQuantityAction,
  CHANGE_QUANTITY,
} from "./types";
import { IProduct } from "../product-catalog/types";

export const addToCart = (product: IProduct): IAddToCartAction => ({
  type: ADD_TO_CART,
  product,
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
