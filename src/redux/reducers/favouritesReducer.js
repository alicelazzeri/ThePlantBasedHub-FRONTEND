import {
  ADD_TO_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES_SUCCESS,
  GET_FAVORITE_RECIPES_SUCCESS,
  GET_FAVORITE_RECIPES_FAILURE,
} from "../actions";

const initialState = {
  favoriteRecipes: [],
  error: null,
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_RECIPES_SUCCESS:
      return {
        ...state,
        favoriteRecipes: action.payload,
      };
    case GET_FAVORITE_RECIPES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        favoriteRecipes: [...state.favoriteRecipes, action.payload],
      };
    case REMOVE_FROM_FAVORITES_SUCCESS:
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter(favorite => favorite.recipe.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
