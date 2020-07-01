import {
  IProductCatalogState,
  ProductCatalogActions,
  LOAD_CATALOG,
  IProduct,
} from "./types";

const initialState: IProductCatalogState = {
  products: [],
};

export const productCatalogReducer = (
  state = initialState,
  action: ProductCatalogActions
): IProductCatalogState => {
  switch (action.type) {
    case LOAD_CATALOG:
      return {
        ...state,
        products: productsDB,
      };
    default:
      return state;
  }
};

const productsDB: IProduct[] = [
  { itemNr: 1, name: "Some product", price: 25 },
  { itemNr: 2, name: "Expensive product", price: 3500 },
  { itemNr: 3, name: "Cheap product", price: 1.5 },
];
