import {
  START_LOADING,
  STOP_LOADING,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE,
  GET_RECIPE_BY_ID,
  GET_RECIPES_BY_RECIPE_NAME,
  GET_RECIPES_BY_RECIPE_CATEGORY,
  GET_RECIPES_BY_INGREDIENT_NAME,
  GET_RECIPES_BY_INGREDIENT_CATEGORY,
  GET_RECIPES_BY_PROTEINS,
  GET_RECIPES_BY_CARBOHYDRATES,
  GET_RECIPES_BY_FATS,
  GET_RECIPES_BY_FIBERS,
  GET_RECIPES_BY_SUGARS,
  GET_RECIPES_BY_VITAMINS,
  GET_RECIPES_BY_MINERALS,
} from "../actions";

const initialState = {
  isLoading: false,
  recipes: [],
  error: null,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    case GET_RECIPES_SUCCESS:
      return { ...state, recipes: action.payload, error: null, isLoading: false };
    case GET_RECIPES_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case GET_RECIPE_BY_ID:
    case GET_RECIPES_BY_RECIPE_NAME:
    case GET_RECIPES_BY_RECIPE_CATEGORY:
    case GET_RECIPES_BY_INGREDIENT_NAME:
    case GET_RECIPES_BY_INGREDIENT_CATEGORY:
    case GET_RECIPES_BY_PROTEINS:
    case GET_RECIPES_BY_CARBOHYDRATES:
    case GET_RECIPES_BY_FATS:
    case GET_RECIPES_BY_FIBERS:
    case GET_RECIPES_BY_SUGARS:
    case GET_RECIPES_BY_VITAMINS:
    case GET_RECIPES_BY_MINERALS:
      return { ...state, recipes: action.payload, error: null, isLoading: false };
    default:
      return state;
  }
};

export default recipesReducer;
