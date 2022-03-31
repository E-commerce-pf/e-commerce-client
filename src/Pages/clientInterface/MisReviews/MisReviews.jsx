import React,{useEffect} from 'react'
import styles from './MisReviews.module.css'
import {reviewUserId} from '../../../Redux/Actions/userId';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from "react-router-dom";


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
        // <div key={e.ProductId}>
        //     <div>
        //     <div>{e.Product.title}</div>
        //     <div>{e.Product.description}</div>
        //     <img src={e.Product.image} alt='img_prod'/>
        //     <div>{e.score}</div>
        //     <div>{e.comment}</div>
        //     </div>
            
        //     <div>
        //     <Link to={`/productDetail/${e.ProductId}`}>ver producto</Link>
            
        //     </div>

        // </div>
        <div>v</div>
    )):
    <div>cargando</div>
    }
        </>
    )
}
