import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegisterLoginButtons = () => {
  const navigate = useNavigate();

  return (
    <Row className="mb-5">
      <Col className=" btnContainer d-flex justify-content-center flex-xs-column gap-4">
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="registerLoginBtns"
        >
          Register to The Plant Based Hub
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="registerLoginBtns"
        >
          Login to your account
        </button>
      </Col>
    </Row>
  );
};

export default RegisterLoginButtons;
