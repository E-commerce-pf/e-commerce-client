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
      const isItemInCart = state.bagProducts.find(
        (product) => product.id === payload
      );
      if (isItemInCart) {
        return {
          ...state,
          bagProducts: state.bagProducts.map((product) =>
            product.id === payload
              ? { ...product, amount: product.amount + 1 }
              : product
          ),
        };
      }
      const newProductCart = state.allProducts.find((product) => {
        return product.id === payload;
      });
      if (!newProductCart) {
        return {
          ...state,
          bagProducts: state.bagProducts.filter(
            (product) => product.id !== payload
          ),
        };
      }
      return {
        ...state,
        bagProducts: [
          ...state.bagProducts,
          {
            ...newProductCart,
            amount: 1,
          },
        ],
      };

    default:
      return state;
  }
};

export default productsReducer;
