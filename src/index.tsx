import React from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";
import { Provider } from "react-redux";
import { store } from "./store";
import { ShoppingCart } from "./shopping-cart";
import { ProductCatalog } from "./product-catalog";
import { Grid, Card } from "@material-ui/core";

ReactDOM.render(
  <Provider store={store}>
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Card>
          <ProductCatalog />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <ShoppingCart />
        </Card>
      </Grid>
    </Grid>
  </Provider>,
  document.getElementById("root")
);
