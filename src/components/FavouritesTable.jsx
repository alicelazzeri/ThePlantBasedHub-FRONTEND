// src/components/FavouritesTable.jsx
import React, { useEffect } from "react";
import { Table, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteRecipesByUserId, removeFromFavorites } from "../redux/actions";
import unavailable from "../assets/images/unavailable-recipe.png";
import { BsTrash3Fill } from "react-icons/bs";
import { selectFavouriteRecipes } from "../redux/selectors";

const FavouritesTable = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.id);
  const favoriteRecipes = useSelector(selectFavouriteRecipes);

  useEffect(() => {
    dispatch(fetchFavoriteRecipesByUserId(userId));
  }, [dispatch, userId]);

  const handleRemoveFavorite = recipeId => {
    dispatch(removeFromFavorites(recipeId));
  };

  return (
    <Table hover className="favTable" responsive="sm">
      <thead className="tHead">
        <tr>
          <th></th>
          <th>Recipe Name</th>
          <th>Recipe Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {favoriteRecipes.length > 0 ? (
          favoriteRecipes.map(recipe => (
            <tr key={recipe.id} className="tableRow">
              <td>
                <Image
                  src={recipe.image || unavailable}
                  alt={recipe.name}
                  className="rounded-circle recipeImg"
                  width={100}
                  height={100}
                />
              </td>
              <td>{recipe.recipeName}</td>
              <td>{recipe.recipeCategory}</td>
              <td>
                <Button className="deleteBtn" onClick={() => handleRemoveFavorite(recipe.id)}>
                  <BsTrash3Fill />
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No favorite recipes found. Add some!
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default FavouritesTable;
