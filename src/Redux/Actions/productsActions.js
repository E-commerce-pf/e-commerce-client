export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const SET_ID_BAG_PRODUCTS = "SET_ID_BAG_PRODUCTS";
export const ADD_PRODUCT_TO_BAG = "ADD_PRODUCT_TO_BAG";
export const REMOVE_PRODUCT_TO_BAG = "REMOVE_PRODUCT_TO_BAG";

export const setAllProducts = (data) => {
  return { type: SET_ALL_PRODUCTS, payload: data };
};

export const setIdBagProducts = (ids) => {
  return { type: SET_ID_BAG_PRODUCTS, payload: ids };
};

export const addProductToBag = (id) => {
  return { type: ADD_PRODUCT_TO_BAG, payload: id };
};

export const removeProductToBag = (id) => {
  return { type: REMOVE_PRODUCT_TO_BAG, payload: id };
};
