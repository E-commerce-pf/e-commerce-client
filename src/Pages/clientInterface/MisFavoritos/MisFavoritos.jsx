import { style } from "@mui/system";
import React, { useState } from "react";
import { MdDeleteForever, MdOutlineAttachMoney } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { OpacityLoader } from "../../../Components/Loaders/Loaders";
import { DeleteFavorite } from "../../../Redux/Actions/userActions";
import styles from "./MisFavoritos.module.scss";

export const MisFavoritos = ({ Favorites, setUser }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const deleteFav = async (favorito) => {
        setLoading(true)
        try {
            await dispatch(DeleteFavorite(favorito))

            setUser(user => {
                return {
                    ...user,
                    Favorites: user.Favorites.filter(fav => fav.id !== favorito.id)
                }
            })

        } catch (error) {
            toast.error("Algo salió mal")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className={styles.contFav}>
            {
                Favorites.map(el => (

                    <div key={el.id} className={styles.contCard}>
                        <div className={styles.delete}><MdDeleteForever className={styles.svg} onClick={() => deleteFav(el)} /></div>
                        <div onClick={() => navigate(`/productDetail/${el.Product.id}`)} className={styles.cardInfo}>
                            <h3>{el.Product.title}</h3>
                            <img src={el.Product.image} alt="img" width='200px' height='220px' />
                            <p className={styles.parrafo}>{el.Product.description}</p>
                            <div className={styles.cardInfo1}>
                                <span>Precio: <MdOutlineAttachMoney />{el.Product.price}. </span>
                                <span>Descuento:{el.Product.discount * 100} %.</span>
                                <span>Stock: {el.Product.stock} uds.</span>
                            </div>
                        </div>
                    </div>

                ))
            }
            {
                loading && <OpacityLoader />
            }
        </div>
    )
};
