import { useEffect } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Card,
  Button,
  Placeholder,
  Breadcrumb,
  Tab,
  Tabs,
  Figure,
  Row,
  Col,
} from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";


import HomeTab from "./subpage/homeTab";
import AboutTab from "./subpage/aboutTab";
import SiteNavbar from "../components/SiteNavbar";

function MainPage(props) {
  console.log(props);
  document.title = props.title;

  return (
    <div className="bg2">
      <div className="aspect">
        <div className="bg1">
          <SiteNavbar url="/"></SiteNavbar>

          <div>
            <Tabs
              defaultActiveKey="Front"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Front" title="Front Page">
                <HomeTab />
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <AboutTab />
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <p>aaa</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<div className="d-flex justify-content-around">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                        <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                        <Placeholder xs={8} />
                      </Placeholder>
                      <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                  </Card>
                </div>
*/
export default MainPage;
