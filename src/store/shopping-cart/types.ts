import { Action } from "redux";
import { IProduct } from "../product-catalog/types";

export interface IShoppingCartItem {
  key: string;
  product: IProduct;
  quantity: number;
}

export interface IShoppingCartState {
  items: IShoppingCartItem[];
}

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";

export interface IAddToCartAction extends Action<typeof ADD_TO_CART> {
  product: IProduct;
}

export interface IRemoveFromCartAction extends Action<typeof REMOVE_FROM_CART> {
  key: string;
}

export interface IChangeQuantityAction extends Action<typeof CHANGE_QUANTITY> {
  key: string;
  quantity: number;
}

export type ShoppingCartActions =
  | IAddToCartAction
  | IRemoveFromCartAction
  | IChangeQuantityAction;
