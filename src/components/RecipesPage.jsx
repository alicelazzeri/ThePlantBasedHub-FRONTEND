import Image from "react-bootstrap/Image";
import RegisterLoginButtons from "./RegisterLoginButtons";
import wallpaper from "../assets/images/soup.jpg";

const RecipesPage = () => {
  return (
    <div
      className="text-center"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <div>
        <Image className="pageWallpaper" src={wallpaper} fluid />
      </div>
      <div>
        <hr className="mt-0" />
        <hr />
        <h2 className="recipeTitle mt-4 mb-3">OUR RECIPES</h2>
        <hr />
        <hr />
        <h5 className="recipeSubtitle mb-4">
          <strong>Discover a world of delicious Vegan Recipes</strong>
        </h5>
        <p className="px-5 my-3 recipeBody">
          Welcome to <strong>The Plant Based Hub</strong>, your ultimate destination for discovering, creating, and
          enjoying nutritious vegan recipes. Whether you are a seasoned vegan or just starting your plant-based journey,
          we provide a rich variety of recipes designed to suit your ingredients and nutritional needs. Explore our
          extensive collection of vegan recipes, including breakfasts, lunches, dinners, and delightful desserts. Here
          are just a few of the mouth-watering recipes that await you:
        </p>
      </div>

      <div className="mx-5 mb-4">
        <p>
          <span className="plantBasedSpan">🍳 Vegan Tofu Scramble</span>
          <br />A perfect protein-packed breakfast to start your day
        </p>
        <p>
          <span className="plantBasedSpan">🥞 Vegan Pancakes</span>
          <br />
          Fluffy and delicious, ideal for a leisurely morning meal
        </p>
        <p>
          <span className="plantBasedSpan">🥗 Quinoa Salad with Avocado</span>
          <br />A nutritious and refreshing lunch option
        </p>
        <p>
          <span className="plantBasedSpan">🍣 Vegan Sushi Rolls</span>
          <br />
          Perfect for a light, flavorful dinner
        </p>
        <p>
          <span className="plantBasedSpan">🍛 Vegan Cauliflower Curry</span>
          <br />A comforting and spicy dinner dish
        </p>
        <p>
          <span className="plantBasedSpan">🍫 Vegan Chocolate Cake</span>
          <br />
          Indulge in a rich and decadent dessert
        </p>
      </div>
      <div className="px-5 mb-5">
        <p>
          ... And this is just a hint of what you might find! ✨
          <br />
          <br />
          Sign up or log in to access the full collection and take advantage of our smart recipe search, nutritional
          filtering, and automated shopping list features.
        </p>
      </div>
      <RegisterLoginButtons />
    </div>
  );
};

export default RecipesPage;
