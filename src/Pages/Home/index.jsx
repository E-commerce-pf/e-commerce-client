import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsService from "../../Services/products";
import { setAllProducts } from "../../Redux/Actions/productsActions";
import { Paginate } from "../../Utils/paginate";
import CardsProducts from "../../Components/CardsProducts";
import Loading from "../../Components/Loading";

const Home = () => {
  const products = useSelector((state) => state.productsReducer.allProducts);
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(0);
  const elemPage = 4;

  useEffect(() => {
    productsService.getAllProducts().then((data) => {
      dispatch(setAllProducts(data));
    });
  }, [dispatch]);

  if (!products) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Home</h1>
      <div>
        <button
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
        >
          Anterior
        </button>
        <CardsProducts products={Paginate(products, pageNumber, elemPage)} />
        <button
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;
