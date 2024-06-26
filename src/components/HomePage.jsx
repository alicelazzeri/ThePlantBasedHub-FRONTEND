import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import HomePageCarousel from "./HomePageCarousel";
import PlantBasedNewsletter from "./PlantBasedNewsletter";
import LoadingSpinner from "./LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/actions/index.js";

const HomePage = ({ isAuthenticated, userName }) => {
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
          <HomePageCarousel />
          <div className="homeContainer">
            <Row>
              <Col className="text-center">
                <div>
                  <h2 className="homeTitle my-5">
                    {isAuthenticated ? `🌱 Welcome back, ${userName}! 🌱` : "🌱 Welcome to The Plant Based Hub! 🌱"}
                  </h2>
                  <p className="px-5 mb-5">
                    Welcome to <strong>The Plant Based Hub</strong>, your ultimate destination for delicious and
                    nutritious vegan recipes. Whether you are a seasoned vegan or just starting your plant-based
                    journey, our application is designed to help you find, create, and enjoy meals that suit your
                    ingredients and nutritional needs. With an intuitive user interface and smart features, The Plant
                    Based Hub aims to <strong>minimize food waste</strong> and make{" "}
                    <strong>healthy eating more accessible</strong>.
                  </p>
                </div>
                <div>
                  <h3 className="homeSubtitle">Discover and create vegan recipes</h3>
                  <div className="mb-5">
                    <p className="pt-3 pb-2">At The Plant Based Hub, you can:</p>
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">Search recipes by ingredients</span>
                      </strong>
                      <br />
                      Input the ingredients you have at home and discover elaborate vegan recipes that utilize them
                      best.
                    </p>
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">Filter by Nutritional Macro Groups</span>
                      </strong>
                      <br />
                      Select recipes based on key nutritional groups like proteins, carbohydrates, fibers, sugars,
                      minerals and vitamins for well-balanced meals.
                    </p>
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">Generate Shopping Lists</span>
                      </strong>
                      <br />
                      Choose your favourite recipes and automatically create a shopping list with precise ingredients,
                      reducing unnecessary purchases and waste.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="homeSubtitle mb-4">Key features</h3>
                  <div className="mb-5">
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">Smart recipe search</span>
                      </strong>
                      <br />
                      Easily find recipes using the ingredients you already have.
                    </p>
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">Nutritional Filtering</span>
                      </strong>
                      <br />
                      Tailor your meal choices to your specific dietary needs.
                    </p>
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">Automated Shopping List</span>
                      </strong>
                      <br />
                      Generate a detailed shopping list for selected recipes.
                    </p>
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">Waste Reduction</span>
                      </strong>
                      <br />
                      Optimize ingredient usage and minimize food waste.
                    </p>
                  </div>
                  <div>
                    <h3 className="homeSubtitle mb-4">Explore our recipes</h3>
                    <div className="mb-5">
                      <p className="px-5">
                        Discover a wide array of <strong>categorized vegan recipes</strong> for easy browsing. From
                        hearty breakfasts to the most delightful desserts, The Plant Based Hub offers something for
                        every meal and occasion.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="homeSubtitle mb-4">Customize your meals</h3>
                    <div className="mb-5">
                      <p className="px-5">
                        Create <strong>nutritionally balanced meals</strong> by filtering recipes according to your
                        dietary preferences. Whether you need more protein, fiber, or specific vitamins, our application
                        helps you plan your meals accordingly.
                      </p>
                    </div>
                    <div>
                      <h3 className="homeSubtitle mb-4">Personalized shopping lists</h3>
                      <div className="mb-5">
                        <p className="px-5">
                          Select your desired recipes and generate a <strong>custom shopping list</strong> to ensure you
                          have everything you need. This feature helps you shop efficiently and reduces food waste.
                        </p>
                      </div>
                      <div>
                        <h3 className="homeSubtitle mb-4">Share and connect</h3>
                        <div className="mb-5">
                          <p className="px-5">
                            Engage with a community of like-minded individuals by sharing your favourite recipes and
                            rating others. Enjoy a <strong>social cooking experience</strong> that encourages the
                            exchange of ideas and inspiration.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="greenHr" />
                <div>
                  <h3 className="homeSubtitle getInspired mt-5 mb-4">Get inspired: featured recipes</h3>
                  <div className="mb-5">
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">🥦 Discover the best of plant-based cooking</span>
                      </strong>
                      <br />
                      Explore our handpicked collection of vegan recipes designed to ignite your culinary passion and
                      inspire your next dish. Whether you are a long-time vegan or just beginning your plant-based
                      adventure, these recipes will tantalize your taste buds and provide wholesome nourishment.
                    </p>
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">💖 Why you will love these recipes</span>
                      </strong>
                      <br />
                      <br />
                      <strong>
                        <span className="plantBasedSpan">Easy to make</span>
                      </strong>
                      <br />
                      Simple, step-by-step instructions make these recipes perfect for cooks of all levels.
                    </p>
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">Healthy and nutritious</span>
                      </strong>
                      <br />
                      Packed with vitamins, minerals, and plant-based protein.
                    </p>
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">Waste Reduction</span>
                      </strong>
                      <br />
                      Optimize ingredient usage and minimize food waste.
                    </p>
                    <p className="px-5">
                      <strong>
                        <span className="plantBasedSpan">Delicious and satisfying</span>
                      </strong>
                      <br />
                      Flavours and textures that will keep you coming back for more.
                    </p>
                  </div>
                </div>
                <hr className="greenHr" />
                <div>
                  <h4 className="homeSubtitle mx-5 mb-4">
                    Let The Plant Based Hub be your guide to discovering the endless possibilities of vegan cuisine.
                    Embark on a fresh journey through plant based kitchen and transform the way you cook and eat!
                  </h4>
                </div>
                <hr className="greenHr" />
                <PlantBasedNewsletter />
              </Col>
            </Row>
          </div>
        </>
      )}
    </div>
  );
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};

export default HomePage;
