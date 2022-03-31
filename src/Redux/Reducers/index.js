import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import reviewsScore from "./reducerReview";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";
import reduceruserID from './reduceruserID';


const rootReducer = combineReducers({
  productsReducer,
  reviewReducer,
  reviewsScore,
  userReducer,
  reduceruserID
});

export default rootReducer;
