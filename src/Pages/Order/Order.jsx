import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Components/Footer';
import { Navbar } from '../../Components/Navbar/Navbar';
import style from './Order.module.scss'
import { createTransaction } from '../../Utils/transaction';

export default function Order() {
    const user = useSelector((store) => store.userReducer.currentUser);
    const cart = useSelector((store) => store.productsReducer.bagProducts);
    const [bought, setBought] = useState(false);
    const initiateTransaction=(description)=>{
      setBought(!bought);
      createTransaction(user.userId,description);
    }
  return (
    <div>
        <Navbar filter={false} noCart={true}/>
            <div className={style.container}>
                <div>
                  <div className={style.direction}>
                    <h3>Dirección</h3>
                      <form>
                          <input />
                      </form>
                  </div>
                    {cart?.map(({title,image,amount,price,discount},i)=>
                      <div key={i} className={style.containerProduct}>
                        <img src={image[0]} alt="Product image"/>
                        <div> 
                          <p>{title}</p>
                          <p className={style.description}>Cantidad: {amount}</p>
                          <p className={style.description}>{discount?<span className={style.discount}>$ {price}</span>:null} $ {price*(1-discount)} c/u</p>
                        </div>                       
                      </div>
                      )}
                </div>
                <div>
                  <h2>Purchase summary</h2>
                  <div className={style.container_summary}>
                    <p>Products</p>
                    <p>{cart?.length}</p>
                  </div>
                  <div className={style.container_summary}>
                    <p>Total price</p>
                    <p>{cart?.reduce((acc,{price,discount,amount})=>acc+=amount*price*(1-discount),0)}</p>
                  </div>
                </div>
            </div>
            {!bought?
            <button className={style.btn_comprar} onClick={()=>initiateTransaction("prueba")}>Buy products</button>
            :<button className={style.bought}>Processing purchase</button>
          }
        <Footer/>
    </div>
  );
}
