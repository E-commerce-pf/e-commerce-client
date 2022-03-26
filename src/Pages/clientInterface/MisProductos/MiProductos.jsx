import React from 'react'
import { useSelector } from 'react-redux'
import styles from './MiProductos.module.scss'
export const MiProductos = () => {

    const { Transactions } = useSelector(state => state.userReducer.userId)
    
    let u=Transactions.map(el=>(el.cart.productsInCart))
    u=u.map(el=>(el.map(el=>(el.product))))
    console.log(u);
    return (

        <div className={styles.contProduc}>{u.id}</div>
    )
}
