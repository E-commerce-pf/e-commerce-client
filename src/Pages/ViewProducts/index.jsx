import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Filter from "../../Components/Filter";
import Order from "../../Components/Order";
import CardsProducts from "../../Components/CardsProducts";
import Loading from "../../Components/Loading";
import Footer from "../../Components/Footer";
import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";

export default function ViewProducts() {
  const { category } = useParams();
  const dispatch = useDispatch();

  const productsFilter = useSelector(
    (state) => state.productsReducer.produtsFilter
  );

  useEffect(() => {
    productsService.getAllProducts().then((products) => {
      return dispatch(setAllProducts(products));
    });
  }, [dispatch]);

  if (!productsFilter) {
    return <Loading />;
  }

  return (
    <div>
      <h1>View Products</h1>
      <Filter category={category} />
      <Order />
      <CardsProducts products={productsFilter} />
      <Footer />
    </div>
  );
}
