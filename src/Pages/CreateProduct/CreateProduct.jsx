import React, { useEffect, useState } from "react";
import { isValidURL, validateProduct } from "../../Utils/validate.product";
import "./CreateProduct.css";

export default function CreateProperty() {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    categories: [],
    images: [],
    description: "",
    price: 0,
    stock: 0,
  });
  let image = "";

  function handleChange(e) {
    e.preventDefault();
    console.log("image", image);
    if (e.target.name === "images") {
      image = e.target.value;
    } else {
      setInput({
        ...input,
        [e.target.name]:
          e.target.name === "categories"
            ? [...input.categories, e.target.value]
            : e.target.value,
      });
      setErrors(validateProduct(input));
    }
  }

  function handleClick(e) {
    let $imagesField = document.querySelector("#images");
    e.preventDefault();
    if (isValidURL(image)) {
      setInput({ ...input, images: [...input.images, image] });
      $imagesField.value = "";
      errors.images = "";
    } else if (input.images) {
      setErrors({ ...errors, images: "The url is no valid" });
    } else if (input.images <= 0) {
      setErrors({ ...errors, images: "The product needs at least un image" });
    }
    console.log(input.images);
  }

  function handleSubmit(e) {}

  return (
    <div className="create-product__main-container">
      <div className="create-product__background-image"></div>
      <form className="create-product__form" onSubmit={handleSubmit}>
        <h1>Create Product</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            id="name"
            type="text"
            placeholder="Product Name"
          />
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={handleChange}
            name="lastName"
            id="name"
            type="text"
            placeholder="Product Name"
          />
        </div>
        <div>
          <label htmlFor="categories">Categories</label>
          <select onChange={handleChange} name="categories" id="categories">
            <option value="null">Categories</option>
            <option value="technology">Technology</option>
            <option value="clothe">Clothes</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            name="description"
            id="description"
            type="textarea"
            placeholder="Description"
          />
        </div>
        <div className="create-product__form--image">
          <div>
            <label htmlFor="images">Images</label>
            <input
              name="images"
              id="images"
              onChange={handleChange}
              type="text"
              placeholder=".png .jpg ..."
            />
          </div>
          <button type="button" onClick={handleClick}>
            Add Image
          </button>
        </div>
        <div>
          <label htmlFor="name">Price</label>
          <input
            onChange={handleChange}
            name="price"
            id="price"
            type="text"
            placeholder="Price"
          />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input
            onChange={handleChange}
            name="stock"
            id="stock"
            type="text"
            placeholder="Stock"
          />
        </div>
        <input
          type="submit"
          className="create-product__form--button"
          value="Create"
        />
      </form>
    </div>
  );
}
