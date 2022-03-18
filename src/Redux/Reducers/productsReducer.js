import {
  ADD_PRODUCT_TO_BAG,
  CLEAR_FILTER,
  FILTER_PRODUCTS,
  ORDER_PRODUCTS,
  REMOVE_PRODUCT_TO_BAG,
  SET_ALL_PRODUCTS,
  SET_ID_BAG_PRODUCTS,
} from "../Actions/productsActions";

const toLower = (str) => {
  return str.toLowerCase();
};

const isInRange = (value, a, b) => {
  return value >= a && value <= b;
};

const isInCategory = (categories, category) => {
  if (category === "all") return true;
  return categories.map((categ) => categ.name).includes(category);
};

const isIn = (product, payload) => {
  return (
    isInCategory(product.Categories, payload.category) &&
    toLower(product.title).includes(toLower(payload.title)) &&
    toLower(product.description).includes(toLower(payload.description)) &&
    isInRange(product.price, payload.price[0], payload.price[1])
  );
};

const initialState = {
  allProducts: null,
  bagProducts: [],
  produtsFilter: null,
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

    case ORDER_PRODUCTS:
      const products = state.produtsFilter.sort((productA, productB) =>
        payload.order === "max-min"
          ? productB[payload.name] - productA[payload.name]
          : productA[payload.name] - productB[payload.name]
      );
      return {
        ...state,
        produtsFilter: [...products],
      };

    case CLEAR_FILTER:
      return {
        ...state,
        produtsFilter: state.allProducts,
      };

    case FILTER_PRODUCTS:
      return {
        ...state,
        produtsFilter: state.allProducts.filter((product) => {
          return isIn(product, payload);
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
