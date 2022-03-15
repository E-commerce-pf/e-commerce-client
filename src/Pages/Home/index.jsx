import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import CardsProducts from "../../Components/CardsProducts";

const Home = () => {
  const products = useSelector((state) => state.productsReducer.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    productsService.getAllProducts().then((data) => {
      dispatch(setAllProducts(data));
    });
  }, [dispatch]);

  if (!products) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h1>Home</h1>
      <CardsProducts products={products} />
    </div>
  );
};

export default Home;
