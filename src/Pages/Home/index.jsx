import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import imgHome2 from "../../Assets/Images/imgHome2jpg.jpg";
import Loading from "../../Components/Loading";
import Landing from "../../Components/Landing/Landing-page";
import Footer from "../../Components/Footer";
import styles from"./Home.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import Filter from "../../Components/Filter";
import getReview from '../../Redux/Actions/reviewsActions';
import CardsProducts from "../../Components/CardsProducts";
import { Paginate } from "../../Utils/paginate";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

export const Home = () => {
  const productsFilter = useSelector(
    (state) => state.productsReducer.produtsFilter
  );
  const dispatch = useDispatch();

  const review= useSelector((state)=> state.reviewsScore.reviews)
  console.log(review,'REVIEW SELECTOR')

  const [pageNumber, setPageNumber] = useState(0);
  const elemPage = 8;
  useEffect(() => {
    productsService.getAllProducts().then(({products}) => {
      dispatch(setAllProducts(products));
    });
    
  }, [dispatch]);

   useEffect(()=>{
     dispatch(getReview())
     console.log(getReview(),' este es el getReview')
   },[])

  if (!productsFilter) {
    return <Loading />;
  }

  return (
    <div className={styles.containerHome}>
      <Landing />
      <Navbar />

      <div className={styles.containerInfo3}>
        <img src={imgHome2} alt="imagen" width="100%" height="250px" />
      </div>
      <Filter />
      <div className={styles.containerInfo4}>
        <div className={styles.nuevo}>
          <h2>Nuevo en </h2>
        </div>
        <div >
          <div className={styles.paginado_home}>
          <button className={styles.paginado_btn}
            onClick={() => {
              setPageNumber(pageNumber - 1);
            }}
          >
            <FaArrowCircleLeft/> Anterior 
          </button>
          <button className={styles.paginado_btn}
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            Siguiente <FaArrowCircleRight/>
            
          </button>
          </div>
          <CardsProducts
            products={Paginate(productsFilter, pageNumber, elemPage)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
