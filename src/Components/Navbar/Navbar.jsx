import React, { useState, useEffect } from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import Everylogopf from "../../Assets/Images/Everylogopf.png";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import ShoppingBag from "../ShoppingBag";
import {motion} from 'framer-motion'
import categoriesService from "../../Services/category";

const containerVariants={
  hidden:{
    opacity:0,
    y:'50vh'
  },
  show:{
    opacity:1,
    y:0,
    transition:{
      type:'spring',
    }
  }
}

export const Navbar = ({ filter, state, setState }) => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesService.getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleOnClick = (event) => {
    navigate(`/products/${event.target.value}`);
  };

  return (
    <>
      {" "}
      <motion.div className={styles.navbar}
      variants={containerVariants}
      initial='hidden'
      animate='show'
      >
        <div className={styles.containerInfo1}>
          <div className={styles.homeImg}>
            <Link to="/">
              <motionimg src={Everylogopf} alt="img" width="150px" height="100px" />
            </Link>
          </div>

          {filter ? (
            <>
              <button value="all" onClick={handleOnClick}>
                View All
              </button>

              <div className={styles.selectCP}>
                <select onChange={handleOnClick}>
                  <option style={{ textAlign: "center" }} value="all">
                    All categories
                  </option>
                  {categories.map(({ id, name }) => (
                    <option
                      style={{ textAlign: "center" }}
                      key={id}
                      value={name}
                    >
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.inputS}>
                <SearchBar />
              </div>
            </>
          ) : null}

          <div className={styles.homeSU}>
            <h2 onClick={() => setState(!state)}>
              <FaHeadphonesAlt /> Support
            </h2>
            <h2 onClick={() => navigate("/location")}>
              <HiOutlineLocationMarker /> Location
            </h2>
          </div>
          <div className={styles.homeFLC}>
            <button className={styles.login_}>
              <IoPersonOutline
                className={styles.login}
                onClick={() => navigate("/login")}
              />
            </button>
            <ShoppingBag />
          </div>
        </div>
        {/* {filter!==false&&<div className={styles.containerInfo2}>
                <div className={styles.selectCP}>
                    <select>
                        <option>categoria</option>
                        <option>categoria</option>
                        <option>categoria</option>
                    </select>
                    <select>
                        <option>Precio</option>
                        <option>Precio</option>
                        <option>Precio</option>
                    </select>
                </div> */}
      </motion.div>
    </>
  );
};
