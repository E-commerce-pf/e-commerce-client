import React from 'react'
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Styles from './ReviewUser.module.scss'

export default function ReviewUser() {
    return (
        <div className={Styles.contRev}>
            <h2>Create review</h2>
            <textarea 
            className={Styles.textare}
            placeholder='Write your review.'/>
            <span>Scrore: <Rating
                emptySymbol={<AiOutlineStar />}
                fullSymbol={<AiFillStar  />}
            />
            </span>
            <button className={Styles.btn}>Send</button>
        </div>
    )
}
