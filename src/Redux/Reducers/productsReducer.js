import { SET_ALL_PRODUCTS } from "../Actions/productsActions";

const initialState = {
  allProducts: null,
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
