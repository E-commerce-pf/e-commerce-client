import React, { useEffect, useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import {
  setFilterProducts,
  clearFilter,
  setOrderProducts,
} from "../../Redux/Actions/productsActions";

import categoriesService from "../../Services/category";
import style from "./Filter.module.scss";
import { useDispatch } from "react-redux";

const Filter = () => {
  const initialState = {
    description: "",
    title: "",
    price: [0, 2500],
    category: "all",
  };

  const initialStateOrder = {
    stock: "all",
    sales: "all",
    discount: "all",
  };

  const dispatch = useDispatch();

  const [input, setInput] = useState(initialState);
  const [inputOrder, setInputOrder] = useState(initialStateOrder);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesService.getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleChangeOrder = (event) => {
    const name = event.target.name;
    setInputOrder({
      stock: name === "stock" ? event.target.value : "all",
      sales: name === "sales" ? event.target.value : "all",
      discount: name === "discount" ? event.target.value : "all",
    });
    dispatch(setOrderProducts({ order: event.target.value, name }));
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    dispatch(
      setFilterProducts({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <div className={style.container}>
      <div>
        <Typography>Stock</Typography>
        <Select
          name="stock"
          aria-labelledby="stock"
          value={inputOrder.stock}
          onChange={handleChangeOrder}
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
          value={inputOrder.sales}
          onChange={handleChangeOrder}
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
          value={inputOrder.discount}
          onChange={handleChangeOrder}
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
          {categories.map(({ id, name }) => {
            return (
              <MenuItem key={id} value={name}>
                {name}
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
          value={input.description}
        />
      </div>
      <div>
        <TextField
          label="Titulo"
          variant="outlined"
          name="title"
          value={input.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            setInput(initialState);
            setInputOrder(initialStateOrder);
            dispatch(clearFilter());
          }}
        >
          Limpiar filtros
        </Button>
      </div>
    </div>
  );
};

export default Filter;
