import { Container, Navbar, Nav, Offcanvas, Dropdown } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const PlantBasedNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const handleAccountClick = e => {
    e.stopPropagation();
  };

  const handleLogin = () => {
    // Static login for now
    setIsAuthenticated(true);
    setUserName("Alice");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName("");
  };

  return (
    <>
      {["lg"].map(expand => (
        <Navbar id="navBar" key={expand} expand={expand} className="px-4 navbar-dark">
          <Container fluid>
            <Link to="/" className="navLink appTitle" href="#home">
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
                    <a className="navLink" href="#home">
                      <img
                        src={logo}
                        id="navbarLogo"
                        alt="Brand logo"
                        width={80}
                        height={80}
                        className="rounded-circle me-3"
                      />
                    </a>
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
                  <Link to="/" className="navLink navLinks" href="#home" onClick={() => setShowOffcanvas(false)}>
                    Home
                  </Link>
                  <Link
                    to="/recipes"
                    className="navLink navLinks"
                    href="#recipes"
                    onClick={() => setShowOffcanvas(false)}
                  >
                    Recipes
                  </Link>

                  <Link
                    to="/ingredients"
                    className="navLink navLinks"
                    href="#ingredients"
                    onClick={() => setShowOffcanvas(false)}
                  >
                    Ingredients
                  </Link>

                  <Link to="/about" className="navLink navLinks" href="#about" onClick={() => setShowOffcanvas(false)}>
                    About
                  </Link>

                  <Link
                    to="/contacts"
                    className="navLink navLinks"
                    href="#contacts"
                    onClick={() => setShowOffcanvas(false)}
                  >
                    Contacts
                  </Link>

                  <a className="navLink navLinks" onClick={() => setShowOffcanvas(false)}>
                    <Dropdown onClick={handleAccountClick}>
                      <Dropdown.Toggle
                        variant="link"
                        id="dropdown-basic"
                        className="no-bg navLink p-0 icon-hover-container"
                      >
                        <BsPersonCircle className="icon-hover accountIcon" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdownMenu">
                        {!isAuthenticated ? (
                          <>
                            <Dropdown.Item className="dropdownItem" onClick={handleLogin} href="#register">
                              <Link className="navLink" to="/register">
                                Register
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdownItem" onClick={handleLogin} href="#login">
                              <Link className="navLink" to="/login">
                                Login
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdownItem" href="#reset-password">
                              <Link className="navLink" to="/reset-password">
                                Reset password
                              </Link>
                            </Dropdown.Item>
                          </>
                        ) : (
                          <>
                            <Dropdown.Item className="dropdownItem">Hi, {userName}</Dropdown.Item>
                            <Dropdown.Item className="dropdownItem" href="#profile">
                              <Link className="navLink" to="/profile/:id">
                                Your profile
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdownItem" href="#favourites">
                              <Link className="navLink" to="/favourites/:id">
                                Favourites
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdownItem" onClick={handleLogout} href="#logout">
                              <Link className="navLink" to="/logout">
                                Logout
                              </Link>
                            </Dropdown.Item>
                          </>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </a>
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
