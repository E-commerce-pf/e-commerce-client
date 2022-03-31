import React from "react";
import { useDispatch } from "react-redux";
import { removeProductToBag } from "../../Redux/Actions/productsActions";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { removeAmountToLocalStorageId,removeAmountProductToCartDb } from "../../Utils/shoppingBag";

const RemoveToBag = ({ text, id,user }) => {
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(removeProductToBag(id));
    removeAmountToLocalStorageId(id);
  };

  return (
    <RemoveShoppingCartOutlinedIcon onClick={() => removeToCart(id)}>
      {text}
    </RemoveShoppingCartOutlinedIcon>
  );
};

export default RemoveToBag;
