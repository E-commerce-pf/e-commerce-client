import React, { useEffect, useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

import categoriesService from "../../Services/category";
import style from "./Filter.module.scss";

const Filter = () => {
  const initialState = {
    description: "",
    title: "",
    price: [0, 2500],
    stock: "all",
    sales: "all",
    discount: "all",
    category: "all",
  };

  const [input, setInput] = useState(initialState);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesService.getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={style.container}>
      <div>
        <Typography>Stock</Typography>
        <Select
          name="stock"
          aria-labelledby="stock"
          value={input.stock}
          onChange={handleChange}
        >
          <MenuItem value="all">Sin Ordenar</MenuItem>
          <MenuItem value="min-max">Menor a mayor</MenuItem>
          <MenuItem value="max-min">Mayor a menor</MenuItem>
        </Select>
      </div>
      <div>
        <Typography>Ventas</Typography>
        <Select
          name="sales"
          aria-labelledby="sales"
          value={input.sales}
          onChange={handleChange}
        >
          <MenuItem value="all">Sin Ordenar</MenuItem>
          <MenuItem value="min-max">Menor a mayor</MenuItem>
          <MenuItem value="max-min">Mayor a menor</MenuItem>
        </Select>
      </div>
      <div>
        <Typography>Descuentos</Typography>
        <Select
          name="discount"
          aria-labelledby="discount"
          value={input.discount}
          onChange={handleChange}
        >
          <MenuItem value="all">Sin Ordenar</MenuItem>
          <MenuItem value="min-max">Menor a mayor</MenuItem>
          <MenuItem value="max-min">Mayor a menor</MenuItem>
        </Select>
      </div>
      <div>
        <Typography>Categorias</Typography>
        <Select
          name="category"
          aria-labelledby="category"
          value={input.category}
          onChange={handleChange}
        >
          <MenuItem value="all">Todas</MenuItem>
          {categories.map((category, index) => {
            return (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div>
        <Typography>Precio USD (min - max) </Typography>
        <Slider
          aria-labelledby="price"
          name="price"
          value={input.price}
          onChange={handleChange}
          min={initialState.price[0]}
          max={initialState.price[1]}
          valueLabelDisplay="auto"
          disableSwap
        />
      </div>
      <div>
        <TextField
          label="Descripcion"
          variant="outlined"
          name="description"
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          label="Titulo"
          variant="outlined"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div>
        <Button variant="contained" onClick={() => setInput(initialState)}>
          Limpiar filtros
        </Button>
      </div>
    </div>
  );
};

export default Filter;
