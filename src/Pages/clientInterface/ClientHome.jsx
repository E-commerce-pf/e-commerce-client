import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { BiGift } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { MisProductos } from "./MisProductos/MiProductos";
import { MisFavoritos } from "./MisFavoritos/MisFavoritos";
import { NavbarClient } from "./navbarCLient/NavbarClient";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./ClientHome.module.scss";
import { MisCarritos } from "./MisCarritos/MisCarritos";
import { useSelector } from "react-redux";
import { notifySuccess } from "../../Utils/notifications";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetUserId } from "../../Redux/Actions/userActions";
import userService from "../../Services/user";

export const ClientHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [miCarrito, setMiCarrito] = useState(false);
  const [miFavorito, setMiFavorito] = useState(false);
  const [miProducto, setMiProducto] = useState(false);
  const [user, setUser] = useState(null);
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const openCar = () => {
    setMiCarrito(true);
    setMiFavorito(false);
    setMiProducto(false);
  };
  const openProduct = () => {
    setMiProducto(true);
    setMiCarrito(false);
    setMiFavorito(false);
  };
  const openFav = () => {
    setMiFavorito(true);
    setMiCarrito(false);
    setMiProducto(false);
  };
  
  console.log(currentUser);

  useEffect(() => {
    userService.getUser(currentUser.userId).then((res) => {
      setUser(res);
    });
    notifySuccess(`Bienvenid@ ${currentUser.name}`);
  }, [dispatch, currentUser]);

  console.log(user);

  if (currentUser === null) {
    return (
      <>
        <div className="title_login">
          <h1>Debe iniciar sesión para ver esta interfaz</h1>
          <button onClick={() => navigate("/")} className="btn">
            Aceptar
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
      <NavbarClient />
      <div className={styles.contButton}>
        <button onClick={openCar}>
          {" "}
          <BsCart4 className={styles.btn} /> Mi carrito
        </button>
        <button onClick={openProduct}>
          {" "}
          <BiGift className={styles.btn} /> Mis productos
        </button>
        <button onClick={openFav}>
          {" "}
          <AiOutlineStar className={styles.btn} />
          Mis favoritos
        </button>
      </div>
      <>
        {miCarrito ? (
          <MisCarritos />
        ) : miFavorito ? (
          <MisFavoritos Favorites={user.Favorites}/>
        ) : miProducto ? (
          <MisProductos Transactions={user.Transactions} name={user.name} />
        ) : (
          false
        )}
      </>
    </div>
  );
};
