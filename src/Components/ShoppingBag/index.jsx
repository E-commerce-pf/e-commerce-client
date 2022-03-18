/* eslint-disable react-hooks/exhaustive-deps */
import { Badge, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setIdBagProducts } from "../../Redux/Actions/productsActions";
import {
  addToLocalStorageIds,
  getToLocalStorageIds,
} from "../../Utils/shoppingBag";
import CartShoppingBag from "../CartShoppingBag";
import './ShoppingBag.modules.css';

const ShoppingBag = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const bagProducts = useSelector((store) => store.productsReducer.bagProducts);
  const dispatch = useDispatch();
  const ids = getToLocalStorageIds();

  useEffect(() => {
    dispatch(setIdBagProducts(ids));
    return () => {
      addToLocalStorageIds(
        bagProducts.map((product) => {
          return {
            id: product.id,
            amount: product.amount,
          };
        })
      );
    };
  }, []);

  const getTotalProducts = (products) => {
    return products.reduce((acc, product) => acc + product.amount, 0);
  };

  return (
    <div >
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartShoppingBag cartItems={bagProducts} />
      </Drawer>
      <button className="shopping_container"  onClick={() => setCartOpen(true)}>
        <Badge  badgeContent={getTotalProducts(bagProducts)} color="error">
          <BiShoppingBag />
        </Badge>
      </button>
    </div>
  );
};

export default ShoppingBag;
