import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import {reviewsScore} from './reducerReview'

const rootReducer = combineReducers({
  productsReducer,
  reviewsScore
});

export default rootReducer;
