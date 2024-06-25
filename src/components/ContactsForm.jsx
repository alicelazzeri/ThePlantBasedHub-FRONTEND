import { useState } from "react";
import { Button, Col, Form, FormGroup, InputGroup, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types"; // Corretto import di PropTypes
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import logo from "../assets/images/logo.png";

const ContactsForm = () => {
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
            Thank you for contacting us! Please check your inbox, we will get back to you as soon as possible.
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

  return (
    <Form className="contactsForm m-5" noValidate validated={validated} onSubmit={handleSubmit}>
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
      <Row className="mt-3">
        <FormGroup as={Col} md="12" controlId="validationCustomMessage">
          <InputGroup hasValidation>
            <Form.Control
              className="formData"
              as="textarea"
              placeholder="Write your message here"
              aria-describedby="inputGroupPrepend"
              required
              rows={5}
            />
            <Form.Control.Feedback className="formData" type="invalid">
              Please write your message.
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
      <div className="text-center">
        <Button className="submitBtn" type="submit">
          Send your message
        </Button>
      </div>

      <SubmissionModal show={modalShow} onHide={() => setModalShow(false)} />
    </Form>
  );
};

export default ContactsForm;
