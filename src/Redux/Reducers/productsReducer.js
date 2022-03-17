import {
  ADD_PRODUCT_TO_BAG,
  CLEAR_FILTER,
  REMOVE_PRODUCT_TO_BAG,
  SET_ALL_PRODUCTS,
  SET_ID_BAG_PRODUCTS,
} from "../Actions/productsActions";

const initialState = {
  allProducts: null,
  bagProducts: [],
  produtsFilter: [],
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
        produtsFilter: payload,
      };

    case SET_ID_BAG_PRODUCTS:
      return {
        ...state,
        bagProducts: payload.map(({ id, amount }) => {
          const aux = state.allProducts.find((product) => product.id === id);
          return { ...aux, amount };
        }),
      };

    case CLEAR_FILTER:
      return {
        ...state,
        produtsFilter: state.allProducts,
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

    case REMOVE_PRODUCT_TO_BAG:
      return {
        ...state,
        bagProducts: state.bagProducts.reduce((acc, product) => {
          if (product.id === payload) {
            if (product.amount === 1) return acc;
            return [...acc, { ...product, amount: product.amount - 1 }];
          }
          return [...acc, product];
        }, []),
      };

    default:
      return state;
  }
};

export default productsReducer;
