import React from 'react'
import { motion } from "framer-motion";
import {useState,useEffect} from 'react'
import categoriesService from '../../Services/category'
import { Link } from 'react-router-dom';

const SegPresentacion = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories,'categorias')

  useEffect(() => {
    categoriesService.getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <div>
      {categories.map(({ id, name }) => (
        <div>
                    <Link
                      style={{ textAlign: "center",color:'black' }}
                      key={id}
                      to={`/products/${name}`}
                      value={name}
                    >
                      {name} 
                    </Link>
        </div>
                  ))}
    </div>
  )
}

export default SegPresentacion