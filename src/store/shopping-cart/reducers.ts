import {
  IShoppingCartState,
  ShoppingCartActions,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QUANTITY,
} from "./types";
import { v4 as uuidv4 } from "uuid";

const initialState: IShoppingCartState = {
  items: [],
};

export const shoppingCartReducer = (
  state = initialState,
  action: ShoppingCartActions
): IShoppingCartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCartItems = [...state.items];
      const existingItem = newCartItems.find(
        (item) => item.product.itemNr === action.product.itemNr
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newCartItems.push({
          key: uuidv4(),
          product: action.product,
          quantity: 1,
        });
      }
      return {
        ...state,
        items: newCartItems,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((value) => value.key !== action.key),
      };
    case CHANGE_QUANTITY:
      const newItems = [...state.items];
      const item = newItems.find((item) => item.key === action.key);
      if (item) item.quantity = action.quantity;
      return {
        ...state,
        items: newItems,
      };
    default:
      return state;
  }
};
