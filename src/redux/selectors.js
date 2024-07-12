// src/redux/selectors.js
import { createSelector } from "reselect";

const selectFavouritesState = state => state.favourites;

export const selectFavouriteRecipes = createSelector(
  [selectFavouritesState],
  favouritesState => favouritesState.favoriteRecipes
);
