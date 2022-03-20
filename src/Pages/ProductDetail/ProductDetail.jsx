import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddToBag from '../../Components/AddToBag';
import style from './ProductDetail.module.scss'

export const ProductDetail = () => {
    let dispach= useDispatch();
    const {productId}=useParams();
    let mockProduct={
        title:"titulo",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        image:"https://http2.mlstatic.com/D_NQ_NP_787221-MLA48007684849_102021-O.webp",
        price:3,
        stock:20,
        sales:3,
        Reviews:[
            {comment:"muy bueno",score:100},
            {comment:"mediano",score:50},
            {comment:"mediano",score:50},
            {comment:"mediano",score:50},
            {comment:"mcopado",score:50},
        ]
    }
    //let productDetail=useSelector(state=>state.productsReducer.product)
    let [product,setProduct]= useState({});
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
        setProduct(mockProduct);
    },[])
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
                    {product.Reviews?.slice(index,index+3).map(r=>
                        <>
                            <p>{r.score}</p>
                            <p>{r.comment[0].toUpperCase()+r.comment.slice(1)}</p>
                        </>
                    )}
                    <div className={style.buttons}>
                        {index-3>=0&&<button className={style.prev} onClick={prev}>Previous</button>}
                        {index+3<product.Reviews?.length&&<button className={style.next} onClick={next}>Next</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}