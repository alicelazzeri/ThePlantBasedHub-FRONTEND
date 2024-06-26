import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form, Button, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import wallpaper from "../assets/images/soup.jpg";
import { startLoading, stopLoading } from "../redux/actions/index.js";
import LoadingSpinner from "./LoadingSpinner";

const RecipesPageAuth = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);

  const [filter, setFilter] = useState("");
  const [recipes] = useState([
    {
      id: 1,
      title: "Vegan Tofu Scramble",
      category: "Breakfast",
      description: "A perfect protein-packed breakfast to start your day.",
    },
    {
      id: 2,
      title: "Vegan Pancakes",
      category: "Breakfast",
      description: "Fluffy and delicious, ideal for a leisurely morning meal.",
    },
    {
      id: 3,
      title: "Quinoa Salad with Avocado",
      category: "Lunch",
      description: "A nutritious and refreshing lunch option.",
    },
    { id: 4, title: "Vegan Sushi Rolls", category: "Dinner", description: "Perfect for a light, flavorful dinner." },
    { id: 5, title: "Vegan Cauliflower Curry", category: "Dinner", description: "A comforting and spicy dinner dish." },
    {
      id: 6,
      title: "Vegan Chocolate Cake",
      category: "Dessert",
      description: "Indulge in a rich and decadent dessert.",
    },
  ]);

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

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe => recipe.category.toLowerCase().includes(filter.toLowerCase()));

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
            <hr className="mt-0" />
            <hr />
            <h2 className="recipeTitle mt-4 mb-3">OUR RECIPES</h2>
            <hr />
            <hr />
            <h5 className="recipeSubtitle mb-4">
              <strong>Discover a world of delicious Vegan Recipes</strong>
            </h5>
          </div>
          <div className="px-5 mb-5">
            <Form className="mb-4">
              <Row className="justify-content-center">
                <Col xs={12} md={6} lg={4}>
                  <Form.Group controlId="recipeFilter">
                    <Form.Control as="select" value={filter} onChange={handleFilterChange}>
                      <option value="">All Categories</option>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Dessert">Dessert</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Row>
              {filteredRecipes.map(recipe => (
                <Col xs={12} md={6} lg={4} key={recipe.id} className="mb-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>{recipe.description}</Card.Text>
                      <Button variant="primary">View Recipe</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipesPageAuth;
