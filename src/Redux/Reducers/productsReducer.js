import {
  SET_ALL_PRODUCTS,
  SET_ID_BAG_PRODUCTS,
} from "../Actions/productsActions";

const initialState = {
  allProducts: null,
  bagProducts: [],
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
      };

    case SET_ID_BAG_PRODUCTS:
      return {
        ...state,
        bagProducts: state.allProducts.filter((product) => {
          return payload.includes(product.id);
        }),
      };

    default:
      return state;
  }
};

export default productsReducer;
