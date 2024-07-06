import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import { fetchRecipeById } from "../redux/actions";
import LoadingSpinner from "./LoadingSpinner";
import { GiAlarmClock } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

const SingleRecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const { recipe, isLoading } = useSelector(state => state.recipes);

  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipeById(recipeId));
    }
  }, [dispatch, recipeId]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const formatRecipeCategory = category => {
    return category.replace(/_/g, " ");
  };

  return (
    <Container>
      <Row className="my-4 d-flex align-items-center">
        <Col md={6}>
          <Image className="recipePic" src={recipe.imageUrl} fluid />
        </Col>
        <Col md={6}>
          <h2 className="recipeTitle">{recipe.recipeName}</h2>
          <p className="recipeDescription">{recipe.recipeDescription}</p>
          <p>
            <Badge className="recipeCategory">{formatRecipeCategory(recipe.recipeCategory)}</Badge>
          </p>
          <p className="d-flex">
            <GiAlarmClock className="recipeIcon me-1" />
            <span className="recipeSpan">Preparation time</span>: {recipe.preparationTime} minutes
          </p>
          <p>
            <IoIosRestaurant className="recipeIcon me-1" />
            Servings: {recipe.numberOfServings}
          </p>
          <p>
            <MdOutlineLocalFireDepartment className="recipeIcon me-1" />
            Calories per Serving: {recipe.caloriesPerServing} kcal
          </p>
          <p>
            <strong>Ingredients</strong>
          </p>
          <ul className="ingredientList">
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient.id}>
                {ingredient.ingredientName} - {ingredient.quantity} {ingredient.measurementUnit}
              </li>
            ))}
          </ul>

          <p>
            <strong>Instructions</strong>
          </p>
          <p>
            {recipe && recipe.recipeInstructions && (
              <ol className="instructionsList">
                {recipe.recipeInstructions.split("\n").map((instruction, index) => (
                  <li key={index}>{instruction.trim()}</li>
                ))}
              </ol>
            )}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleRecipePage;
