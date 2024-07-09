// IngredientModal.jsx
import React from "react";
import { Modal, Table } from "react-bootstrap";
import PropTypes from "prop-types";

const IngredientModal = ({ ingredient, show, handleClose }) => {
  const formatCategory = category => {
    return category
      .replace(/_/g, " ")
      .replace(/(\b[A-Z]+\b)/g, match => match.charAt(0) + match.slice(1).toLowerCase());
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="ingredientName">{ingredient?.ingredientName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {ingredient && (
          <Table bordered hover className="ingredientTable">
            <tbody>
              <tr>
                <td className="key">
                  <strong>Category</strong>
                </td>
                <td>{formatCategory(ingredient.ingredientCategory)}</td>
              </tr>
              <tr>
                <td className="key">
                  <strong>Calories per Serving</strong>
                </td>
                <td>{ingredient.caloriesPerServing}</td>
              </tr>
              <tr>
                <td className="key">
                  <strong>Recommended Amount</strong>
                </td>
                <td>{ingredient.recommendedAmount}</td>
              </tr>
              <tr>
                <td className="key">
                  <strong>Proteins</strong>
                </td>
                <td>{ingredient.proteins}</td>
              </tr>
              <tr>
                <td className="key">
                  <strong>Carbohydrates</strong>
                </td>
                <td>{ingredient.carbohydrates}</td>
              </tr>
              <tr>
                <td className="key">
                  <strong>Fats</strong>
                </td>
                <td>{ingredient.fats}</td>
              </tr>
              <tr>
                <td className="key">
                  <strong>Fibers</strong>
                </td>
                <td>{ingredient.fibers}</td>
              </tr>
              <tr>
                <td className="key">
                  <strong>Sugars</strong>
                </td>
                <td>{ingredient.sugars}</td>
              </tr>
              <tr>
                <td className="key">
                  <strong>Vitamins</strong>
                </td>
                <td>{ingredient.vitamins}</td>
              </tr>
              <tr>
                <td className="key">
                  <strong>Minerals</strong>
                </td>
                <td>{ingredient.minerals}</td>
              </tr>
              <tr>
                <td className="key">
                  <strong>Description</strong>
                </td>
                <td>{ingredient.ingredientDescription}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </Modal.Body>
    </Modal>
  );
};

IngredientModal.propTypes = {
  ingredient: PropTypes.shape({
    id: PropTypes.number,
    ingredientName: PropTypes.string,
    ingredientCategory: PropTypes.string,
    caloriesPerServing: PropTypes.number,
    recommendedAmount: PropTypes.string,
    proteins: PropTypes.number,
    carbohydrates: PropTypes.number,
    fats: PropTypes.number,
    fibers: PropTypes.number,
    sugars: PropTypes.number,
    vitamins: PropTypes.string,
    minerals: PropTypes.string,
    ingredientDescription: PropTypes.string,
  }),
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default IngredientModal;
