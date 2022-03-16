import React from "react";
import styled from "./CartItem.module.scss";

const CartItem = ({ title, price }) => {
  return (
    <div className={styled.container}>
      <p>Nombre: {title}</p>
      <p>Precio: {price}</p>
    </div>
  );
};

export default CartItem;
