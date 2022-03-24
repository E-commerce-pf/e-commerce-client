import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import imgHome2 from "../../Assets/Images/imgHome2jpg.jpg";
import Loading from "../../Components/Loading";
import Landing from "../../Components/Landing/Landing-page";
import Footer from "../../Components/footer";
import styles from "./Home.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import Filter from "../../Components/Filter";
import CardsProducts from "../../Components/CardsProducts";
import ScoreMax from "../../Components/ScoreMax/ScoreMax";
import { Paginate } from "../../Utils/paginate";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Typography, Button } from "@mui/material";

export const Home = () => {
  const productsFilter = useSelector(
    (state) => state.productsReducer.produtsFilter
  );
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(0);
  const elemPage = 8;
  useEffect(() => {
    productsService.getAllProducts().then(({ products }) => {
      dispatch(setAllProducts(products));
    });
  }, [dispatch]);

  if (!productsFilter) {
    return <Loading />;
  }

  return (
    <div className={styles.containerHome}>
      <Landing />
      <Navbar filter={false} />
      <ScoreMax />
      {/* <div className={styles.containerInfo3}>
      
       <img src={imgHome2} alt="imagen" width="100%" height="250px" />
      </div> */}
      
      <div className={styles.containerInfo4}>
        <Filter />
        <div className={styles.prodct}>
        <div className={styles.nuevo}>
          <Typography>Nuevo en</Typography>
        </div>
        <div>
          <div className={styles.paginado_home}>
            <Button
              className={styles.paginado_btn}
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
            >
              <FaArrowCircleLeft /> Anterior
            </Button>
            <Button
              className={styles.paginado_btn}
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
            >
              Siguiente <FaArrowCircleRight />
            </Button>
          </div>
          <CardsProducts
            products={Paginate(productsFilter, pageNumber, elemPage)}
          />
        </div>
      </div>
        </div>
        
      <Footer />
    </div>
  );
};
