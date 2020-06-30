import { Action } from "redux";

export interface IProduct {
  itemNr: number;
  name: string;
  price: number;
}

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

export interface IAddToCartAction extends Action<typeof ADD_TO_CART> {
  payload: IProduct;
}

export interface IRemoveFromCartAction extends Action<typeof REMOVE_FROM_CART> {
  key: string;
}

export type ShoppingCartActions = IAddToCartAction | IRemoveFromCartAction;
