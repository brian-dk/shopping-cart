import { combineReducers, createStore } from "redux";
import { shoppingCartReducer } from "./shopping-cart/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ shoppingCart: shoppingCartReducer });

export type ApplicationState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
