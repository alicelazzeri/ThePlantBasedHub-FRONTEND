export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
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

// Loading spinner

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

// Register

export const registerSuccess = data => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerFailure = error => ({
  type: REGISTER_FAILURE,
  payload: error,
});

// Login

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Logout

export const logout = () => ({
  type: LOGOUT,
});

// Recipes

export const getAllRecipesSuccess = recipes => ({
  type: GET_RECIPES_SUCCESS,
  payload: recipes,
});

export const getAllRecipesFailure = error => ({
  type: GET_RECIPES_FAILURE,
  payload: error,
});

export const getRecipeByIdSuccess = recipe => ({
  type: GET_RECIPE_BY_ID,
  payload: recipe,
});

export const getRecipesByRecipeNameSuccess = recipes => ({
  type: GET_RECIPES_BY_RECIPE_NAME,
  payload: recipes,
});

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

export const getRecipesByProteinsSuccess = recipes => ({
  type: GET_RECIPES_BY_PROTEINS,
  payload: recipes,
});

export const getRecipesByCarbohydratesSuccess = recipes => ({
  type: GET_RECIPES_BY_CARBOHYDRATES,
  payload: recipes,
});

export const getRecipesByFatsSuccess = recipes => ({
  type: GET_RECIPES_BY_FATS,
  payload: recipes,
});

export const getRecipesByFibersSuccess = recipes => ({
  type: GET_RECIPES_BY_FIBERS,
  payload: recipes,
});

export const getRecipesBySugarsSuccess = recipes => ({
  type: GET_RECIPES_BY_SUGARS,
  payload: recipes,
});

export const getRecipesByVitaminsSuccess = recipes => ({
  type: GET_RECIPES_BY_VITAMINS,
  payload: recipes,
});

export const getRecipesByMineralsSuccess = recipes => ({
  type: GET_RECIPES_BY_MINERALS,
  payload: recipes,
});

const API_AUTH = "http://localhost:8080/auth";

// Register

export const registerUser = (userData, isAdmin) => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API_AUTH}/register${isAdmin ? "/admin" : ""}`, {
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

// Login

export const loginUser = loginData => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API_AUTH}/login`, {
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

const API = "http://localhost:8080/api";

// Fetch all recipes

export const fetchAllRecipes = () => async (dispatch, getState) => {
  const state = getState();
  const token = state.auth.token;

  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes?page=0&size=100`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch recipes");
    }
    const data = await response.json();
    dispatch(getAllRecipesSuccess(data.content));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};

// // Fetch recipe by ID

export const fetchRecipeById = id => async dispatch => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${API}/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
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
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await response.json();
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
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await response.json();
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    dispatch(getRecipesByMineralsSuccess(data));
  } catch (error) {
    dispatch(getAllRecipesFailure(error.message));
  } finally {
    dispatch(stopLoading());
  }
};
