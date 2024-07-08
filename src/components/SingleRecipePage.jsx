import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import { fetchRecipeById, generatePdf, sendPdfEmail, generateShoppingListPdf } from "../redux/actions";
import LoadingSpinner from "./LoadingSpinner";
import { GiAlarmClock } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { MdAlternateEmail, MdOutlineLocalFireDepartment } from "react-icons/md";
import NotFound from "./NotFound";
import ModalShoppingList from "./ModalShoppingList";
import { BsFilePdfFill } from "react-icons/bs";
import { PiListChecksBold } from "react-icons/pi";

const SingleRecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const { recipe, isLoading } = useSelector(state => state.recipes);
  const [showModal, setShowModal] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipeById(recipeId));
    }
  }, [dispatch, recipeId]);

  const handleGeneratePdf = () => {
    dispatch(generatePdf(recipeId));
  };

  const handleSendPdfEmail = () => {
    dispatch(sendPdfEmail(recipeId));
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCheckboxChange = id => {
    setSelectedIngredients(prevState =>
      prevState.includes(id) ? prevState.filter(ingredientId => ingredientId !== id) : [...prevState, id]
    );
  };

  const handleGenerateShoppingList = () => {
    dispatch(generateShoppingListPdf(selectedIngredients));
    setShowModal(false);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Container>
      {recipe ? (
        <>
          <Row className="mt-5 mb-3 d-flex align-items-center">
            <Col md={6}>
              <Image className="recipePic" src={recipe.imageUrl} fluid />
            </Col>
            <Col md={6}>
              <h2 className="recipeTitle">{recipe.recipeName}</h2>
              <p className="recipeDescription">{recipe.recipeDescription}</p>
              <p>
                <Badge className="recipeCategory">{recipe.recipeCategory.replace(/_/g, " ")}</Badge>
              </p>
              <div className="d-flex">
                <p className="recipeSub me-3">
                  <strong>Preparation time</strong>
                </p>
                <p className="d-flex">
                  <GiAlarmClock className="recipeIcon me-1" />
                  {recipe.preparationTime} minutes
                </p>
              </div>
              <div className="d-flex">
                <p className="recipeSub me-3">
                  <strong>Servings</strong>
                </p>
                <p className="d-flex">
                  <IoIosRestaurant className="recipeIcon me-1" />
                  {recipe.numberOfServings}
                </p>
              </div>

              <div className="d-flex">
                <p className="recipeSub me-3">
                  <strong>Calories per Serving</strong>
                </p>
                <p className="d-flex">
                  <MdOutlineLocalFireDepartment className="recipeIcon me-1" />
                  {recipe.caloriesPerServing} kcal
                </p>
              </div>

              <p className="recipeSub">
                <strong>Ingredients</strong>
              </p>
              <ul className="ingredientList">
                {recipe.ingredients.map(ingredient => (
                  <li key={ingredient.id}>
                    {ingredient.ingredientName} - {ingredient.quantity} {ingredient.measurementUnit}
                  </li>
                ))}
              </ul>

              <p className="recipeSub">
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
          <hr />
          <Row className="text-center my-4">
            <p className="mb-3">
              If you liked this recipe and would like to keep it for later or share it with someone, you can download a
              PDF or send it via email using the buttons below!
            </p>
            <div className="d-flex justify-content-center gap-4 mt-2 mb-4">
              <button className="pdfBtn" onClick={handleGeneratePdf}>
                <BsFilePdfFill className="pdfIcon" />
                Generate PDF
              </button>
              <button className="pdfBtn" onClick={handleSendPdfEmail}>
                <MdAlternateEmail className="pdfIcon" />
                Send PDF via Email
              </button>
            </div>
            <hr />
            <div className="mt-3 mb-4">
              <p>
                Additionally, you can create a shopping list for the ingredients you need. Simply select the items you
                want to include and generate your list with a single click!
              </p>
              <button className="pdfBtn" onClick={handleShowModal}>
                <PiListChecksBold className="pdfIcon" />
                Create Shopping List
              </button>
            </div>
          </Row>
          <Row>
            <div>comments and ratings...</div>
          </Row>
        </>
      ) : (
        <NotFound />
      )}

      <ModalShoppingList
        show={showModal}
        handleClose={handleCloseModal}
        ingredients={recipe?.ingredients || []}
        selectedIngredients={selectedIngredients}
        handleCheckboxChange={handleCheckboxChange}
        handleGenerateShoppingList={handleGenerateShoppingList}
      />
    </Container>
  );
};

export default SingleRecipePage;
