import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import imgHome2 from "../../Assets/Images/imgHome2jpg.jpg";
import Loading from "../../Components/Loading";
import Landing from "../../Components/Landing/Landing-page";
import Footer from "../../Components/Footer";
import "./Home.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import Filter from "../../Components/Filter";

import CardsProducts from "../../Components/CardsProducts";
import { Paginate } from "../../Utils/paginate";

export const Home = () => {
  const products = useSelector((state) => state.productsReducer.allProducts);
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(0);
  const elemPage = 8;

  useEffect(() => {
    productsService.getAllProducts().then((data) => {
      dispatch(setAllProducts(data));
    });
  }, [dispatch]);

  if (!products) {
    return <Loading />;
  }

  return (
    <div className="container_home">
      <Landing />
      <Navbar />

      <div className="container-info-3">
        <img src={imgHome2} alt="imagen" width="100%" height="250px" />
      </div>
      <Filter />
      <div className="container-info-4">
        <div className="nuevo">
          <h2>Nuevo en </h2>
        </div>
        <div>
          <button
            onClick={() => {
              setPageNumber(pageNumber - 1);
            }}
          >
            Anterior
          </button>
          <button
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            Siguiente
          </button>
          <CardsProducts products={Paginate(products, pageNumber, elemPage)} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
