import {
  START_LOADING,
  STOP_LOADING,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  DELETE_AVATAR_SUCCESS,
  DELETE_AVATAR_FAILURE,
} from "../actions";

const initialState = {
  userProfile: null,
  isLoading: false,
  error: null,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, userProfile: action.payload, isLoading: false };
    case GET_USER_PROFILE_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case UPLOAD_AVATAR_SUCCESS:
      return { ...state, userProfile: { ...state.userProfile, avatarUrl: action.payload }, isLoading: false };
    case UPLOAD_AVATAR_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case DELETE_AVATAR_SUCCESS:
      return { ...state, userProfile: { ...state.userProfile, avatarUrl: null }, isLoading: false };
    case DELETE_AVATAR_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default userProfileReducer;
