// src/components/FavouritesPage.jsx
import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import FavouritesTable from "./FavouritesTable";
import { useNavigate } from "react-router-dom";
import { selectFavouriteRecipes } from "../redux/selectors";

const FavouritesPage = () => {
  const favoriteRecipes = useSelector(selectFavouriteRecipes);
  const navigate = useNavigate();

  return (
    <Container className="text-center">
      <div>
        <h2 className="recipeTitle mt-4 mb-3">MY FAVOURITE RECIPES</h2>
        {favoriteRecipes.length === 0 ? (
          <>
            <p className="px-5 mt-4 recipeBody">
              You have no favorite recipes yet. Start adding some of your favorite dishes to easily access them here!
            </p>
            <button className="searchRecipesBtn mt-3 mb-5" onClick={() => navigate("/recipes")}>
              Search recipes
            </button>
          </>
        ) : (
          <FavouritesTable />
        )}
      </div>
    </Container>
  );
};

export default FavouritesPage;
