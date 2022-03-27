import React from 'react'
import styles from './MiProductos.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUser,GetUserId} from '../../../Redux/Actions/userActions';

export const MisProductos = () => {
    const dispatch= useDispatch();

    const { currentUser,userId } = useSelector(state => state.userReducer)
    
    let productsCart=userId.Transactions.map((e)=>e.cart.productsInCart)
    console.log(productsCart,'productsCart')
    let total=userId.Transactions.map(e=>e.cart.totalPrice)
    console.log(total,'total')
    
    useEffect(()=>{
        dispatch(getUser())
        //dispatch(GetUserId())
    },[]
    )

    return (
        <>
        {userId && 
        <div className={styles.containerProd}>
            <div className={styles.constMiCar}>Aqui puedes ver tus productos comprados {userId.name}</div>

            <div className={styles.containerProdInd}>
            {userId.Transactions? userId.Transactions.map((e)=> e.cart.productsInCart.map((e)=> e.product ?
            <div className={styles.prd} key={e.product.id}>
            <h2 className={styles.title}>{e.product.title}</h2>
            <img className={styles.imG} src={e.product.image} alt='img_carrito'/>
            {/* <h3>Precio:{e.product.price}</h3> */}
            <h3 className={styles.parrafo}>Descripcion:{e.product.description}</h3>
            </div> : <h2>no existe</h2>))
            :<h1 className={styles.parrafo}>No hay productos aun</h1>}
            <div>
            {/* {userId.Transactions.map(e=>
            <div>Total: {e.cart.totalPrice}</div>)} */}
            </div>
            </div>
        </div>
        }
        
        </>
        
    )
}