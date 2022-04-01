import React, { useState } from 'react'
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Styles from './ReviewUser.module.scss'
import {IoSendSharp} from "react-icons/io5"

export default function ReviewUser({user,setUser,productsCart}) {
    const [review, setReview] = useState({
        score: '',
        comment:'',
        userId:user.id,
        productId:user.productId
    })
    const handlePostReview=()=>{
        console.log(review,productsCart);
        
    }
    return (
        <div className={Styles.contRev}>
            <h2>Create review</h2>
            <textarea 
            className={Styles.textare}
            placeholder='Write your review.'
            onChange={(e)=>{
                setReview({...review,comment:e.target.value})
            }}/>
            <span>Score: <Rating
                emptySymbol={<AiOutlineStar />}
                fullSymbol={<AiFillStar  />}
            onChange={(value)=>{
                setReview({...review,score:value})
            }}/>
            </span>
            <button className={Styles.btnEdit} onClick={handlePostReview}>Send <IoSendSharp className={Styles.emoticon}/></button>
        </div>
    )
}
