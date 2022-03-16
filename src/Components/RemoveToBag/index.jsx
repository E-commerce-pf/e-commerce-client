import React from "react";

const RemoveToBag = ({ text, id }) => {
  const removeToCart = (id) => {
    console.log("remove");
  };

  return <button onClick={() => removeToCart(id)}>{text}</button>;
};

export default RemoveToBag;
