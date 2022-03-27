import { style } from "@mui/system";
import React from "react";
import { MdDeleteForever, MdOutlineAttachMoney } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteFavorite } from "../../../Redux/Actions/userActions";
import styles from "./MisFavoritos.module.scss";

export const MisFavoritos = ({ Favorites }) => {

    let Fav=Favorites.map(el=>(el.Product))
    const navigate =useNavigate()
    const dispatch = useDispatch();
console.log(Favorites.userId)
    const deleteFav=()=>{
        dispatch(DeleteFavorite())
    }
    return (
        <>
        <div className={styles.contFav}>
        {
            Fav.map(el=>(
                
                <div className={styles.contCard}>
                    <div className={styles.delete}><MdDeleteForever className={styles.svg} onClick={deleteFav}/></div>
                        <div onClick={()=>navigate(`/productDetail/${el.id}`)} className={styles.cardInfo}>
                        <h3>{el.title}</h3>
                        <img src={el.image} alt="img" width='200px' height='220px' />
                        <p>{el.description}</p>
                        <div className={styles.cardInfo1}>
                            <span>Precio: <MdOutlineAttachMoney/>{el.price}. </span>
                            <span>Descuento:{el.discount * 100} %.</span>
                            <span>Stock: {el.stock} uds.</span>
                        </div>
                        </div>
                    </div>
                
            ))
        }
        </div>
        </>
    )
};
