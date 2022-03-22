import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import {reviewsScore} from './reducerReview'
import reviewReducer from "./reviewReducer";
const rootReducer = combineReducers({
  productsReducer,
  reviewReducer,
  reviewsScore,
});

export default rootReducer;
