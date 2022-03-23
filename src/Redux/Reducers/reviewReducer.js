import {
    ALL_REVIEWS,
  } from "../Actions/reviewsActions";
  
  const initialState = {
    allReviews:[]
  };
  
  const reviewReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ALL_REVIEWS:
        return {
          ...state,
          allReviews: payload
        };
      default:
        return state;
    }
  };
  
  export default reviewReducer;
  