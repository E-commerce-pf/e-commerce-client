import React from 'react'
import { useSelector } from 'react-redux'
import styles from './MiProductos.module.scss'
export const MiProductos = () => {

    const { userId } = useSelector(state => state.userReducer)
    
    return (

        <div className={styles.contProduc}>Aqui van todos los productos a mi nombre </div>
    )
}
