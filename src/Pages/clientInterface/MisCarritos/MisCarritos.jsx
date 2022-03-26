import React from 'react'
import styles from './MisCarritos.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUser,userId} from '../../../Redux/Actions/userActions';

export const MisCarritos = () => {
    const dispatch= useDispatch();
    const cart= useSelector((state)=> state.userReducer)
    const cartCurrent= useSelector((state)=> state.userReducer.currentUser)
    console.log(cart,'este es la variable cart')
    console.log(cartCurrent,'cartCurrent')
    useEffect(()=>{
        dispatch(getUser())
        dispatch(userId())
        // console.log(getUser())
        // console.log(userId())
    },[]
    )
    return (
        <div className={styles.constMiCar}>carrito</div>
    )
}
