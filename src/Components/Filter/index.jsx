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
    price: [0, 2500],
    category: "all",
  };

  const initialStateOrder = {
    orderBy: "stock",
    order: "min-max",
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
      ...inputOrder,
      [name]:
        name === "order"
          ? inputOrder.order === "min-max"
            ? "max-min"
            : "min-max"
          : event.target.value,
    });
    dispatch(
      setOrderProducts({
        ...inputOrder,
        [name]:
          name === "order"
            ? inputOrder.order === "min-max"
              ? "max-min"
              : "min-max"
            : event.target.value,
      })
    );
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
      <Typography
        variant="h3"
        className={style.title}
        style={{ textAlign: "center" }}
      >
        Ordenamientos
      </Typography>
      <div style={{ border: "1px solid blue", padding: 10 }}>
        <div>
          <Typography className={style.title}>Ordenar por</Typography>
          <Select
            name="orderBy"
            aria-labelledby="orderBy"
            value={inputOrder.orderBy}
            onChange={handleChangeOrder}
          >
            <MenuItem value="stock">Cantidad</MenuItem>
            <MenuItem value="sales">Vendidos</MenuItem>
            <MenuItem value="discount">Descuentos</MenuItem>
          </Select>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            name="order"
            onClick={handleChangeOrder}
          >
            {inputOrder.order === "min-max" ? "Min-Max" : "Max-Min"}
          </Button>
        </div>
      </div>
      <Typography
        variant="h3"
        className={style.title}
        style={{ textAlign: "center" }}
      >
        Filtros
      </Typography>
      <div style={{ border: "1px solid blue", padding: 10 }}>
        <div>
          <Typography className={style.title}>Categorias</Typography>
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
          <Typography className={style.title}>
            Precio USD (min - max){" "}
          </Typography>
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
        <div className={style.title}>
          <TextField
            label="Descripcion"
            variant="outlined"
            name="description"
            onChange={handleChange}
            value={input.description}
          />
        </div>
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
