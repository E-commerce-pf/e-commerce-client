import React from "react";
import "./CardProduct.css";
import AddToBag from "../AddToBag";

const CardProduct = ({ image, title, id, price, stock, discount }) => {
  return (
    <div className="card-container">
      <div className="card_img">
        <img src={image} alt={title} width="250px" height="150px" />
      </div>
      <div className="card_info">
        <h4>{title}</h4>
        <h4>PRECIO:{price}$</h4>
        <p>STOCK:{stock}</p>
        <p>DESCUENTO:{discount}</p>
        <AddToBag text={"Añadir al carrito"} id={id} />
      </div>
    </div>
  );
};

export default CardProduct;
