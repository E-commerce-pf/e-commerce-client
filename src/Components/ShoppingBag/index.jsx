import { Badge, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useDispatch, useSelector } from "react-redux";
import { setIdBagProducts } from "../../Redux/Actions/productsActions";
import { getCart } from "../../Redux/Actions/userActions";
import {
  getToLocalStorageIds,
  removeToLocalStorageIds,
  removeProductToCartDb,
} from "../../Utils/shoppingBag";
import Swal from "sweetalert2";
import CartShoppingBag from "../CartShoppingBag";
import "./ShoppingBag.modules.css";
import { notifyError } from "../../Utils/notifications";

const ShoppingBag = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const bagProducts = useSelector((store) => store.productsReducer.bagProducts);
  const cartChange = useSelector((store) => store.productsReducer.cartChange);
  const user = useSelector((store) => store.userReducer.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const ids = getToLocalStorageIds();
    dispatch(setIdBagProducts(ids));
    if (user&&cartChange) {
      dispatch(getCart(user.userId));
    }
  }, [dispatch]);

  const getTotalProducts = (products) => {
    return products.reduce((acc, product) => acc + product.amount, 0);
  };

  const deleteCart = () => {
    if (bagProducts.length !== 0) {
      setCartOpen(false);
      Swal.fire({
        title: "Are you sure do you want to empty the shopping cart?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Done", "", "success");
          dispatch(setIdBagProducts([]));
          removeToLocalStorageIds();
          if (user) removeProductToCartDb("all", user.userId);
        }
      });
    } else {
      notifyError("You don't have products in the cart!");
    }
  };

  return (
    <>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartShoppingBag cartItems={bagProducts} deleteCart={deleteCart} />
      </Drawer>
      <div onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalProducts(bagProducts)} color="error">
          <ShoppingBagIcon />
        </Badge>
      </div>
    </>
  );
};

export default ShoppingBag;
