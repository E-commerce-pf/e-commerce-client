import React, { useState } from "react";
import { isValidURL, validateProduct } from "../../Utils/validate.product";
import CreateProductForm from "../../Components/CreateProductForm/CreateProductForm";
import { Navbar } from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "./CreateProduct.scss";

export default function CreateProperty() {
  return (
    <div>
      <Navbar />
      <CreateProductForm />
      <Footer />
    </div>
  );
}
