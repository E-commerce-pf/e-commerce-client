import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, Select, MenuItem, Button } from "@mui/material";

import { setOrderProducts } from "../../Redux/Actions/productsActions";

export default function Order() {
  const dispatch = useDispatch();

  const [order, setOrder] = useState({
    orderBy: "stock",
    order: "min-max",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setOrder({
      ...order,
      [name]:
        name === "order"
          ? order.order === "min-max"
            ? "max-min"
            : "min-max"
          : event.target.value,
    });
    dispatch(
      setOrderProducts({
        ...order,
        [name]:
          name === "order"
            ? order.order === "min-max"
              ? "max-min"
              : "min-max"
            : event.target.value,
      })
    );
  };

  return (
    <div>
      <Select name="orderBy" value={order.orderBy} onChange={handleChange}>
        <MenuItem value="stock">Stock</MenuItem>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="discount">discount</MenuItem>
      </Select>
      <Button
        variant="contained"
        name="order"
        color="primary"
        onClick={handleChange}
      >
        {order.order === "min-max" ? "Max-Min" : "Min-Max"}
      </Button>
    </div>
  );
}
