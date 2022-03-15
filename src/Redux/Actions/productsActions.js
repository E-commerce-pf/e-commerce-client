export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getAllProducts = (data) => {
  return { type: GET_ALL_PRODUCTS, payload: data };
};
