import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { generateShoppingListPdf, getShoppingListHtml } from "../redux/actions";

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

export default IngredientSelectionModal;
