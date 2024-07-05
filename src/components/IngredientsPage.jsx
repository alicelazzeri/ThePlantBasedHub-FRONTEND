import Image from "react-bootstrap/Image";
import AOS from "aos";
import "aos/dist/aos.css";
import RegisterLoginButtons from "./RegisterLoginButtons";
import wallpaper from "../assets/images/ingredients.jpg";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/actions/index.js";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const IngredientsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);

  useEffect(() => {
    dispatch(startLoading());

    setTimeout(() => {
      dispatch(stopLoading());
      AOS.init({
        duration: 2000,
        once: true,
      });
    }, 2000);
  }, [dispatch]);

  return (
    <div
      className="text-center"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="2000"
      data-aos-offset="200"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div>
            <Image className="pageWallpaper" src={wallpaper} fluid />
          </div>
          <div>
            <h2 className="recipeTitle mt-4 mb-3">OUR INGREDIENTS</h2>
            <h5 className="recipeSubtitle  mb-4">
              <strong>Discover the Essentials of Plant-Based Cooking</strong>
            </h5>
            <p className="px-5 my-3 recipeBody">
              Welcome to <strong>The Plant Based Hub</strong>, where you can explore a wide array of nutritious
              ingredients that form the foundation of a healthy vegan diet. Whether you are a seasoned vegan or just
              starting your plant-based journey, understanding the nutritional properties of various ingredients is key
              to maintaining a balanced and healthy lifestyle. Our extensive collection of ingredients will help you
              learn how to combine different foods to create nutritionally balanced vegan meals. Here are some of the
              essential ingredients you will find:
            </p>
          </div>

          <div className="mx-5 mb-4">
            <p>
              <span className="plantBasedSpan">🌱 Quinoa</span>
              <br />A complete protein source, rich in fiber and essential amino acids
            </p>
            <p>
              <span className="plantBasedSpan">🍅 Tomatoes</span>
              <br />
              High in vitamins C and K, and a great source of antioxidants
            </p>
            <p>
              <span className="plantBasedSpan">🥬 Kale</span>
              <br />
              Packed with vitamins A, C, and K, along with powerful antioxidants
            </p>
            <p>
              <span className="plantBasedSpan">🥑 Avocado</span>
              <br />
              Provides healthy fats, fiber, and a variety of vitamins and minerals
            </p>
            <p>
              <span className="plantBasedSpan">🌽 Corn</span>
              <br />
              High in fiber, vitamins B, and essential minerals
            </p>
            <p>
              <span className="plantBasedSpan">🥕 Carrots</span>
              <br /> Excellent source of beta-carotene, fiber, and vitamin K1
            </p>
            <p>
              <span className="plantBasedSpan">🍓 Strawberries</span>
              <br />
              Loaded with vitamins C and manganese, and high in antioxidants
            </p>
            <p>
              <span className="plantBasedSpan">🍠 Sweet Potatoes</span>
              <br />
              Rich in vitamins A and C, and a good source of fiber
            </p>
          </div>
          <div className="px-5 mb-5">
            <p>
              Understanding the nutritional properties of your ingredients is crucial for maintaining a healthy vegan
              diet. Let The Plant Based Hub be your guide to discovering the essential foods that will nourish your body
              and support your wellness journey. Start your exploration today and transform the way you eat!
              <br />
              <br />
              Sign up or log in to access detailed information on each ingredient and learn how to incorporate them into
              your meals for optimal health benefits.
            </p>
          </div>
          <RegisterLoginButtons />
        </>
      )}
    </div>
  );
};

export default IngredientsPage;
