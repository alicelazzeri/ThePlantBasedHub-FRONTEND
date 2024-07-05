import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import wallpaper from "../assets/images/pattern.jpg";
import unavailable from "../assets/images/unavailable.png";
import { MdAddAPhoto } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ResetFavouritesButtons from "./ResetFavouritesButtons";
import LoadingSpinner from "./LoadingSpinner";
import { fetchUserProfile, uploadAvatar, deleteAvatar } from "../redux/actions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { userProfile, isLoading } = useSelector(state => state.userProfile);
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(unavailable);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) {
      dispatch(fetchUserProfile(userId));
    }
  }, [dispatch]);

  useEffect(() => {
    if (userProfile && userProfile.avatarUrl) {
      setProfileImage(userProfile.avatarUrl);
    }
  }, [userProfile]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleProfileImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      dispatch(uploadAvatar(userProfile.id, file));
    }
  };

  const handleDeleteAvatar = () => {
    if (userProfile.avatarUrl) {
      const publicId = userProfile.avatarUrl.split("/").pop();
      dispatch(deleteAvatar(userProfile.id, publicId));
    }
  };

  return (
    <div className="profileContainer d-flex justify-content-center align-items-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
            {userProfile && userProfile.avatarUrl && (
              <Button onClick={handleDeleteAvatar} className="mt-2">
                Delete Avatar
              </Button>
            )}
          </div>
          {userProfile && (
            <>
              <h1 className="userName">
                {userProfile.firstName} {userProfile.lastName}
              </h1>
              <Row className="justify-content-center mt-4">
                <Col md={8}>
                  <Form className="mx-4">
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={3} className="profileLabel">
                        First Name
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          defaultValue={userProfile.firstName}
                          readOnly
                          className="profileInput"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={3} className="profileLabel">
                        Last Name
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          defaultValue={userProfile.lastName}
                          readOnly
                          className="profileInput"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={3} className="profileLabel">
                        Email
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control type="email" defaultValue={userProfile.email} readOnly className="profileInput" />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={3} className="profileLabel">
                        Password
                      </Form.Label>
                      <Col sm={9}>
                        <div className="passwordContainer">
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            defaultValue="password123"
                            readOnly
                            className="profileInput"
                          />
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
            </>
          )}
        </Container>
      )}
    </div>
  );
};

export default UserProfile;
