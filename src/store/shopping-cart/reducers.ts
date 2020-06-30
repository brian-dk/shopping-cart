import {
  IShoppingCartState,
  ShoppingCartActions,
  ADD_TO_CART,
  REMOVE_FROM_CART,
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
      return {
        ...state,
        items: [
          ...state.items,
          { key: uuidv4(), product: action.payload, quantity: 1 },
        ],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((value) => value.key !== action.key),
      };
    default:
      return state;
  }
};
