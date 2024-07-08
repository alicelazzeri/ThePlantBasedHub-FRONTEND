import React, { useState } from "react";
import { Modal, Form, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { generateShoppingListPdf } from "../redux/actions";
import PropTypes from "prop-types";
import { IoIosCloseCircle } from "react-icons/io";
import { BsFilePdfFill } from "react-icons/bs";

const ModalShoppingList = ({ show, handleClose, ingredients }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const dispatch = useDispatch();

  const handleCheckboxChange = event => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedIngredients([...selectedIngredients, value]);
    } else {
      setSelectedIngredients(selectedIngredients.filter(item => item !== value));
    }
  };

  const handleGeneratePdf = () => {
    dispatch(generateShoppingListPdf(selectedIngredients));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="modalTitle">Select Ingredients for your Shopping List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <ListGroup>
            {ingredients.map(ingredient => (
              <ListGroup.Item className="ingredients" key={ingredient.id}>
                <Form.Check
                  type="checkbox"
                  label={`${ingredient.ingredientName} - ${ingredient.quantity} ${ingredient.measurementUnit}`}
                  value={ingredient.ingredientName}
                  onChange={handleCheckboxChange}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button className="pdfBtn" onClick={handleGeneratePdf}>
            <BsFilePdfFill className="pdfIcon" />
            Generate Shopping List PDF
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

ModalShoppingList.propTypes = {
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

export default ModalShoppingList;
