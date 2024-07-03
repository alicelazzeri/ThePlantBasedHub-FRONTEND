import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../reducers/loadingReducer";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
