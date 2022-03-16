import React, { useEffect, useState } from "react";

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

  return (
    <div>
      <div>
        <form action="">
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div>
              <label htmlFor="name">Last Name</label>
              <input
                name="lastName"
                id="name"
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div>
              <label htmlFor="category">Categories</label>
              <select name="category" id="category">
                <option value="category">Catagories</option>
              </select>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                name="description"
                id="description"
                type="textarea"
                placeholder="description"
              />
            </div>
            <div>
              <label htmlFor="image">Images</label>
              <input name="image" type="text" placeholder=".png .jpg ..." />
              <button>Add Image</button>
            </div>
            <div>
              <label htmlFor="name">Price</label>
              <input name="price" id="price" type="text" placeholder="price" />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input name="stock" id="stock" type="text" placeholder="Stock" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
