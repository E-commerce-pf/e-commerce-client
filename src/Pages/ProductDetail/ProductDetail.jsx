import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddToBag from '../../Components/AddToBag';
import { setProductInfo } from '../../Redux/Actions/productsActions';
import style from './ProductDetail.module.scss'

export const ProductDetail = () => {
    let dispatch= useDispatch();
    const {productId}=useParams();
    let product=useSelector(state=>state.productsReducer.productInfo)||{};
    let [index,setIndex]=useState(0);
    let prom= ()=>{
        return product.Reviews?.reduce((acc, { score }) => acc += score, 0) / product.Reviews?.length || 0
    }
    let next=()=>{
        if(index+3<product.Reviews?.length)
        setIndex(index+3);
    }
    let prev=()=>{
        if(index-3>=0)
        setIndex(index-3);
    }
    useEffect(()=>{
        dispatch(setProductInfo(productId));
    },[dispatch,productId]);
    return (
        <div>
            <div className={style.container}>
                <div><img src={product.image} alt="product image"/></div>
                <div>
                    <h2>{product.title&&product.title[0].toUpperCase()+product.title?.slice(1)}</h2>
                    {prom()} <span className={style.opinion}>{product.Reviews?.length} opiniones</span>
                    <p>{product.description}</p>
                </div>
                <div className={style.buyContainer}>
                    <p className={style.price}>$ {product.price}</p>
                    <p>{product.stock} disponibles</p>
                    <p>{product.sales} vendidos</p>
                    <div className={style.buttonContainer}>
                    <AddToBag text={"Add to cart"} id={productId} />
                    </div>
                </div>
            </div>
            <div>
                <h2>Comments</h2>
                <div className={style.containerScore}>
                    {product.Reviews?.length?product.Reviews?.slice(index,index+3).map((r,i)=>
                        <div key={i}>
                            <p>{r.score}</p>
                            <p>{r.comment[0].toUpperCase()+r.comment.slice(1)}</p>
                        </div>
                    ):<p>This product has no reviews</p>}
                    <div className={style.buttons}>
                        {index-3>=0&&<button className={style.prev} onClick={prev}>Previous</button>}
                        {index+3<product.Reviews?.length&&<button className={style.next} onClick={next}>Next</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}