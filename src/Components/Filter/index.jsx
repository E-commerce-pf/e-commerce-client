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
} from "../../Redux/Actions/productsActions";

import categoriesService from "../../Services/category";
import style from "./Filter.module.scss";
import { useDispatch } from "react-redux";

const Filter = ({ category }) => {
  const initialState = {
    description: "",
    price: [0, 2500],
    category: "all",
  };

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    ...initialState,
    category,
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesService.getAllCategories().then((data) => {
      setCategories(data);
    });
    dispatch(setFilterProducts({ ...input }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
    <div>
      <div style={{ border: "1px solid blue", padding: 10 }}>
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
          <Typography>Precio USD (min - max)</Typography>
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
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            setInput(initialState);
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
