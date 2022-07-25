import { Navbar, Container, Nav, NavDropdown, Breadcrumb } from "react-bootstrap";
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
      <Navbar bg='light' expand='lg'>
        <Container>
          <Link
            to={{
              pathname: "/",
            }}>
            <Navbar.Brand>Home Page</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <NavDropdown title='Teapots and Midjourney' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/resource/ai/teapot'>Teapots</NavDropdown.Item>
                <NavDropdown.Item href='/resource/ai/prompts'>Prompts</NavDropdown.Item>
                <NavDropdown.Item href='/resource/ai/generator'>Generator</NavDropdown.Item>
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
