import { GET_REVIEW } from "../Actions/reviewsActions";

const initialState = {
  reviews: [],
};

const reviewsScore = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
};

export default reviewsScore;
