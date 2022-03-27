import React, {useState } from 'react';
import { BiGift } from 'react-icons/bi';
import { MdOutlineRateReview } from 'react-icons/md';
import { MiProductos } from './MisProductos/MiProductos';
import { MisFavoritos } from './MisFavoritos/MisFavoritos';
import { NavbarClient } from './navbarCLient/NavbarClient';
import { AiOutlineStar } from 'react-icons/ai';
import styles from './ClientHome.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { MisReviews } from './MisReviews/MisReviews';
export const ClientHome = () => {

    const navigate = useNavigate()
    const [misReview, setMisReview] = useState(false)
    const [miFavorito, setMiFavorito] = useState(false)
    const [miProducto, setMiProducto] = useState(false)

    const openReview = () => {
        setMisReview(true)
        setMiFavorito(false)
        setMiProducto(false)
    }
    const openProduct = () => {
        setMiProducto(true)
        setMisReview(false)
        setMiFavorito(false)
    }
    const openFav = () => {
        setMiFavorito(true)
        setMisReview(false)
        setMiProducto(false)
    }
    const { currentUser} = useSelector(state => state.userReducer)

    console.log(currentUser);
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
                <button onClick={openReview}> <MdOutlineRateReview className={styles.btn} /> Mis reviews</button>
                <button onClick={openProduct}> <BiGift className={styles.btn} /> Mis productos</button>
                <button onClick={openFav}> <AiOutlineStar className={styles.btn} />Mis favoritos</button>
            </div>
            <>
                {
                    misReview?<MisReviews/> :miFavorito ? <MisFavoritos /> : miProducto ? <MiProductos /> : false
                }
            </>
        </div>
    )
}
