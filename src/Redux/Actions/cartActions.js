export const SET_CART = "SET_CART";

export const setCart = (cart) => {
  return {
    type: "SET_CART",
    payload: cart,
  };
};
