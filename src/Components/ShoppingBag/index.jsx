import { Badge, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setIdBagProducts } from "../../Redux/Actions/productsActions";
import {
  addToLocalStorageIds,
  getToLocalStorageIds,
} from "../../Utils/shoppingBag";
import Swal from "sweetalert2";
import CartShoppingBag from "../CartShoppingBag";
import "./ShoppingBag.modules.css";

const ShoppingBag = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const bagProducts = useSelector((store) => store.productsReducer.bagProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const ids = getToLocalStorageIds();
    dispatch(setIdBagProducts(ids));
  }, [dispatch]);

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTotalProducts = (products) => {
    return products.reduce((acc, product) => acc + product.amount, 0);
  };

  const deleteCart = () => {
    Swal.fire({
      title: "Seguro deseas eliminar el carrito de compras?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Listo", "", "success");
        dispatch(setIdBagProducts([]));
      }
    });
  };

  return (
    <div>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartShoppingBag cartItems={bagProducts} deleteCart={deleteCart} />
      </Drawer>
      <button className="shopping_container" onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalProducts(bagProducts)} color="error">
          <BiShoppingBag />
        </Badge>
      </button>
    </div>
  );
};

export default ShoppingBag;
