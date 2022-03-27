import React from 'react'
import styles from './MisCarritos.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUser,GetUserId} from '../../../Redux/Actions/userActions';

export const MisCarritos = () => {
    const dispatch= useDispatch();
    
    const { currentUser } = useSelector(state => state.userReducer)
    
    // useEffect(()=>{
    //     dispatch(getUser())
    //     //dispatch(GetUserId())
    // },[]
    // )
    return (
        <>

        <div>
            <div className={styles.constMiCar}>Aqui puedes ver tu carrito </div>

        </div>
        
        
        </>
        
    )
}
