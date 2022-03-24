import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import reviewsScore from "./reducerReview";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
  productsReducer,
  reviewReducer,
  reviewsScore,
  userReducer
});

export default rootReducer;
