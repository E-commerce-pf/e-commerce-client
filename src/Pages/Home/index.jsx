import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import imgHome2 from "../../Assets/Images/imgHome2jpg.jpg";
import Loading from "../../Components/Loading";
import { CardProduct } from "../../Components/CardProduct";
import Footer from "../../Components/Footer";
import "./Home.css";
import { Navbar } from "../../Components/Navbar/Navbar";

export const Home = () => {
  const products = useSelector((state) => state.productsReducer.allProducts);
  const dispatch = useDispatch();

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
      <Navbar />
      <div className="container-info-3">
        <img src={imgHome2} alt="imagen" width="100%" height="250px" />
      </div>
      <div className="container-info-4">
        <div className="nuevo">
          <h2>Nuevo en </h2>
        </div>
        <div className="card">
          {products?.map((el) => (
            <CardProduct
              key={el.id}
              img={el.image}
              title={el.title}
              id={el.id}
              price={el.price}
              category={el.category}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
