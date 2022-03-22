import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import reviewReducer from "./reviewReducer";

const rootReducer = combineReducers({
  productsReducer,
  reviewReducer
});

export default rootReducer;
