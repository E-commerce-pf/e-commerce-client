import React, { useEffect, useState } from "react";
import { BiGift } from "react-icons/bi";
import { MdOutlineRateReview } from "react-icons/md";
import { MisFavoritos } from "./MisFavoritos/MisFavoritos";
import { NavbarClient } from "./navbarCLient/NavbarClient";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./ClientHome.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MisReviews } from "./MisReviews/MisReviews";
import { MisProductos } from "./MisProductos/MisProductos";
import userService from "../../Services/user";
import { logoutUser } from "../../Redux/Actions/userActions";
import Loading from "../../Components/Loading/index";

import { notifySuccess } from "../../Utils/notifications";

export const ClientHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [misReviews, setMisReviews] = useState(false);
  const [miFavorito, setMiFavorito] = useState(false);
  const [miProducto, setMiProducto] = useState(true);
  const [user, setUser] = useState(null);
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const openCar = () => {
    setMisReviews(true);
    setMiFavorito(false);
    setMiProducto(false);
  };
  const openProduct = () => {
    setMiProducto(true);
    setMisReviews(false);
    setMiFavorito(false);
  };
  const openFav = () => {
    setMiFavorito(true);
    setMisReviews(false);
    setMiProducto(false);
  };

  useEffect(() => {
    if (currentUser.userId) {
      userService
        .getUser(currentUser.userId)
        .then((res) => {
          setUser(res);
          notifySuccess(`Welcome ${res.name}`);
        })
        .catch(() => {
          dispatch(logoutUser());
          notifySuccess("Failed to load user");
          navigate("/login");
        });
    }

  }, [navigate, dispatch]);

  console.log(user);

  if (currentUser === null) {
    return (
      <>
        <div className="title_login">
          <h1>You must login to see this interface</h1>
          <button onClick={() => navigate("/")} className="btn">
          To accept
          </button>
        </div>
      </>
    );
  }

  if (!user) {
    return <Loading />;
  }

  return (
    <div className={styles.contClient}>
      <NavbarClient user={user} />
      <div className={styles.contButton}>
        <button onClick={openCar}>
          {" "}
          <MdOutlineRateReview className={styles.btn} /> My reviews
        </button>
        <button onClick={openProduct}>
          {" "}
          <BiGift className={styles.btn} /> My products
        </button>
        <button onClick={openFav}>
          {" "}
          <AiOutlineStar className={styles.btn} />
          My favourites
        </button>
      </div>
      <>
        {misReviews ? (
          <MisReviews />
        ) : miFavorito ? (
          <MisFavoritos Favorites={user.Favorites} setUser={setUser} />
        ) : miProducto ? (
          <MisProductos Transactions={user.Transactions} name={user.name} />
        ) : (
          false
        )}
      </>
    </div>
  );
};
