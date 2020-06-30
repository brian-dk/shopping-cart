import React from "react";
import {
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  IconButton,
} from "@material-ui/core";
import { ApplicationState } from "./store";
import { connect } from "react-redux";
import { removeFromCart, addToCart } from "./store/shopping-cart/actions";
import { IShoppingCartState } from "./store/shopping-cart/types";
import DeleteIcon from "@material-ui/icons/Delete";

const mapStateToProps = (state: ApplicationState) => ({
  shoppingCart: state.shoppingCart,
});

interface IProps {
  shoppingCart: IShoppingCartState;
  addToCart: typeof addToCart;
  removeFromCart: typeof removeFromCart;
}

const ShoppingCart: React.FC<IProps> = (props) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          props.addToCart({ itemNr: 1, name: "Product 1", price: 2.5 });
        }}
      >
        Add
      </Button>
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
                <TableCell>{cartItem.quantity}</TableCell>
                <TableCell>
                  {cartItem.product.price * cartItem.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  ShoppingCart
);
