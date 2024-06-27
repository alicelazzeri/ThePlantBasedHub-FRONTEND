import { useState } from "react";
import { Button, Col, Form, Row, Modal, FloatingLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/actions/index.js";
import LoadingSpinner from "./LoadingSpinner";
import PropTypes from "prop-types";

const RegisterForm = () => {
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      dispatch(startLoading());
      setTimeout(() => {
        dispatch(stopLoading());
        setModalShow(true);
      }, 2000);
    }
    setValidated(true);
  };

  const SubmissionModal = props => {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Registration Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for registering! Please check your email to confirm your registration.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  SubmissionModal.propTypes = {
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
  };

  return (
    <div className="registerContainer d-flex justify-content-center align-items-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-100 w-md-75 w-lg-50">
          <Form className="text-center" noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 justify-content-center">
              <Form.Group as={Col} xs={12} md={8} controlId="validationCustom01">
                <FloatingLabel controlId="floatingFirstName" label="First name" className="formData">
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback type="invalid">Please provide a first name.</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3 justify-content-center">
              <Form.Group as={Col} xs={12} md={8} controlId="validationCustom02">
                <FloatingLabel controlId="floatingLastName" label="Last name" className="formData">
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3 justify-content-center">
              <Form.Group as={Col} xs={12} md={8} controlId="validationCustomEmail">
                <FloatingLabel controlId="floatingEmail" label="Email" className="formData">
                  <Form.Control required type="email" placeholder="Email" />
                  <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3 justify-content-center">
              <Form.Group as={Col} xs={12} md={8} controlId="validationCustomPassword">
                <FloatingLabel controlId="floatingPassword" label="Password" className="formData">
                  <Form.Control required type="password" placeholder="Password" />
                  <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="mb-3 justify-content-center">
              <Form.Group as={Col} xs={12} md={8} className="checkbox">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </Row>
            <div className="text-center">
              <Button className="submitBtn" type="submit">
                Create an account
              </Button>
            </div>
          </Form>
          <SubmissionModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
