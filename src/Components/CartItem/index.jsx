import React from "react";

import AddToBag from "../AddToBag";
import RemoveToBag from "../RemoveToBag";
import styled from "./CartItem.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeAllProductToBag } from "../../Redux/Actions/productsActions";
import { notifySuccess } from "../../Utils/notifications";
import {
  removeToLocalStorageId,
  removeProductToCartDb,
} from "../../Utils/shoppingBag";

const CartItem = ({ title, price, id, amount, discount }) => {
  const dispatch = useDispatch();
  const bagProducts = useSelector((store) => store.productsReducer.bagProducts);
  const user = useSelector((store) => store.userReducer.currentUser);
  const remove = (id) => {
    notifySuccess("Producto removido del carrito!");
    dispatch(removeAllProductToBag(id));
    removeToLocalStorageId(id);
    if (user) removeProductToCartDb(id, user.userId);
  };
  return (
    <div className={styled.container}>
      <button className={styled.btn_quitar} onClick={() => remove(id)}>
        <FaTrashAlt />
        Remove product
      </button>
      <p className={styled.text_shp}>{title}</p>
      <div className={styled.price}>
        <p className={styled.text_shp}>Precio: {discount?<span className={styled.discount}>{price}</span>:null} {price*(1-discount)}$</p>
        <p className={styled.text_shp}>Total: {price*(1-discount) * amount}$</p>
      </div>
      <div className={styled.button}>
        <RemoveToBag text={"-"} id={id} user={user} />
        <p>{amount}</p>
        <AddToBag text={"+"} id={id} user={user} bagProducts={bagProducts} />
      </div>
    </div>
  );
};

export default CartItem;
