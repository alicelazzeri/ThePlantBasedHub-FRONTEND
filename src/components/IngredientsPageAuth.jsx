// IngredientsPageAuth.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Row, Col, Form, Card, Badge } from "react-bootstrap";
import { fetchIngredients } from "../redux/actions";
import wallpaper from "../assets/images/ingredients.jpg";
import LoadingSpinner from "./LoadingSpinner";
import AOS from "aos";
import "aos/dist/aos.css";
import IngredientModal from "./IngredientModal";

const IngredientsPageAuth = () => {
  const dispatch = useDispatch();
  const { isLoading, ingredients, error } = useSelector(state => state.ingredients);
  const [category, setCategory] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    dispatch(fetchIngredients());
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, [dispatch]);

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleShowModal = ingredient => {
    setSelectedIngredient(ingredient);
  };

  const handleCloseModal = () => {
    setSelectedIngredient(null);
  };

  const filteredIngredients = category
    ? ingredients.filter(ingredient => ingredient.ingredientCategory === category)
    : ingredients;

  const formatCategory = category => {
    return category.replace(/_/g, " ").replace(/(\b[A-Z]+\b)/g, match => match.charAt(0) + match.slice(1));
  };

  return (
    <div className="text-center mb-5">
      <div>
        <Image className="pageWallpaper" src={wallpaper} fluid />
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <div>
            <h2 className="recipeTitle mt-4 mb-3">OUR INGREDIENTS</h2>
            <h5 className="recipeSubtitle mb-4">
              <strong>Discover the Essentials of Plant-Based Cooking</strong>
            </h5>
            <div className="mx-5">
              <Form className="mb-3">
                <Row className="justify-content-center">
                  <Col xs={12} md={6} lg={4}>
                    <Form.Group controlId="ingredientCategory">
                      <Form.Control
                        className="recipeFilter"
                        as="select"
                        value={category}
                        onChange={handleCategoryChange}
                      >
                        <option value="">All Categories</option>
                        <option value="VEGETABLES">Vegetables</option>
                        <option value="FRUIT">Fruit</option>
                        <option value="GRAINS">Grains</option>
                        <option value="LEGUMES">Legumes</option>
                        <option value="NUTS_SEEDS">Nuts and Seeds</option>
                        <option value="GRAIN_PRODUCTS">Grain Products</option>
                        <option value="MEAT_DAIRY_SUBSTITUTES">Meat and Dairy Substitutes</option>
                        <option value="SWEETENERS">Sweeteners</option>
                        <option value="OILS_CONDIMENTS">Oils and Condiments</option>
                        <option value="SPICES">Spices</option>
                        <option value="SUPERFOODS">Superfoods</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              <hr />
            </div>
          </div>
          <Row className="justify-content-center px-5">
            {filteredIngredients.map((ingredient, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                <Card className="ingredientCard d-flex flex-column h-100">
                  <Card.Header>
                    <Badge className="ingredientCategory">{formatCategory(ingredient.ingredientCategory)}</Badge>
                  </Card.Header>
                  <Card.Body className="d-flex flex-column flex-grow-1">
                    <Card.Title className="ingredientTitle">{ingredient.ingredientName}</Card.Title>
                    <Card.Text className="flex-grow-1">{ingredient.ingredientDescription}</Card.Text>
                    <button className="ingredientBtn mt-auto" onClick={() => handleShowModal(ingredient)}>
                      Check more
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
      {selectedIngredient && (
        <IngredientModal ingredient={selectedIngredient} show={!!selectedIngredient} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default IngredientsPageAuth;
