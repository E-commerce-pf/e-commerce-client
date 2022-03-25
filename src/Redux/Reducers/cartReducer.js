import { SET_CART } from "../Actions/cartActions";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CART:
      return {
        ...state,
        cart: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
