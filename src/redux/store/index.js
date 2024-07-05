import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../reducers/loadingReducer";
import authReducer from "../reducers/authReducer";
import recipesReducer from "../reducers/recipeReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  recipes: recipesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
