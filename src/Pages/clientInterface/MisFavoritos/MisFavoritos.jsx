import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetFavoritesUserId } from '../../../Redux/Actions/userActions'
import styles from './MisFavoritos.module.scss'

export const MisFavoritos = () => {

    return (

        <div className={styles.contMisfav}>este es mi id</div> 
    )
}

