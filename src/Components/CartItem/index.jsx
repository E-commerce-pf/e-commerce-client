import React from "react";

import AddToBag from "../AddToBag";
import RemoveToBag from "../RemoveToBag";
import styled from "./CartItem.module.scss";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ title, price, id, amount }) => {
  return (
    <div className={styled.container}>
      <button className={styled.btn_quitar}><FaTrashAlt/>Quitar del carrito</button>
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
