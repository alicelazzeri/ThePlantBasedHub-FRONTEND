import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Row, Col, Form } from "react-bootstrap";
import { startLoading, stopLoading } from "../redux/actions/index.js";
import wallpaper from "../assets/images/ingredients.jpg";
import LoadingSpinner from "./LoadingSpinner.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const IngredientsPageAuth = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);
  const [filter, setFilter] = useState("");
  const [ingredients] = useState([
    { name: "Quinoa", description: "A complete protein source, rich in fiber and essential amino acids 🌱" },
    { name: "Tomatoes", description: "High in vitamins C and K, and a great source of antioxidants 🍅" },
    { name: "Kale", description: "Packed with vitamins A, C, and K, along with powerful antioxidants 🥬" },
    { name: "Avocado", description: "Provides healthy fats, fiber, and a variety of vitamins and minerals 🥑" },
    { name: "Corn", description: "High in fiber, vitamins B, and essential minerals 🌽" },
    { name: "Carrots", description: "Excellent source of beta-carotene, fiber, and vitamin K1 🥕" },
    { name: "Strawberries", description: "Loaded with vitamins C and manganese, and high in antioxidants 🍓" },
    { name: "Sweet Potatoes", description: "Rich in vitamins A and C, and a good source of fiber 🍠" },
  ]);
  const [filteredIngredients, setFilteredIngredients] = useState(ingredients);

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

  useEffect(() => {
    setFilteredIngredients(
      ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter, ingredients]);

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
            <h5 className="recipeSubtitle mb-4">
              <strong>Discover the Essentials of Plant-Based Cooking</strong>
            </h5>
            <Form className="mb-5">
              <Form.Group as={Col} md="6" className="mx-auto">
                <Form.Control
                  type="text"
                  placeholder="Filter ingredients..."
                  value={filter}
                  onChange={e => setFilter(e.target.value)}
                />
              </Form.Group>
            </Form>
            <Row className="px-5">
              {filteredIngredients.map((ingredient, index) => (
                <Col key={index} md={4} className="mb-4">
                  <div className="ingredientCard">
                    <h5>{ingredient.name}</h5>
                    <p>{ingredient.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </div>
  );
};

export default IngredientsPageAuth;
