import { useState } from "react";
import { Button, Col, Form, Row, FloatingLabel, Container, Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/index";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isAdminChecked, setIsAdminChecked] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);
  const navigate = useNavigate();

  const handleSubmit = async event => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = new FormData(event.target);
      const userData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
      };
      await dispatch(registerUser(userData, isAdminChecked));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/");
      }, 1000);
    }
    setValidated(true);
  };

  return (
    <div className="registerContainer d-flex justify-content-center align-items-center mt-5">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Container className="w-100 w-md-75 w-lg-50">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Form className="text-center" noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 justify-content-center">
                  <Col xs={12}>
                    <Form.Group controlId="validationCustom01">
                      <FloatingLabel controlId="floatingFirstName" label="First name" className="formData">
                        <Form.Control required type="text" placeholder="First name" name="firstName" />
                        <Form.Control.Feedback type="invalid">Please provide a first name.</Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3 justify-content-center">
                  <Col xs={12}>
                    <Form.Group controlId="validationCustom02">
                      <FloatingLabel controlId="floatingLastName" label="Last name" className="formData">
                        <Form.Control required type="text" placeholder="Last name" name="lastName" />
                        <Form.Control.Feedback type="invalid">Please provide a last name.</Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3 justify-content-center">
                  <Col xs={12}>
                    <Form.Group controlId="validationCustomEmail">
                      <FloatingLabel controlId="floatingEmail" label="Email" className="formData">
                        <Form.Control required type="email" placeholder="Email" name="email" />
                        <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3 justify-content-center">
                  <Form.Group as={Col} xs={12} controlId="validationCustomPassword">
                    <FloatingLabel controlId="floatingPassword" label="Password" className="formData">
                      <Form.Control required type="password" placeholder="Password" name="password" />
                      <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={12} className="d-flex align-items-center checkbox">
                    <Form.Check
                      className="me-2"
                      type="checkbox"
                      label="Register as Admin"
                      checked={isAdminChecked}
                      onChange={() => setIsAdminChecked(!isAdminChecked)}
                    />
                  </Col>
                </Row>
                <Row className="mb-3 justify-content-center">
                  <Col xs={12} className="d-flex align-items-center checkbox">
                    <Form.Check
                      className="me-2"
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="submitBtn" type="submit">
                    Register
                  </Button>
                </div>
              </Form>
              <ToastContainer position="top-center" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                  <Toast.Header>
                    <strong className="me-auto">The Plant Based Hub</strong>
                  </Toast.Header>
                  <Toast.Body>Registration Successful! Please check your email.</Toast.Body>
                </Toast>
              </ToastContainer>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default RegisterForm;
