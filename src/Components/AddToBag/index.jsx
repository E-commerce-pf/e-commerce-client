import React from "react";
import { useDispatch } from "react-redux";
import { addProductToBag } from "../../Redux/Actions/productsActions";
import './AddToBag.modules.css';

const AddToBag = ({ text, id }) => {
  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(addProductToBag(id));
  };

  return <button className="btn_addToB" onClick={() => addToCart(id)}>{text}</button>;
};

export default AddToBag;
