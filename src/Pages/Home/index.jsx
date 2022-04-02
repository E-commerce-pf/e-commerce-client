import React, { useState, useEffect } from "react";
import Landing from "../../Components/Landing/Landing-page";
import Footer from "../../Components/Footer";
import Loading from "../../Components/Loading";

import styles from "./Home.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import ScoreMax from "../../Components/ScoreMax/ScoreMax";
import ContactForm from "../../Components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";


import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";

export const Home = () => {
  const [toggle, setToggle] = useState(false);
  const products = useSelector((state) => state.productsReducer.allProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    productsService.getAllProducts().then((res) => {
      dispatch(setAllProducts(res));
    });
  }, [dispatch]);

  if (!products) return <Loading />;

  return (
    <div className={styles.containerHome}>
     
      <Landing />
      <Navbar filter={true} state={toggle} setState={setToggle} />
      {toggle && <ContactForm state={toggle} setState={setToggle} />}
      <ScoreMax />
      <Footer />
     
    </div>
  );
};
