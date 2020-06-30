import React from "react";
import ReactDOM from "react-dom";
import ShoppingCart from "./shopping-cart";
import "fontsource-roboto";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ShoppingCart />
  </Provider>,
  document.getElementById("root")
);
