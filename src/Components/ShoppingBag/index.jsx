import { Badge, Drawer } from "@mui/material";
import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import CardShoppingBag from "../CardShoppingBag";

const ShoppingBag = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CardShoppingBag />
      </Drawer>
      <button style={{ fontSize: "2em" }} onClick={() => setCartOpen(true)}>
        <Badge badgeContent={1} color="error">
          <BiShoppingBag />
        </Badge>
      </button>
    </div>
  );
};

export default ShoppingBag;
