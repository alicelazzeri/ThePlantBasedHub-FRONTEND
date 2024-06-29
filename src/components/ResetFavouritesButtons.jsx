import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ResetFavouritesButtons = () => {
  const navigate = useNavigate();
  return (
    <Row className="my-5">
      <Col className=" btnContainer d-flex justify-content-center flex-xs-column gap-4">
        <button
          onClick={() => {
            navigate("/reset-password");
          }}
          className="registerLoginBtns formBtns"
        >
          Reset your password
        </button>
        <button
          onClick={() => {
            navigate("/favourites");
          }}
          className="registerLoginBtns formBtns"
        >
          Go to your favourites
        </button>
      </Col>
    </Row>
  );
};

export default ResetFavouritesButtons;
