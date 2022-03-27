import React, { useEffect, useState } from 'react';
import { BiGift } from 'react-icons/bi';
import { BsCart4 } from 'react-icons/bs';
import { MiProductos } from './MisProductos/MiProductos';
import { MisFavoritos } from './MisFavoritos/MisFavoritos';
import { NavbarClient } from './navbarCLient/NavbarClient';
import { AiOutlineStar } from 'react-icons/ai';
import styles from './ClientHome.module.scss';
import { MisCarritos } from './MisCarritos/MisCarritos';
import { useSelector } from 'react-redux';
import { notifySuccess } from '../../Utils/notifications';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {GetUserId} from '../../Redux/Actions/userActions'
export const ClientHome = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [miCarrito, setMiCarrito] = useState(false)
    const [miFavorito, setMiFavorito] = useState(false)
    const [miProducto, setMiProducto] = useState(false)

    const openCar = () => {
        setMiCarrito(true)
        setMiFavorito(false)
        setMiProducto(false)
    }
    const openProduct = () => {
        setMiProducto(true)
        setMiCarrito(false)
        setMiFavorito(false)
    }
    const openFav = () => {
        setMiFavorito(true)
        setMiCarrito(false)
        setMiProducto(false)
    }
    const { currentUser} = useSelector(state => state.userReducer)


    useEffect(() => {
        dispatch(GetUserId(currentUser.userId))
        notifySuccess(`Bienvenid@ ${currentUser.name}`)
    }, [currentUser]);

    if (currentUser === null) {

        return (
            <>
                <div className="title_login">
                    <h1>Debe iniciar sesión para ver esta interfaz</h1>
                    <button onClick={() => navigate("/")} className="btn">
                        Aceptar
                    </button>
                </div>
            </>
        )
    }


    return (
        <div className={styles.contClient}>
            <NavbarClient />
            <div className={styles.contButton}>
                <button onClick={openCar}> <BsCart4 className={styles.btn} /> Mi carrito</button>
                <button onClick={openProduct}> <BiGift className={styles.btn} /> Mis productos</button>
                <button onClick={openFav}> <AiOutlineStar className={styles.btn} />Mis favoritos</button>
            </div>
            <>
                {
                    miCarrito ? <MisCarritos /> : miFavorito ? <MisFavoritos /> : miProducto ? <MiProductos /> : false
                }
            </>
        </div>
    )
}
