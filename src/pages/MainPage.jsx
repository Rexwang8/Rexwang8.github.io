import { useEffect } from "react";
import { Navbar, Container, NavDropdown, Nav, Card, Button, Placeholder, Breadcrumb, Tab, Tabs, Figure, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

import HomeTab from "./subpage/homeTab";
import AboutTab from "./subpage/aboutTab";
import SiteNavbar from "../components/SiteNavbar";

import linkedLogo from "../assets/images/linked (1).png";
import gitLogo from "../assets/images/github.png";

function MainPage(props) {
  console.log(props);
  document.title = props.title;

  props.analytics.page({
    url: "https://rexwang8.github.io/",
  });

  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url='/' brand="Rex's Portfolio" showMods={false} dark={props.darkMode} toggleDark={props.toggleDarkMode}></SiteNavbar>

          <div>
            <Tabs defaultActiveKey='Front' id='uncontrolled-tab-example' className='mb-3'>
              <Tab eventKey='Front' title='Front Page'>
                <HomeTab />
              </Tab>
              <Tab eventKey='profile' title='Profile'>
                <AboutTab />
              </Tab>
              <Tab eventKey='contact' title='Contact'>
                <Container>
                  <Row>
                    <Col>
                      <h2 className='about_h2'>Contact Me</h2>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <p className='contact_link'>wang5009@purdue.edu</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className='contact_link'>Discord: bob#1236</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <a href='https://github.com/Rexwang8?tab=repositories'>
                        <Button className='iconButton' size='lg'>
                          {" "}
                          <img src={gitLogo} size='lg' alt='github'></img> Github{" "}
                        </Button>
                      </a>{" "}
                    </Col>
                    <Col>
                      <a href='https://www.linkedin.com/in/rex-wang-6019b4220/'>
                        <Button className='iconButton' size='lg'>
                          {" "}
                          <img src={linkedLogo} size='lg' alt='linkedin'></img> LinkedIn{" "}
                        </Button>
                      </a>{" "}
                    </Col>
                  </Row>
                </Container>
              </Tab>
              <Tab eventKey='projects' title='Projects'>
                <Container fluid='md'>
                  <Row className='MainPageCenter'>
                    <Col>
                      <Button href='blog' size='lg'>
                        Go to Blogs
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
