import React, { useEffect } from "react";
import style from './AlertModal.module.scss';

const AlertModal = ( {message, width, status} )=>{

      useEffect(()=>{
            if(status){
                  document.querySelector('#alertModal').classList.add(style.enable)
            } else {
                  document.querySelector('#alertModal').classList.remove(style.enable)
            }
      },[status])
      

      return (
            <div className={style.container} style= { { width: width} } id='alertModal'>
                  <h1>{ message }</h1>
            </div>
      );
};
export default AlertModal;