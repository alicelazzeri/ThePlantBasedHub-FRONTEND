export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const registerSuccess = data => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerFailure = error => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

const API = "http://localhost:8080/auth";

export const registerUser = (userData, isAdmin) => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/register${isAdmin ? "/admin" : ""}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error("Registration failed");
    }
    const data = await response.json();
    dispatch(registerSuccess(data));
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(registerFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

export const loginUser = loginData => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }
    const data = await response.json();
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};
