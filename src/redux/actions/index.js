// Constants
const API_AUTH = "http://localhost:8080/auth";
const API = "http://localhost:8080/api";

export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS";
export const GET_RECIPES_FAILURE = "GET_RECIPES_FAILURE";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const GET_RECIPES_BY_RECIPE_NAME = "GET_RECIPES_BY_RECIPE_NAME";
export const GET_RECIPES_BY_RECIPE_CATEGORY = "GET_RECIPES_BY_RECIPE_CATEGORY";
export const GET_RECIPES_BY_INGREDIENT_NAME = "GET_RECIPES_BY_INGREDIENT_NAME";
export const GET_RECIPES_BY_INGREDIENT_CATEGORY = "GET_RECIPES_BY_INGREDIENT_CATEGORY";
export const GET_RECIPES_BY_PROTEINS = "GET_RECIPES_BY_PROTEINS";
export const GET_RECIPES_BY_CARBOHYDRATES = "GET_RECIPES_BY_CARBOHYDRATES";
export const GET_RECIPES_BY_FATS = "GET_RECIPES_BY_FATS";
export const GET_RECIPES_BY_FIBERS = "GET_RECIPES_BY_FIBERS";
export const GET_RECIPES_BY_SUGARS = "GET_RECIPES_BY_SUGARS";
export const GET_RECIPES_BY_VITAMINS = "GET_RECIPES_BY_VITAMINS";
export const GET_RECIPES_BY_MINERALS = "GET_RECIPES_BY_MINERALS";

export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_FAILURE = "GET_USER_PROFILE_FAILURE";
export const UPLOAD_AVATAR_SUCCESS = "UPLOAD_AVATAR_SUCCESS";
export const UPLOAD_AVATAR_FAILURE = "UPLOAD_AVATAR_FAILURE";
export const DELETE_AVATAR_SUCCESS = "DELETE_AVATAR_SUCCESS";
export const DELETE_AVATAR_FAILURE = "DELETE_AVATAR_FAILURE";

export const GENERATE_PDF_SUCCESS = "GENERATE_PDF_SUCCESS";
export const GENERATE_PDF_FAILURE = "GENERATE_PDF_FAILURE";
export const SEND_PDF_EMAIL_SUCCESS = "SEND_PDF_EMAIL_SUCCESS";
export const SEND_PDF_EMAIL_FAILURE = "SEND_PDF_EMAIL_FAILURE";
export const SET_USER_EMAIL = "SET_USER_EMAIL";

export const GENERATE_SHOPPING_LIST_PDF_SUCCESS = "GENERATE_SHOPPING_LIST_PDF_SUCCESS";
export const GENERATE_SHOPPING_LIST_PDF_FAILURE = "GENERATE_SHOPPING_LIST_PDF_FAILURE";

export const GET_COMMENTS_BY_RECIPE_ID_SUCCESS = "GET_COMMENTS_BY_RECIPE_ID_SUCCESS";
export const GET_COMMENTS_BY_RECIPE_ID_FAILURE = "GET_COMMENTS_BY_RECIPE_ID_FAILURE";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

// Action Creators

// Loading spinner
export const startLoading = () => ({ type: START_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });

// Register
export const registerSuccess = data => ({ type: REGISTER_SUCCESS, payload: data });
export const registerFailure = error => ({ type: REGISTER_FAILURE, payload: error });

// Login
export const loginSuccess = data => ({ type: LOGIN_SUCCESS, payload: data });
export const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

// Logout
export const logout = () => ({ type: LOGOUT });

// Recipes
export const getAllRecipesSuccess = recipes => ({ type: GET_RECIPES_SUCCESS, payload: recipes });
export const getAllRecipesFailure = error => ({ type: GET_RECIPES_FAILURE, payload: error });
export const getRecipeByIdSuccess = recipe => ({ type: GET_RECIPE_BY_ID, payload: recipe });
export const getRecipesByRecipeNameSuccess = recipes => ({ type: GET_RECIPES_BY_RECIPE_NAME, payload: recipes });
export const getRecipesByRecipeCategorySuccess = recipes => ({
  type: GET_RECIPES_BY_RECIPE_CATEGORY,
  payload: recipes,
});
export const getRecipesByIngredientNameSuccess = recipes => ({
  type: GET_RECIPES_BY_INGREDIENT_NAME,
  payload: recipes,
});
export const getRecipesByIngredientCategorySuccess = recipes => ({
  type: GET_RECIPES_BY_INGREDIENT_CATEGORY,
  payload: recipes,
});
export const getRecipesByProteinsSuccess = recipes => ({ type: GET_RECIPES_BY_PROTEINS, payload: recipes });
export const getRecipesByCarbohydratesSuccess = recipes => ({ type: GET_RECIPES_BY_CARBOHYDRATES, payload: recipes });
export const getRecipesByFatsSuccess = recipes => ({ type: GET_RECIPES_BY_FATS, payload: recipes });
export const getRecipesByFibersSuccess = recipes => ({ type: GET_RECIPES_BY_FIBERS, payload: recipes });
export const getRecipesBySugarsSuccess = recipes => ({ type: GET_RECIPES_BY_SUGARS, payload: recipes });
export const getRecipesByVitaminsSuccess = recipes => ({ type: GET_RECIPES_BY_VITAMINS, payload: recipes });
export const getRecipesByMineralsSuccess = recipes => ({ type: GET_RECIPES_BY_MINERALS, payload: recipes });

