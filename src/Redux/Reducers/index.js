import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import reviewsScore from "./reducerReview";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  productsReducer,
  reviewReducer,
  reviewsScore,
  userReducer,
  cartReducer,
});

export default rootReducer;
