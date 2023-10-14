import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Header.css";

function BasicExample() {
  const navbarStyle = {
    borderRadius: "10px", // Adjust this value to control the roundness
  };
  const logoImage =
    "https://cdn.dribbble.com/users/8333652/screenshots/16060858/media/da9669bf6d5da9ddc02ea604dfea7afb.jpg";
  return (
    <div className="container mb-3 mt-1 text-center">
      <Navbar
        expand="lg"
        className="bg-body-tertiary justify-content-center"
        style={navbarStyle}
      >
        <Container className="">
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logoImage} // Use the image link
                alt="Logo"
                width="80"
                height="70"
                className="d-inline-block align-top"
                style={navbarStyle}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="navbar-brand bold-link" to="/">
                HOME
              </Link>
              <Link className="navbar-brand bold-link" to="/Calculator">
                CALCULATOR
              </Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
