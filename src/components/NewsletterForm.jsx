import { useState } from "react";
import { Button, FormGroup, Modal } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import logo from "../assets/images/logo.png";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const SubmissionModal = props => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title className="modalHeader" id="contained-modal-title-vcenter">
          <img className="modalLogo rounded-circle" src={logo} alt="Logo pic" width={70} height={70} />
          <span className="modalTitle">
            THE <span className="plantBasedSpan">PLANT BASED</span> HUB
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBodyContainer">
        <h4 className="modalSubtitle">
          <BsFillBookmarkCheckFill className="modalIcon" />
          Form submitted successfully!
        </h4>
        <p className="modalBody">
          Thank you for joining the club! Your registration will be confirmed automatically to the given e-mail address.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="modalBtn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

SubmissionModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

const NewsletterForm = () => {
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setModalShow(true);
    }
    setValidated(true);
  };

  return (
    <Form className="newsletterForm" noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 mt-4 mt-md-5">
        <Form.Group className="mb-3 mb-md-0" as={Col} md="6" controlId="validationCustomName">
          <Form.Control className="formData" required type="text" placeholder="Name" />
          <Form.Control.Feedback className="formData" type="invalid">
            Please choose a name.
          </Form.Control.Feedback>
        </Form.Group>
        <FormGroup as={Col} md="6" controlId="validationCustomSurname">
          <Form.Control className="formData" required type="text" placeholder="Surname" />
          <Form.Control.Feedback className="formData" type="invalid">
            Please choose a surname.
          </Form.Control.Feedback>
        </FormGroup>
      </Row>
      <Row>
        <FormGroup as={Col} md="12" controlId="validationCustomEmail">
          <InputGroup hasValidation>
            <Form.Control
              className="formData"
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback className="formData" type="invalid">
              Please choose an email.
            </Form.Control.Feedback>
          </InputGroup>
        </FormGroup>
      </Row>

      <FormGroup className="mb-3 checkbox">
        <Form.Check
          required
          label="I agree to the terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </FormGroup>
      <div className="text-align-center">
        <Button className="submitBtn" type="submit">
          Join the newsletter
        </Button>
      </div>

      <SubmissionModal show={modalShow} onHide={() => setModalShow(false)} />
    </Form>
  );
};

export default NewsletterForm;
