import React from "react";
import styled from "./CartItem.module.scss";

const CartItem = ({ title, image }) => {
  return (
    <div className={styled.container}>
      <p>Nombre: {title}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default CartItem;
