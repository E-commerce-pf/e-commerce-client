import React,{useEffect} from 'react'
import styles from './MisReviews.module.css'
import {reviewUserId} from '../../../Redux/Actions/userId';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Loading from '../../../Components/Loading';


export const MisReviews = ({userId}) => {
const dispatch= useDispatch()
// const {userId}= useParams()
console.log(userId,'userID')
const reviewsUser= useSelector((state) => state.reduceruserID.idState)
console.log(reviewsUser,' reviews user')

useEffect(()=>{
dispatch(reviewUserId(userId))
},[dispatch,userId])
console.log(reviewUserId,'useEffect')
    return (
        <>
        {reviewsUser !== null? 
    reviewsUser.map((e)=>(
        <div className={styles.containerR} key={e.ProductId}>
            <div className={styles.containerProd}> 
            <div className={styles.title}>{e.Product.title}</div>
            <div className={styles.desc}>{e.Product.description}</div>
            <div className={styles.score}>
            {e.score && <Rating name="read-only" value={e.score} readOnly />}
            </div>
            <div className={styles.desc}>{e.comment}</div>
            <div className={styles.btn1}>
            <Link className={styles.btn} to={`/productDetail/${e.ProductId}`}>ver producto</Link>
            </div>
            </div>
            <div>
            <img className={styles.Img} src={e.Product.image} alt='img_prod'/>
            </div>
        </div>
       
    )):
    <div>
        <Loading/>
    </div>
    }
        </>
    )
}
