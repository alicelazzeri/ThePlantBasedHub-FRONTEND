import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Badge, Form } from "react-bootstrap";
import {
  fetchRecipeById,
  generatePdf,
  sendPdfEmail,
  generateShoppingListPdf,
  fetchCommentsByRecipeId,
  addComment,
  addToFavorites,
  removeFromFavorites,
} from "../redux/actions";
import LoadingSpinner from "./LoadingSpinner";
import { GiAlarmClock } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { MdAlternateEmail, MdOutlineLocalFireDepartment } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BsHeart, BsHeartFill } from "react-icons/bs"; // Import delle icone del cuore
import NotFound from "./NotFound";
import ModalShoppingList from "./ModalShoppingList";
import { BsFilePdfFill } from "react-icons/bs";
import { PiListChecksBold } from "react-icons/pi";

const SingleRecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const { recipe, isLoading, error, comments } = useSelector(state => state.recipes);
  const { favoriteRecipes = [] } = useSelector(state => state.favourites);
  const [showModal, setShowModal] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipeById(recipeId));
      dispatch(fetchCommentsByRecipeId(recipeId));
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

  const handleCommentChange = event => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    dispatch(addComment({ recipeId, text: newComment, rating }));
    setNewComment("");
    setRating(0);
  };

  const handleStarClick = value => {
    setRating(value);
  };

  const handleFavoriteToggle = () => {
    if (favoriteRecipes.includes(recipeId)) {
      dispatch(removeFromFavorites(recipeId));
    } else {
      dispatch(addToFavorites(recipeId));
    }
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Container>
      {error ? (
        <div>Error: {error}</div>
      ) : recipe ? (
        <>
          <Row className="mt-5 mb-3 d-flex align-items-center">
            <Col md={6}>
              <Image className="recipePic" src={recipe.imageUrl} fluid />
            </Col>
            <Col md={6}>
              <h2 className="recipeTitle">{recipe.recipeName}</h2>
              <div className="favorite-icon" onClick={handleFavoriteToggle}>
                {favoriteRecipes.includes(recipeId) ? (
                  <BsHeartFill color="red" size={20} />
                ) : (
                  <BsHeart color="grey" size={20} />
                )}
              </div>
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
              <ul className="ingredientList no-indent">
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
          <hr />
          <Row className="commentsContainer mb-3 py-3">
            <Col>
              <h3 className="recipeTitle my-3 commentTitle">Comments</h3>
              {comments && comments.length > 0 ? (
                <ul className="commentsList">
                  {comments.map(comment => (
                    <li key={comment.id} className="commentList mb-2">
                      <div className="commentItem">
                        <img
                          src={comment.user.avatarUrl}
                          width="50"
                          height="50"
                          className="commentAvatar rounded-circle"
                          alt="avatar"
                        />
                        <div className="commentContent">
                          <strong>
                            {comment.user.firstName} {comment.user.lastName}
                          </strong>
                          <div className="rating">
                            {[...Array(5)].map((star, index) => (
                              <FaStar
                                key={index}
                                size={20}
                                color={index < comment.recipeRating ? "#ffc107" : "#bcbec4"}
                              />
                            ))}
                          </div>
                          <p>{comment.commentText}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="noComment">No comments yet. Be the first to comment!</p>
              )}

              <Form.Group className="mb-3 commentForm" controlId="comment">
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newComment}
                  placeholder="Add a comment"
                  onChange={handleCommentChange}
                />
              </Form.Group>
              <div className="rating addRating mb-3">
                {[...Array(5)].map((star, index) => (
                  <FaStar
                    key={index}
                    size={30}
                    color={index < rating ? "#ffc107" : "#bcbec4"}
                    onClick={() => handleStarClick(index + 1)}
                  />
                ))}
              </div>
              <button className="commentBtn mb-4" onClick={handleCommentSubmit}>
                Submit Comment
              </button>
            </Col>
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