// User Profile
export const getUserProfileSuccess = userProfile => ({ type: GET_USER_PROFILE_SUCCESS, payload: userProfile });
export const getUserProfileFailure = error => ({ type: GET_USER_PROFILE_FAILURE, payload: error });
export const uploadAvatarSuccess = avatarUrl => ({ type: UPLOAD_AVATAR_SUCCESS, payload: avatarUrl });
export const uploadAvatarFailure = error => ({ type: UPLOAD_AVATAR_FAILURE, payload: error });
export const deleteAvatarSuccess = () => ({ type: DELETE_AVATAR_SUCCESS });
export const deleteAvatarFailure = error => ({ type: DELETE_AVATAR_FAILURE, payload: error });

// View and send recipe PDF
export const generatePdfSuccess = () => ({ type: GENERATE_PDF_SUCCESS });
export const generatePdfFailure = error => ({ type: GENERATE_PDF_FAILURE, payload: error });
export const sendPdfEmailSuccess = () => ({ type: SEND_PDF_EMAIL_SUCCESS });
export const sendPdfEmailFailure = error => ({ type: SEND_PDF_EMAIL_FAILURE, payload: error });
export const setUserEmail = email => ({ type: SET_USER_EMAIL, payload: email });

// Generate PDF shopping list
export const generateShoppingListPdfSuccess = () => ({ type: GENERATE_SHOPPING_LIST_PDF_SUCCESS });
export const generateShoppingListPdfFailure = error => ({ type: GENERATE_SHOPPING_LIST_PDF_FAILURE, payload: error });

// Comments and Ratings
export const getCommentsByRecipeIdSuccess = comments => ({
  type: GET_COMMENTS_BY_RECIPE_ID_SUCCESS,
  payload: comments,
});
export const getCommentsByRecipeIdFailure = error => ({ type: GET_COMMENTS_BY_RECIPE_ID_FAILURE, payload: error });
export const addCommentSuccess = comment => ({ type: ADD_COMMENT_SUCCESS, payload: comment });
export const addCommentFailure = error => ({ type: ADD_COMMENT_FAILURE, payload: error });

// Helper function for parsing JSON
const parseJSON = async response => {
  try {
    return await response.json();
  } catch (error) {
    return {};
  }
};

