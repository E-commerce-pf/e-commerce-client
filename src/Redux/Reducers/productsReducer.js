import { GET_ALL_PRODUCTS } from "../Actions/productsActions";

const initialState = {
  allProducts: [],
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
