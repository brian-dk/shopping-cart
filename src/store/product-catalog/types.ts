import { Action } from "redux";

export interface IProduct {
  itemNr: number;
  name: string;
  price: number;
}

export interface IProductCatalogState {
  products: IProduct[];
}

export const LOAD_CATALOG = "LOAD_CATALOG";

export interface ILoadCatalogAction extends Action<typeof LOAD_CATALOG> {}

export type ProductCatalogActions = ILoadCatalogAction;
