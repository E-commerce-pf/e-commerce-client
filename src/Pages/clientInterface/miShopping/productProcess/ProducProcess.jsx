import React from "react";
import styles from '../productComplete/ProductComplete.module.css';
import { useNavigate } from 'react-router-dom'

export const ProductProcess = ({ Transactions }) => {

    const navigate = useNavigate()

    return (
        <>
            <div className={styles.containerProd}>
                <div className={styles.containerProdInd}>
                    {Transactions ? (
                        Transactions.map((e) =>
                            e.state==='process'&&
                            e.cart.productsInCart.map((e) =>
                                e.product ? (

                                    <div className={styles.prd} key={e.product.id} >
                                        <h2 className={styles.title}>{e.product.title}</h2>
                                        <img
                                            className={styles.imG}
                                            src={e.product.image}
                                            alt="img_carrito"
                                            onClick={() => navigate(`/productDetail/${e.product.id}`)}
                                        />
                                        <h3 className={styles.parrafo}>
                                            Descripcion:{e.product.description}
                                        </h3>
                                    </div>
                                ) : (
                                    <h2 className={styles.title}>This product does not exist</h2>
                                )
                            )
                        )
                    ) : (
                        <h1 className={styles.parrafo}>No hay productos aun</h1>
                    )}
                    <div>
                    </div>
                    
                </div>
            </div>
        </>
    )
};
