import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../reducers/loadingReducer";
import authReducer from "../reducers/authReducer";
import recipesReducer from "../reducers/recipeReducer";
import userProfileReducer from "../reducers/userProfileReducer";
import ingredientReducer from "../reducers/ingredientReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  recipes: recipesReducer,
  ingredients: ingredientReducer,
  userProfile: userProfileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
