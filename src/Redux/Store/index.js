import rootReducer from "../Reducers";
import userReducer from "../Reducers/userReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistCongif = {
  key : 'root',
  storage,
  whitelist : ['userReducer',"productsReducer"]
};

const persistedReducer = persistReducer(persistCongif, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

