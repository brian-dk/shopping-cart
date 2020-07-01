import { combineReducers, createStore } from "redux";
import { shoppingCartReducer } from "./shopping-cart/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { productCatalogReducer } from "./product-catalog/reducers";

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  productCatalog: productCatalogReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
