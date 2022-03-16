import React from "react";
import { useDispatch } from "react-redux";
import { removeProductToBag } from "../../Redux/Actions/productsActions";

const RemoveToBag = ({ text, id }) => {
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(removeProductToBag(id));
  };

  return <button onClick={() => removeToCart(id)}>{text}</button>;
};

export default RemoveToBag;
