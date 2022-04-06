import { SET_EMAIL } from "../Actions/actionNewletter";

const initialState = {
  email: null,
};

const reducerNewletter = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_EMAIL:
      return {
        ...state,
        email: payload,
      };
    default:
      return state;
  }
};

export default reducerNewletter;