// Register
export const registerUser = (userData, isAdmin) => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API_AUTH}/register${isAdmin ? "/admin" : ""}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error("Registration failed");
    const data = await parseJSON(response);
    localStorage.setItem("id", data.userId);
    localStorage.setItem("token", data.accessToken);
    dispatch(registerSuccess(data));
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(registerFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Login
export const loginUser = loginData => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API_AUTH}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }
    const data = await response.json();
    localStorage.setItem("id", data.userId);
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("email", data.email);
    dispatch(loginSuccess(data));
    dispatch(setUserEmail(data.email));
  } catch (error) {
    dispatch(loginFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch all recipes
export const fetchAllRecipes = () => async (dispatch, getState) => {
  dispatch(startLoading());
  try {
    const state = getState();
    const token = state.auth.token;
    const response = await fetch(`${API}/recipes?page=0&size=100`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getAllRecipesSuccess(data.content));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipe by ID
export const fetchRecipeById = id => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipe");
    }
    const data = await parseJSON(response);
    dispatch(getRecipeByIdSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by recipe name
export const fetchRecipesByRecipeName = recipeName => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/name/${recipeName}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesByRecipeNameSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by recipe category
export const fetchRecipesByRecipeCategory = recipeCategory => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/category/${recipeCategory}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesByRecipeCategorySuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by ingredient name
export const fetchRecipesByIngredientName = ingredientName => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/ingredient/${ingredientName}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesByIngredientNameSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by ingredient category
export const fetchRecipesByIngredientCategory = ingredientCategory => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/ingredient-category/${ingredientCategory}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesByIngredientCategorySuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by total proteins
export const fetchRecipesByTotalProteins = (minProteins, maxProteins) => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(
      `${API}/recipes/total-proteins?minProteins=${minProteins}&maxProteins=${maxProteins}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesByProteinsSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by total carbohydrates
export const fetchRecipesByTotalCarbohydrates = (minCarbohydrates, maxCarbohydrates) => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(
      `${API}/recipes/total-carbohydrates?minCarbohydrates=${minCarbohydrates}&maxCarbohydrates=${maxCarbohydrates}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesByCarbohydratesSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by total fats
export const fetchRecipesByTotalFats = (minFats, maxFats) => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/total-fats?minFats=${minFats}&maxFats=${maxFats}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesByFatsSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by total fibers
export const fetchRecipesByTotalFibers = (minFibers, maxFibers) => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/total-fibers?minFibers=${minFibers}&maxFibers=${maxFibers}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesByFibersSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by total sugars
export const fetchRecipesByTotalSugars = (minSugars, maxSugars) => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/total-sugars?minSugars=${minSugars}&maxSugars=${maxSugars}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesBySugarsSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by total vitamins
export const fetchRecipesByTotalVitamins = vitamins => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/total-vitamins?vitamins=${vitamins}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesByVitaminsSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Fetch recipes by total minerals
export const fetchRecipesByTotalMinerals = minerals => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/total-minerals?minerals=${minerals}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await parseJSON(response);
    dispatch(getRecipesByMineralsSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// User Profile
export const fetchUserProfile = id => async dispatch => {
  dispatch(startLoading());
  const token = localStorage.getItem("token");
  console.log("Fetching user profile with token:", token);

  try {
    const response = await fetch(`${API}/users/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const data = await parseJSON(response);
    dispatch(getUserProfileSuccess(data));
  } catch (error) {
    dispatch(getUserProfileFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

export const uploadAvatar = (id, avatar) => async dispatch => {
  dispatch(startLoading());
  const token = localStorage.getItem("token");
  console.log("Uploading avatar with token:", token);

  try {
    const formData = new FormData();
    formData.append("avatar", avatar);

    const response = await fetch(`${API}/users/${id}/avatar/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload avatar");
    }

    const avatarUrl = await response.text();
    localStorage.setItem("profileImage", avatarUrl);
    dispatch(uploadAvatarSuccess(avatarUrl));
  } catch (error) {
    dispatch(uploadAvatarFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

export const deleteAvatar = (id, publicId) => async dispatch => {
  dispatch(startLoading());
  const token = localStorage.getItem("token");
  console.log("Deleting avatar with token:", token);

  try {
    const response = await fetch(`${API}/users/${id}/avatar/delete?publicId=${publicId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete avatar");
    }

    dispatch(deleteAvatarSuccess());
  } catch (error) {
    dispatch(deleteAvatarFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Recipe PDF
export const generatePdf = recipeId => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/${recipeId}/pdf`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      const errorData = await parseJSON(response);
      throw new Error(errorData.message || "Failed to generate PDF");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `recipe_${recipeId}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    dispatch(generatePdfSuccess());
  } catch (error) {
    dispatch(generatePdfFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

export const sendPdfEmail = recipeId => async (dispatch, getState) => {
  dispatch(startLoading());
  try {
    const state = getState();
    const userEmail = state.recipes.userEmail;
    const response = await fetch(`${API}/recipes/${recipeId}/send-pdf?email=${userEmail}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to send PDF via email");
    }

    dispatch(sendPdfEmailSuccess());
  } catch (error) {
    dispatch(sendPdfEmailFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Generate PDF shopping list
export const generateShoppingListPdf = items => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/shopping-list/pdf?items=${items.join(",")}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to generate shopping list PDF");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `shopping_list.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    dispatch(generateShoppingListPdfSuccess());
  } catch (error) {
    dispatch(generateShoppingListPdfFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// Comments and Ratings
export const fetchCommentsByRecipeId = recipeId => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/comments/recipe/${recipeId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    dispatch(getCommentsByRecipeIdSuccess(data));
  } catch (error) {
    dispatch(getCommentsByRecipeIdFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

export const addComment = commentData => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(commentData),
    });
    const data = await response.json();
    dispatch(addCommentSuccess(data));
  } catch (error) {
    dispatch(addCommentFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};
