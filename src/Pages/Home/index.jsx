import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import Loading from "../../Components/Loading";
import Landing from "../../Components/Landing/Landing-page";
import Footer from "../../Components/Footer";
import styles from "./Home.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import ScoreMax from "../../Components/ScoreMax/ScoreMax";
import ContactForm from "../../Components/ContactForm/ContactForm";

export const Home = () => {
  const productsFilter = useSelector(
    (state) => state.productsReducer.produtsFilter
  );

  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    productsService.getAllProducts().then((products) => {
      dispatch(setAllProducts(products));
    });
  }, [dispatch]);

  if (!productsFilter) {
    return <Loading />;
  }

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
