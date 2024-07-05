import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../reducers/loadingReducer";
import authReducer from "../reducers/authReducer";
import recipesReducer from "../reducers/recipeReducer";
import userProfileReducer from "../reducers/userProfileReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  recipes: recipesReducer,
  userProfile: userProfileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
