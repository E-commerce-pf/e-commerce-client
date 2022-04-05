import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";

import Landing from "../../Components/Landing/Landing-page";
import Footer from "../../Components/Footer";
import Loading from "../../Components/Loading";

import styles from "./Home.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import ScoreMax from "../../Components/ScoreMax/ScoreMax";
import ContactForm from "../../Components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import SegPresentacion from "../../Components/Seg_Presentacion/SegPresentacion";

import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import { motion } from "framer-motion";
import Presentation from "../../Components/Presentation/Presentation";
const cardVariants = {
  offscreen: {
    x: 400,
  },
  onscreen: {
    x: 28,
    translateX: -30,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
    },
  },
};

export const Home = () => {
  const [toggle, setToggle] = useState(false);
  const products = useSelector((state) => state.productsReducer.allProducts);
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    productsService.getAllProducts().then((res) => {
      dispatch(setAllProducts(res));
    });

    if (!currentUser) {
      setTimeout(() => {
        setOpen(true);
      }, 3000);
    }
  }, [dispatch, currentUser]);

  if (!products) return <Loading />;

  const newletter = (
    <div 
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>¡Suscribete a nuestro newsletter!</h1>
    </div>
  );

  return (
    <motion.div className={styles.containerHome}>
      <Modal open={open} onClose={() => setOpen(false)}>
        {newletter}
      </Modal>
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
        <Presentation />
      </motion.div>
      <br />
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
        viewport={{ once: false, amount: 0 }}
      >
        <ScoreMax />
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0 }}
      >
        <SegPresentacion />
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};
