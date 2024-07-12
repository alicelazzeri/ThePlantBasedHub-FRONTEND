import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_SUCCESS } from "../actions";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload.user, token: action.payload.token, isAuthenticated: true, error: null };
    case REGISTER_FAILURE:
      return { ...state, error: action.payload };
    case LOGIN_SUCCESS:
      console.log("Login Success Payload:", action.payload);
      return {
        ...state,
        user: {
          id: action.payload.id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
        },
        token: action.payload.accessToken,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    case LOGOUT:
      return { ...state, user: null, token: null, isAuthenticated: false, error: null };
    default:
      return state;
  }
};

export default authReducer;
