import { ADD_TO_FAVORITES_SUCCESS, REMOVE_FROM_FAVORITES_SUCCESS } from "../actions";

const initialState = {
  favoriteRecipes: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        favoriteRecipes: [...state.favoriteRecipes, action.payload],
      };
    case REMOVE_FROM_FAVORITES_SUCCESS:
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter(recipe => recipe.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
