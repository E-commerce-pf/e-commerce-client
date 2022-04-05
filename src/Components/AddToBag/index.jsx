import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToBag,
  newCartChange,
} from "../../Redux/Actions/productsActions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  addToLocalStorageIds,
  addProductToCartDb,
} from "../../Utils/shoppingBag";
import { notifyError } from "../../Utils/notifications";

const AddToBag = ({ text, id, user, bagProducts }) => {
  const dispatch = useDispatch();
  const stockSucess = (product) => {
    return product.amount + 1 <= product.stock;
  };
  const addToCart = (id) => {
    dispatch(newCartChange(true));
    let product = bagProducts?.find((p) => p.id === id);
    if (!product || stockSucess(product)) {
      dispatch(addProductToBag(id));
      addToLocalStorageIds(id);
    } else {
      notifyError(`Maximum stock reached ${product.amount}`);
    }
  };

  return (
    <AddShoppingCartIcon onClick={() => addToCart(id)}>
      {text}
    </AddShoppingCartIcon>
  );
};

export default AddToBag;
