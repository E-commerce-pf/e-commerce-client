import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import reviewsScore from "./reducerReview";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";
import reduceruserID from "./reduceruserID";
import reducerNewletter from "./reducerNewletter";

const rootReducer = combineReducers({
  productsReducer,
  reviewReducer,
  reviewsScore,
  userReducer,
  reduceruserID,
  reducerNewletter,
});

export default rootReducer;
