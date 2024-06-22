import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <Row>
      <Col className="text-center mb-5">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="homeBtn"
        >
          Go back to Homepage
        </button>
      </Col>
    </Row>
  );
};

export default HomeButton;
