import React from "react";
import productsService from "../../Services/products";

const Home = () => {
  productsService.getAllProducts().then((data) => {
    console.log(data);
  });

  return <h1>Hello World! desde Home</h1>;
};

export default Home;
