import React from "react";
import { useDispatch } from "react-redux";
import { removeProductToBag } from "../../Redux/Actions/productsActions";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

const RemoveToBag = ({ text, id }) => {
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(removeProductToBag(id));
  };

  return (
    <RemoveShoppingCartOutlinedIcon onClick={() => removeToCart(id)}>
      {text}
    </RemoveShoppingCartOutlinedIcon>
  );
};

export default RemoveToBag;
