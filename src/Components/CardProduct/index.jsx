import React from "react";
import styles from "./CardProduct.module.css";
import AddToBag from "../AddToBag";
import {Link} from "react-router-dom";
import Rating from "@mui/material/Rating";

const CardProduct = ({ image, title, id, price, stock, discount, score }) => {
  return (
    <div className={styles.cardContaine}>
      <div className={styles.cardImg}>
        <img src={image} alt={title} width="250px" height="150px" />
      </div>
      <Link to={`/productDetail/${id}`}>
        <div className={styles.cardInfo}>
          <h4>{title}</h4>
          <h4>PRECIO:{price}$</h4>
          <p>STOCK:{stock}</p>
          <p>DESCUENTO:{discount}</p>
          {score && <Rating 
          name='read-only'
          value={score}
          readOnly/>}
        </div>
      </Link>
      <AddToBag text={"Añadir al carrito"} id={id} />
    </div>
  );
};

export default CardProduct;
