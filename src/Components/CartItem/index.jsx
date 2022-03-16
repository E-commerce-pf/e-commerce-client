import React from "react";

import AddToBag from "../AddToBag";
import RemoveToBag from "../RemoveToBag";
import styled from "./CartItem.module.scss";

const CartItem = ({ title, price, id, amount }) => {
  return (
    <div className={styled.container}>
      <p>Nombre: {title}</p>
      <div className={styled.price}>
        <p>Precio: {price} $</p>
        <p>Total: {price * amount} $</p>
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
