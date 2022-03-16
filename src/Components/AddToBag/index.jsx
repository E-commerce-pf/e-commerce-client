import React from "react";
import { useDispatch } from "react-redux";
import { addProductToBag } from "../../Redux/Actions/productsActions";

const AddToBag = ({ text, id }) => {
  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(addProductToBag(id));
  };

  return <button onClick={() => addToCart(id)}>{text}</button>;
};

export default AddToBag;
