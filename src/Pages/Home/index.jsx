import React, { useState, useEffect } from "react";
import Landing from "../../Components/Landing/Landing-page";
import Footer from "../../Components/Footer";
import Loading from "../../Components/Loading";

import styles from "./Home.module.css";
import {Navbar} from "../../Components/Navbar/Navbar";
import ScoreMax from "../../Components/ScoreMax/ScoreMax";
import ContactForm from "../../Components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import SegPresentacion from '../../Components/Seg_Presentacion/SegPresentacion'


import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import { motion } from "framer-motion";
import Presentation from '../../Components/Presentation/Presentation'
import { useLocation } from "react-router-dom";
import { removeToLocalStorageIds } from "../../Utils/shoppingBag";
const cardVariants= {
  offscreen: {
    x: 400
  },
  onscreen: {
    x: 28,
    translateX: -30,
    transition: {
      type:'spring',
      bounce: 0.2,
      duration: 2
    }
  }
};

export const Home = () => {
  const [toggle, setToggle] = useState(false);
  const products = useSelector((state) => state.productsReducer.allProducts);

  const dispatch = useDispatch();
  const {search}=useLocation();
  const queryParam=new URLSearchParams(search).get("success");
  if(queryParam)
  removeToLocalStorageIds();
  useEffect(() => {
    productsService.getAllProducts().then((res) => {
      dispatch(setAllProducts(res));
    });
  }, [dispatch]);

  if (!products) return <Loading />;

  return (
    <motion.div className={styles.containerHome}>
      <div>
      <Navbar filter={true} state={toggle} setState={setToggle} />
      {toggle && <ContactForm state={toggle} setState={setToggle} />}
    </div>
    <motion.div
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0 }}
    >
      <Presentation/>
    </motion.div>
    <br/>
    <motion.div 
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0 }}
    >
      <Landing />
    </motion.div>
    <motion.div
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0 }}>
      <ScoreMax />
    </motion.div>
    <motion.div
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0 }}>
    <SegPresentacion/>
    </motion.div>
    <motion.div
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0 }}>
      <Footer />
   </motion.div>
    </motion.div>
  
  );
};
