import React from "react";
import CreateProductForm from "../../Components/CreateProductForm/CreateProductForm";
import { Navbar } from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "./CreateProduct.scss";

export default function CreateProduct() {
  return (
    <div>
      <Navbar />
      <CreateProductForm />
      <Footer />
    </div>
  );
}
