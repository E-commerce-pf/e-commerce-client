import React from "react";

import AddToBag from "../AddToBag";
import RemoveToBag from "../RemoveToBag";
import styled from "./CartItem.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeAllProductToBag } from "../../Redux/Actions/productsActions";
import { notifySuccess } from "../../Utils/notifications";

const CartItem = ({ title, price, id, amount }) => {
  const dispatch = useDispatch();

  const remove = (id) => {
    notifySuccess("Producto removido del carrito!");
    dispatch(removeAllProductToBag(id));
  };

  return (
    <div className={styled.container}>
      <button className={styled.btn_quitar} onClick={() => remove(id)}>
        <FaTrashAlt />
        Eliminar producto
      </button>

      <p className={styled.text_shp}>{title}</p>
      <div className={styled.price}>
        <p className={styled.text_shp}>Precio: {price}$</p>
        <p className={styled.text_shp}>Total: {price * amount}$</p>
      </div>
      <div className={styled.button}>
        <RemoveToBag text={"-"} id={id} />
        <p>{amount}</p>
        <AddToBag text={"+"} id={id} />
      </div>
    </div>
  );
};

export default CartItem;
