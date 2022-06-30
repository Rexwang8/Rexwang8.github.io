import {
  Navbar,
  Container,
  Button,
  Accordion,
  Nav,
  NavDropdown,
  Breadcrumb,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function formBC(url, numb) {
  let bc = "";

  for (let i = 0; i <= numb; i++) {
    bc += url[i] + "/";
  }
  return bc;
}

function SiteNavbar(props) {
  let pathParts = props.url.trim().split("/");
  console.log(pathParts);

  let breadcrumbs = [];

  for (var i = 0; i < pathParts.length; i++) {
    var path = formBC(pathParts, i);
    breadcrumbs[i] = (
      <Breadcrumb.Item key={i}>
        <Link to={path}>{pathParts[i]}</Link>
      </Breadcrumb.Item>
    );
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link
            to={{
              pathname: "/",
            }}
          >
            <Navbar.Brand>Home Page</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to={{
                  pathname: "/",
                }}
              >
                <Nav.Link>Home</Nav.Link>
              </Link>

              <Nav.Link href="#link">Link</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div>
            <Breadcrumb>{breadcrumbs}</Breadcrumb>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default SiteNavbar;
