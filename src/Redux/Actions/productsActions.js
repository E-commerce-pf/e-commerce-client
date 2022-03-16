export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const SET_ID_BAG_PRODUCTS = "SET_ID_BAG_PRODUCTS";

export const setAllProducts = (data) => {
  return { type: SET_ALL_PRODUCTS, payload: data };
};

export const setIdBagProducts = (ids) => {
  return { type: SET_ID_BAG_PRODUCTS, payload: ids };
};
