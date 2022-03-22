import React from "react";
import styles from "./CardProduct.module.css";
import AddToBag from "../AddToBag";
import {Link} from "react-router-dom";

const CardProduct = ({ image, title, id, price, stock, discount }) => {
  return (
    <div className={styles.cardContaine}>
      <Link to={`/productDetail/${id}`}>
        <div className={styles.cardImg}>
          <img src={image} alt={title} width="250px" height="150px" />
        </div>
        <div className={styles.cardInfo}>
          <h4>{title}</h4>
          <h4>PRECIO:{price}$</h4>
          <p>STOCK:{stock}</p>
          <p>DESCUENTO:{discount}</p>
        </div>
      </Link>
      <AddToBag text={"Añadir al carrito"} id={id} />
    </div>
  );
};

export default CardProduct;
