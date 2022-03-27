import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUser} from '../../../Redux/Actions/userActions';
import styles from './MiProductos.module.scss'

export const MiProductos = () => {

    const dispatch= useDispatch();
    // const cart= useSelector((state)=> state.userReducer)
    // const cartCurrent= useSelector((state)=> state.userReducer.currentUser)
    // console.log(cart,'este es la variable cart')
    // console.log(cartCurrent,'cartCurrent')
    const { currentUser,userId } = useSelector(state => state.userReducer)
    console.log(currentUser,'currentUser')
    let transact=userId.Transactions.map(e=>e.cart.productsInCart.map(e=> e.quantity.length))
    console.log(userId,'transactions')
    let productsCart=userId.Transactions.map((e)=>e.cart.productsInCart)
    console.log(productsCart,'productsCart')
    let total=userId.Transactions.map(e=>e.cart.totalPrice)
    console.log(total,'total')
    
    useEffect(()=>{
        dispatch(getUser())
        //dispatch(GetUserId())
        // console.log(getUser())
        // console.log(userId())
    },[]
    )
    return (
        <>
        {userId && 
        <div>
            <div className={styles.contProduc}>Aqui puedes ver tu carrito {userId.name}</div>
            {/* {userId.Transactions.map(e=>e.cart.productsInCart.map(e=>e.map((e)=>
            <div>Total de productos: {e.quantity.length}</div>)
            )
            )}-- */}

            {userId.Transactions? userId.Transactions.map((e)=> e.cart.productsInCart.map((e)=> e.product ?
            <div key={e.product.id}>
            <h2>{e.product.title}</h2>
            <img src={e.product.image} alt='img_carrito'/>
            <h3>Precio:{e.product.price}</h3>
            <h3>Descuento:{e.product.discount}</h3>
            </div> : <h2>no existe</h2>))
            :<h1>no hay</h1>}
            <div>
            {userId.Transactions.map(e=>
            <div>Total: {e.cart.totalPrice}</div>)}
            </div>
            

        </div>
        }
        
        </>
        
    )
}