import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState(null);
  const products = useSelector((state) => state.productsReducer.allProducts);
  const navigate = useNavigate();

  return (
    <Autocomplete
      options={products}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      value={input}
      onChange={(event, newValue) => {
        setInput(newValue);
        if (newValue) {
          navigate(`/productDetail/${newValue.id}`);
        } else {
          navigate("/");
        }
      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
};

export default SearchBar;
