import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

const SearchBar = ({ products }) => {
  const [input, setInput] = useState(null);

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
