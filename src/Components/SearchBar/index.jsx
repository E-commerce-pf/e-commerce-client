import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [input, setInput] = useState(null);
  const products = useSelector((state) => state.productsReducer.allProducts);
  return (
    <Autocomplete
      options={products}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      value={input}
      onChange={(event, newValue) => {
        setInput(newValue);
      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Buscar" />}
    />
  );
};

export default SearchBar;
