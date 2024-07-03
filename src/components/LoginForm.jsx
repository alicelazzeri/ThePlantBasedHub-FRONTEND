import { useState, useEffect } from "react";
import { Button, Col, Form, Row, FloatingLabel, Container, Toast, ToastContainer, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/index";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { PiSealWarningDuotone } from "react-icons/pi";

const LoginForm = () => {
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading.isLoading);
  const error = useSelector(state => state.auth.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !error && showToast) {
      setTimeout(() => {
        setShowToast(false);
        navigate("/");
      }, 1000);
    }
  }, [isLoading, error, showToast, navigate]);

  const handleSubmit = async event => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = new FormData(event.target);
      const loginData = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      await dispatch(loginUser(loginData));
      setShowToast(true);
    }
    setValidated(true);
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
                  {error && (
                    <Alert variant="danger" className="errorAlert">
                      <PiSealWarningDuotone className="errorIcon" />
                      {error}
                    </Alert>
                  )}
                  <Form.Group as={Col} xs={12} controlId="validationCustomEmail">
                    <FloatingLabel controlId="floatingEmail" label="Email" className="formData">
                      <Form.Control required type="email" placeholder="Email" name="email" />
                      <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} xs={12} controlId="validationCustomPassword">
                    <FloatingLabel controlId="floatingPassword" label="Password" className="formData">
                      <Form.Control required type="password" placeholder="Password" name="password" />
                      <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-center">
                  <Form.Group as={Col} xs={12} className="d-flex align-items-center">
                    <Form.Check className="me-2 checkbox" label="Remember me" feedbackType="invalid" />
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
                  <a className="formLink" href="#">
                    Reset it here
                  </a>
                </p>
              </div>
              <ToastContainer position="top-center" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                  <Toast.Header>
                    <strong className="me-auto">The Plant Based Hub</strong>
                  </Toast.Header>
                  <Toast.Body>{error ? error : "Login Successful! Welcome back."}</Toast.Body>
                </Toast>
              </ToastContainer>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default LoginForm;
