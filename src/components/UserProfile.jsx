import React, { useState } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import wallpaper from "../assets/images/pattern.jpg";
import unavailable from "../assets/images/unavailable.png";
import { MdAddAPhoto } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ResetFavouritesButtons from "./ResetFavouritesButtons";

const UserProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(unavailable);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleProfileImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container fluid className="userProfileContainer">
      <div className="coverImageContainer">
        <Image className="coverImage" src={wallpaper} fluid />
        <div className="profileImageContainer">
          <Image className="profileImage" src={profileImage} roundedCircle />
          <div className="profileImageOverlay">
            <label htmlFor="profileImageUpload">
              <MdAddAPhoto className="photoIcon" />
            </label>
            <input
              id="profileImageUpload"
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
      <h1 className="userName">Alice Lazzeri</h1>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Form className="mx-4">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} className="profileLabel">
                First Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" defaultValue="Alice" readOnly />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} className="profileLabel">
                Last Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" defaultValue="Lazzeri" readOnly />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} className="profileLabel">
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="email" defaultValue="alice@example.com" readOnly />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3} className="profileLabel">
                Password
              </Form.Label>
              <Col sm={9}>
                <div className="passwordContainer">
                  <Form.Control type={showPassword ? "text" : "password"} defaultValue="password123" readOnly />
                  {showPassword ? (
                    <FaEyeSlash onClick={toggleShowPassword} className="passwordToggleIcon" />
                  ) : (
                    <FaEye onClick={toggleShowPassword} className="passwordToggleIcon" />
                  )}
                </div>
              </Col>
            </Form.Group>
            <ResetFavouritesButtons />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
