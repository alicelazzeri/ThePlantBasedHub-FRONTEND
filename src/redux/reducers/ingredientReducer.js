import { START_LOADING, STOP_LOADING, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILURE } from "../actions";

const initialState = {
  isLoading: false,
  ingredients: [],
  error: null,
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    case GET_INGREDIENTS_SUCCESS:
      return { ...state, ingredients: action.payload, error: null, isLoading: false };
    case GET_INGREDIENTS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default ingredientReducer;
