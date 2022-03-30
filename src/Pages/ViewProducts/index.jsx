import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Navbar } from "../../Components/Navbar/Navbar";
import Filter from "../../Components/Filter";
import Order from "../../Components/Order";
import CardsProducts from "../../Components/CardsProducts";
import Loading from "../../Components/Loading";
import Footer from "../../Components/Footer";
import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import { paginate } from "../../Utils/paginate";

export default function ViewProducts() {
  const { category } = useParams();
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const elementsPerPage = 9;

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

  const next = () => {
    setPage(page + 1);
  };

  const previous = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <Navbar />
      <Filter category={category} />
      <Order />
      <div>
        <button onClick={previous}>Anterior</button>
        <button onClick={next}>Siguiente</button>
      </div>
      <CardsProducts
        products={paginate(productsFilter, page, elementsPerPage)}
      />
      <Footer />
    </div>
  );
}
