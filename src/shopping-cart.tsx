import React from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  IconButton,
  TextField,
} from "@material-ui/core";
import { ApplicationState } from "./store";
import { connect } from "react-redux";
import {
  removeFromCart,
  addToCart,
  changeQuantity,
} from "./store/shopping-cart/actions";
import { IShoppingCartState } from "./store/shopping-cart/types";
import DeleteIcon from "@material-ui/icons/Delete";

const mapStateToProps = (state: ApplicationState) => ({
  shoppingCart: state.shoppingCart,
});

interface IProps {
  shoppingCart: IShoppingCartState;
  addToCart: typeof addToCart;
  removeFromCart: typeof removeFromCart;
  changeQuantity: typeof changeQuantity;
}

const Component: React.FC<IProps> = (props) => {
  const onQuantityChanged = (carItemKey: string, value: string) => {
    const quantity = parseInt(value);
    if (quantity > 0) {
      props.changeQuantity(carItemKey, quantity);
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {props.shoppingCart.items.map((cartItem) => (
            <TableRow key={cartItem.key}>
              <TableCell>
                <IconButton
                  onClick={() => {
                    props.removeFromCart(cartItem.key);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
              <TableCell>{cartItem.product.name}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={cartItem.quantity}
                  onChange={(value) => {
                    onQuantityChanged(cartItem.key, value.target.value);
                  }}
                />
              </TableCell>
              <TableCell align="right">
                {cartItem.product.price * cartItem.quantity} kr.
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const ShoppingCart = connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  changeQuantity,
})(Component);
