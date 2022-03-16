import {
  ADD_PRODUCT_TO_BAG,
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

    case ADD_PRODUCT_TO_BAG:
      if (state.bagProducts.find((product) => product.id === payload)) {
        return state;
      }
      return {
        ...state,
        bagProducts: [
          ...state.bagProducts,
          ...state.allProducts.filter((product) => {
            return product.id === payload;
          }),
        ],
      };

    default:
      return state;
  }
};

export default productsReducer;
