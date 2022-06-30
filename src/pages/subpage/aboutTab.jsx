
import { Figure, Button,Row, Col, Container, Accordion } from "react-bootstrap";
import linkedLogo from "../../assets/images/linked (1).png";
import gitLogo from "../../assets/images/github.png";
import casual from "../../assets/images/casual.png";



function AboutTab() {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <h2
              style={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              About Me
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="profileW">
              <Figure>
                <Figure.Image
                  width={640}
                  height={270}
                  alt="pfp img"
                  src={casual}
                  className="mainPFP"
                />
                <Figure.Caption size="lg">
                  <p>Caribbean Cruise 2022</p>
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col xs={6}>
            <div className="aboutMeW">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Background</Accordion.Header>
                  <Accordion.Body>
                    Rex Wang was born in St. Joseph, Michigan. His father is
                    Jizhong Wang, An acclaimed PhD in mathematical modeling of
                    physiology and the director of technology at Broad Ocean
                    Motors. His mother is Fengxia Wang, an acclaimed and famous
                    architect from China. Rex moved to Bolingbrook, Illinois
                    shortly after 6th grade and attended Neuqua Valley High
                    school (D204). Growing up, he has always loved technology
                    and computers, and with his father's employment, has had the
                    resources to explore this passion. Now, Rex is a sophomore
                    at Purdue University, majoring in Computer Engineering.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Interests</Accordion.Header>
                  <Accordion.Body>
                    I like to spend my time on a number of hobbies. I love
                    playing video games, reading books and watching anime. I
                    also sometimes use Unity to make games or other programs. I
                    am currently learning Japanese as well, though I'm not very
                    good yet.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>More Text Placeholder</Col>
        </Row>
        <Row>
          <Col>
            <a href="https://github.com/Rexwang8?tab=repositories">
              <Button className="iconButton">
                {" "}
                <img src={gitLogo} alt="github"></img> Github{" "}
              </Button>
            </a>{" "}
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/rex-wang-6019b4220/">
              <Button className="iconButton">
                {" "}
                <img src={linkedLogo} alt="linkedin"></img> LinkedIn{" "}
              </Button>
            </a>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutTab;
