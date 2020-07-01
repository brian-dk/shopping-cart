import { ILoadCatalogAction, LOAD_CATALOG } from "./types";

export const loadCatalog = (): ILoadCatalogAction => ({
  type: LOAD_CATALOG,
});
