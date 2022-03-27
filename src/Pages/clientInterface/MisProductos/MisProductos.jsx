import React from "react";
import styles from "./MiProductos.module.css";

export const MisProductos = ({ Transactions, name }) => {
  
  console.log(Transactions);

  let productsCart = Transactions.map((e) => e.cart.productsInCart);
  console.log(productsCart, "productsCart");
  let total = Transactions.map((e) => e.cart.totalPrice);
  console.log(total, "total");

  return (
    <>
      <div className={styles.containerProd}>
        <div className={styles.constMiCar}>
          Aqui puedes ver tus productos comprados {name}
        </div>

        <div className={styles.containerProdInd}>
          {Transactions ? (
            Transactions.map((e) =>
              e.cart.productsInCart.map((e) =>
                e.product ? (
                  <div className={styles.prd} key={e.product.id}>
                    <h2 className={styles.title}>{e.product.title}</h2>
                    <img
                      className={styles.imG}
                      src={e.product.image}
                      alt="img_carrito"
                    />
                    {/* <h3>Precio:{e.product.price}</h3> */}
                    <h3 className={styles.parrafo}>
                      Descripcion:{e.product.description}
                    </h3>
                  </div>
                ) : (
                  <h2>no existe</h2>
                )
              )
            )
          ) : (
            <h1 className={styles.parrafo}>No hay productos aun</h1>
          )}
          <div>
            {/* {userId.Transactions.map(e=>
            <div>Total: {e.cart.totalPrice}</div>)} */}
          </div>
        </div>
      </div>
      )
    </>
  );
};
