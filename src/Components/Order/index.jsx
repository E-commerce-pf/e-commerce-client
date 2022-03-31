import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Select, MenuItem, Button } from "@mui/material";

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
    <div style={{ width: "30%", marginTop: 50, marginRight: 10 }}>
      <Button
        variant="contained"
        name="order"
        color="primary"
        onClick={handleChange}
        sx={{ width: "100%" }}
      >
        {order.order === "min-max" ? "Max-Min" : "Min-Max"}
      </Button>
      <Select
        name="orderBy"
        value={order.orderBy}
        onChange={handleChange}
        sx={{ width: "100%" }}
      >
        <MenuItem value="stock">Stock</MenuItem>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="discount">Discount</MenuItem>
      </Select>
    </div>
  );
}
