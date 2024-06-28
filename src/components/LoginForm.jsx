import { useState } from "react";
import { Button, Col, Form, Row, Modal, FloatingLabel, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/actions/index.js";
import LoadingSpinner from "./LoadingSpinner";
import PropTypes from "prop-types";

const LoginForm = () => {
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);

  const handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();
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
          <Modal.Title id="contained-modal-title-vcenter">Login Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Welcome back! You have successfully logged in.</p>
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
    <div className="loginContainer d-flex justify-content-center align-items-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Container className="w-100 w-md-75 w-lg-50 mt-4">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Form className="text-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} xs={12} controlId="validationCustomEmail">
                    <FloatingLabel controlId="floatingEmail" label="Email" className="formData">
                      <Form.Control required type="email" placeholder="Email" />
                      <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} xs={12} controlId="validationCustomPassword">
                    <FloatingLabel controlId="floatingPassword" label="Password" className="formData">
                      <Form.Control required type="password" placeholder="Password" />
                      <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-center">
                  <Form.Group as={Col} xs={12} className="d-flex align-items-center">
                    <Form.Check
                      className="me-2 checkbox"
                      required
                      label="Remember me"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                </Row>
                <div className="text-center">
                  <Button className="submitBtn" type="submit">
                    Log In
                  </Button>
                </div>
              </Form>
              <div className="text-center mt-4 mb-5 mx-5">
                <p>
                  New to The Plant Based Hub?{" "}
                  <a className="formLink" href="/register">
                    Register here
                  </a>
                </p>
                <p>
                  Forgot your password?{" "}
                  <a className="formLink" href="/reset-password">
                    Reset it here
                  </a>
                </p>
              </div>
              <SubmissionModal show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default LoginForm;
