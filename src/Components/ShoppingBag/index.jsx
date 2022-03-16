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

const ShoppingBag = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const bagProducts = useSelector((store) => store.productsReducer.bagProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const ids = getToLocalStorageIds();
    console.log(ids);
    dispatch(setIdBagProducts(ids));
    return () => {
      addToLocalStorageIds(bagProducts.map((product) => product.id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartShoppingBag cartItems={bagProducts} />
      </Drawer>
      <button style={{ fontSize: "2em" }} onClick={() => setCartOpen(true)}>
        <Badge badgeContent={bagProducts.length} color="error">
          <BiShoppingBag />
        </Badge>
      </button>
    </div>
  );
};

export default ShoppingBag;
