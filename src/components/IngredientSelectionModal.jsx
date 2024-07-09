import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { generateShoppingListPdf, getShoppingListHtml } from "../redux/actions";
import PropTypes from "prop-types";

const IngredientSelectionModal = ({ show, handleClose, ingredients }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const dispatch = useDispatch();

  const handleCheckboxChange = ingredientId => {
    setSelectedIngredients(prevSelectedIngredients =>
      prevSelectedIngredients.includes(ingredientId)
        ? prevSelectedIngredients.filter(id => id !== ingredientId)
        : [...prevSelectedIngredients, ingredientId]
    );
  };

  const handleGeneratePdf = () => {
    const selectedItems = ingredients
      .filter(ingredient => selectedIngredients.includes(ingredient.id))
      .map(ingredient => ingredient.ingredientName);
    dispatch(generateShoppingListPdf(selectedItems));
  };

  const handleGenerateHtml = () => {
    const selectedItems = ingredients
      .filter(ingredient => selectedIngredients.includes(ingredient.id))
      .map(ingredient => ingredient.ingredientName);
    dispatch(getShoppingListHtml(selectedItems));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Ingredients for Shopping List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {ingredients.map(ingredient => (
            <Form.Check
              key={ingredient.id}
              type="checkbox"
              label={`${ingredient.ingredientName} - ${ingredient.quantity} ${ingredient.measurementUnit}`}
              checked={selectedIngredients.includes(ingredient.id)}
              onChange={() => handleCheckboxChange(ingredient.id)}
            />
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleGenerateHtml}>
          Generate HTML Shopping List
        </Button>
        <Button variant="primary" onClick={handleGeneratePdf}>
          Generate PDF Shopping List
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

IngredientSelectionModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ingredientName: PropTypes.string.isRequired,
      quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      measurementUnit: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default IngredientSelectionModal;
