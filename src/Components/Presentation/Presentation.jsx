import React from 'react'
import auriculares from './Images/auriculares.png'
import celu from './Images/cel.png'
import joystick from './Images/joistick.png'
import note from './Images/notebook.png'
import style from './Presentation.module.css';
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <div className={style.container_pres}>
        <h2 className={style.txt}>
        TIenda especializada en productos de tecnología: <br/> computación, gaming, celulares y otros productos.
        </h2>
        <div className={style.imagenes}>
        <motion.img
        whileHover={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 300,360],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        whileTap={{scale: 0.9}}
         className={style.ImgShop} src={auriculares} alt='auriculares_tienda'/>
        <motion.img 
        whileHover={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 300,360],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        whileTap={{scale: 0.9}}
        className={style.ImgShop} src={celu} alt='celu_tienda'/>
        <motion.img
        whileHover={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 300,360],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        whileTap={{scale: 0.9}}
        className={style.ImgShop} src={joystick} alt='joystick_tienda'/>
        <motion.img
        whileHover={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 300,360],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        whileTap={{scale: 0.9}}
        className={style.ImgShop} src={note} alt='note_tienda'/>

        </div>

    </div>
  )
}

export default Presentation