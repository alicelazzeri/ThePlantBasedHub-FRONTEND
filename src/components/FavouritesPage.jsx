import { Container } from "react-bootstrap";
import FavouritesTable from "./FavouritesTable";

const FavouritesPage = () => {
  return (
    <Container className="text-center">
      <div>
        <h2 className="recipeTitle mt-4 mb-3">MY FAVOURITE RECIPES</h2>
        <p className="px-5 mt-4 recipeBody">
          Welcome to your Favorites section! Here you will find all the recipes you have saved and want to keep handy.
          Whether you are looking for ideas for breakfast, lunch, dinner, or a snack, this page allows you to easily
          access your favorite dishes and rediscover the recipes you love the most.
        </p>
      </div>
      <FavouritesTable />
    </Container>
  );
};

export default FavouritesPage;
