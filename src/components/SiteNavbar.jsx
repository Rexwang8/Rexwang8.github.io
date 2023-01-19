import { Navbar, Container, Col, Row, Button, Nav, NavDropdown, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/result.png";
import DropdownModifier from "./ModifierDropdown";

function formBC(url, numb) {
  let bc = "";

  for (let i = 0; i <= numb; i++) {
    bc += url[i] + "/";
  }
  return bc;
}

function SiteNavbar(props) {
  let pathParts = props.url.trim().split("/");
  let breadcrumbs = [];

  for (var i = 0; i < pathParts.length; i++) {
    var path = formBC(pathParts, i);
    breadcrumbs[i] = (
      <Breadcrumb.Item key={i}>
        <Link to={path}>{pathParts[i]}</Link>
      </Breadcrumb.Item>
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.toggleDark();
  };

  let darkModeText = props.dark ? "Dark Mode" : "Light Mode";
  let darkModestr = props.dark ? "dark" : "light";

  return (
    <div className='sticky-top'>
      <Navbar bg={darkModestr} variant={darkModestr} expand='xl'>
        <Container fluid className="NavBarBounds">

              <Link
                to={{
                  pathname: "/",
                }}
                className='NavbarBrand'>
                <Navbar.Brand className='darkModeText'>
                  <img alt='Logo' src={logo} width='40' height='40' className='d-inline-block align-top navbarBrand_text' /> {props.brand}
                </Navbar.Brand>
              </Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
            <Row>
              {props.showMods ? (
                <Col>
                  <DropdownModifier selected={props.ddval} handleSelect={props.handleSelect}></DropdownModifier>
                </Col>
              ) : (
                <div></div>
              )}
              <Col>
                <Nav className='me-auto navdropdown_toggle'>
                  <NavDropdown title='Teapots and Midjourney' menuVariant='dark'>
                    <NavDropdown.Item href='/resource/ai/'>[NEW] AI Home</NavDropdown.Item>
                    <NavDropdown.Item href='/resource/ai/generator'>Generator</NavDropdown.Item>
                    <NavDropdown.Item href='/resource/ai/modifiers'>[NEW] Modifiers</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Col>
              <Col>
                <Button className='darkModeButton ' onClick={handleClick}>
                  {darkModeText}
                </Button>
              </Col>
              <Col>
                <div className="navdropdown_toggle">
                  <Breadcrumb>{breadcrumbs}</Breadcrumb>
                </div>
              </Col>
              </Row>
            </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  );
}

export default SiteNavbar;
