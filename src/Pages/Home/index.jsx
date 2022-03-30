import React, { useState } from "react";
import Landing from "../../Components/Landing/Landing-page";
import Footer from "../../Components/Footer";
import styles from "./Home.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import ScoreMax from "../../Components/ScoreMax/ScoreMax";
import ContactForm from "../../Components/ContactForm/ContactForm";

export const Home = () => {
  const [toggle, setToggle] = useState(false);

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
