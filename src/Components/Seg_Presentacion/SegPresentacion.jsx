import React from 'react'
import { motion } from "framer-motion";
import {useState,useEffect} from 'react'
import categoriesService from '../../Services/category'
import { Link } from 'react-router-dom';
import style from './SegPresentation.module.css';

const SegPresentacion = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories,'categorias')

  useEffect(() => {
    categoriesService.getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <div className={style.containerItems}>
      <div className={style.containerTitle}>
        <h3 className={style.titleC}> Categories</h3>
      </div>
      <div className={style.containerItem}>
        {categories.map(({ id, name,image }) => (
        <div key={id} className={style.item}>
          <motion.div
           whileHover={{
            scale: [1, 2, 2, 1, 1],
            borderRadius: ["20%", "20%", "40%", "40%", "20%"],
        }}
        whileTap={{scale: 0.9}}>
                    <Link
                      className={style.titleItem}
                      key={id}
                      to={`/products/${name}`}
                      value={name}
                    >
                      <img className={style.imgItem} src={image} alt={id} />
                      {name}
                      
                    </Link>
          </motion.div>
        </div>
                  ))}
      </div>
    </div>
  )
}

export default SegPresentacion