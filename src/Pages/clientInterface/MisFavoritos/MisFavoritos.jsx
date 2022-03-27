import React from "react";
import styles from "./MisFavoritos.module.scss";

export const MisFavoritos = ({ Favorites }) => {
  console.log(Favorites);
  return <div className={styles.contMisfav}>Aqui van mis favoritos</div>;
};
