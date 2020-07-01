import React, { useEffect } from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  IconButton,
  TableHead,
} from "@material-ui/core";
import { ApplicationState } from "./store";
import { connect } from "react-redux";
import { addToCart } from "./store/shopping-cart/actions";
import AddIcon from "@material-ui/icons/Add";
import { loadCatalog } from "./store/product-catalog/actions";
import { IProductCatalogState } from "./store/product-catalog/types";

const mapStateToProps = (state: ApplicationState) => ({
  productCatalog: state.productCatalog,
});

interface IProps {
  productCatalog: IProductCatalogState;
  loadCatalog: typeof loadCatalog;
  addToCart: typeof addToCart;
}

const Component: React.FC<IProps> = (props) => {
  const { loadCatalog, addToCart, productCatalog } = props;

  useEffect(() => {
    loadCatalog();
  }, [loadCatalog]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productCatalog.products.map((product) => (
            <TableRow key={product.itemNr}>
              <TableCell>
                <IconButton
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  <AddIcon />
                </IconButton>
              </TableCell>
              <TableCell>{product.itemNr}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell align="right">
                {product.price.toFixed(2)} kr.
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const ProductCatalog = connect(mapStateToProps, {
  loadCatalog,
  addToCart,
})(Component);
