import { Container, Navbar, Nav, Offcanvas, Dropdown } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/index";

const PlantBasedNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleAccountClick = e => {
    e.stopPropagation();
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowOffcanvas(false);
  };

  return (
    <>
      {["lg"].map(expand => (
        <Navbar id="navBar" key={expand} expand={expand} className="px-4 navbar-dark">
          <Container fluid>
            <Link to="/" className="navLink appTitle">
              <Navbar.Brand className="navbarBrand mt-2">
                <span className="title">
                  THE <span className="plantBasedSpan">PLANT</span>
                </span>
                <img src={logo} id="navbarLogo" alt="Brand logo" width={80} height={80} className="rounded-circle" />
                <span className="title">
                  <span className="plantBasedSpan">BASED</span> HUB
                </span>
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setShowOffcanvas(!showOffcanvas)}
            />
            <Navbar.Offcanvas
              className="navbarOffcanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header closeButton className="closeBtn">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="navbarBrand">
                  <div className="d-flex">
                    <Link to="/" className="navLink">
                      <img
                        src={logo}
                        id="navbarLogo"
                        alt="Brand logo"
                        width={80}
                        height={80}
                        className="rounded-circle me-3"
                      />
                    </Link>
                    <div className="mt-3">
                      <span className="titleOffCanvas">
                        THE <span className="plantBasedSpan">PLANT BASED</span> HUB
                      </span>
                      <p className="subtitleOffCanvas">
                        Cooking <span className="plantBasedSpan">Green</span>, Eating Clean
                      </p>
                    </div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-4 ms-1">
                  <Link to="/" className="navLink navLinks" onClick={() => setShowOffcanvas(false)}>
                    Home
                  </Link>
                  <Link to="/recipes" className="navLink navLinks" onClick={() => setShowOffcanvas(false)}>
                    Recipes
                  </Link>
                  <Link to="/ingredients" className="navLink navLinks" onClick={() => setShowOffcanvas(false)}>
                    Ingredients
                  </Link>
                  <Link to="/about" className="navLink navLinks" onClick={() => setShowOffcanvas(false)}>
                    About
                  </Link>
                  <Link to="/contacts" className="navLink navLinks" onClick={() => setShowOffcanvas(false)}>
                    Contact Us
                  </Link>
                  {user ? (
                    <Dropdown onClick={handleAccountClick}>
                      <Dropdown.Toggle
                        variant="link"
                        id="dropdown-basic"
                        className="no-bg navLink p-0 icon-hover-container"
                      >
                        <BsPersonCircle className="icon-hover accountIcon" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdownMenu">
                        <Dropdown.Item as="div">
                          <Link className="navLink" to="/profile">
                            Profile
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item as="div" onClick={handleLogout}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Dropdown onClick={handleAccountClick}>
                      <Dropdown.Toggle
                        variant="link"
                        id="dropdown-basic"
                        className="no-bg navLink p-0 icon-hover-container"
                      >
                        <BsPersonCircle className="icon-hover accountIcon" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdownMenu">
                        <Dropdown.Item className="dropdownItem" as="div" onClick={() => setShowOffcanvas(false)}>
                          <Link className="navLink" to="/login">
                            Login
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdownItem" as="div" onClick={() => setShowOffcanvas(false)}>
                          <Link className="navLink" to="/register">
                            Register
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default PlantBasedNavbar;
