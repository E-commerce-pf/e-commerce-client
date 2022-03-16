import React from "react";

import AddToBag from "../AddToBag";
import RemoveToBag from "../RemoveToBag";
import styled from "./CartItem.module.scss";

const CartItem = ({ title, price, id, amount }) => {
  return (
    <div className={styled.container}>
      <p>Nombre: {title}</p>
      <p>Precio: {price}</p>
      <RemoveToBag text={"-"} id={id} />
      <p>{amount}</p>
      <AddToBag text={"+"} id={id} />
    </div>
  );
};

export default CartItem;
