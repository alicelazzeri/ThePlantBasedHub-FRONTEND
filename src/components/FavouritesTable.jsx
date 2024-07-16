import React, { useEffect } from "react";
import { Table, Image, Button, OverlayTrigger, Tooltip, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoriteRecipesByUserId, removeFromFavorites } from "../redux/actions";
import unavailable from "../assets/images/unavailable-recipe.png";
import { selectFavouriteRecipes } from "../redux/selectors";
import { Link } from "react-router-dom";
import { FcDislike } from "react-icons/fc";

const FavouritesTable = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.user.id);
  const favoriteRecipes = useSelector(selectFavouriteRecipes);

  useEffect(() => {
    dispatch(fetchFavoriteRecipesByUserId(userId));
  }, [dispatch, userId]);

  const handleRemoveFavorite = recipeId => {
    dispatch(removeFromFavorites(recipeId, userId));
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
          favoriteRecipes.map(favorite => {
            const { recipe } = favorite;
            return (
              <tr key={recipe.id} className="tableRow">
                <td>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip className="tooltip" id={`tooltip-${recipe.id}`}>
                        Go to {recipe.recipeName} recipe
                      </Tooltip>
                    }
                  >
                    <Link to={`/recipe/${recipe.id}`}>
                      <Image
                        src={recipe.imageUrl || unavailable}
                        alt={recipe.recipeName}
                        className="rounded-circle recipeImg"
                        width={100}
                        height={100}
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                  </OverlayTrigger>
                </td>
                <td className="recipeName">{recipe.recipeName}</td>
                <td>
                  <Badge className="recipeCategory categoryBadge">{recipe.recipeCategory.replace(/_/g, " ")}</Badge>
                </td>
                <td>
                  <Button className="deleteBtn" onClick={() => handleRemoveFavorite(recipe.id)}>
                    <FcDislike />
                  </Button>
                </td>
              </tr>
            );
          })
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
