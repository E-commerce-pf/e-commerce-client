import React from "react";
import { useDispatch } from "react-redux";
import { removeProductToBag } from "../../Redux/Actions/productsActions";
import '../AddToBag/AddToBag.modules.css';

const RemoveToBag = ({ text, id }) => {
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(removeProductToBag(id));
  };

  return <button className="btn_addToB" onClick={() => removeToCart(id)}>{text} </button>;
};

export default RemoveToBag;
