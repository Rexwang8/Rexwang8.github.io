import { Figure, Button, Row, Col, Container, Accordion } from "react-bootstrap";

import casual from "../../assets/images/casual.png";

import resume from "../../assets/Wang Resume Software 2022 V4.3.3.pdf";

function AboutTab() {
  return (
    <div>
      <Container fluid='md'>
        <Row>
          <Col>
            <h2 className="about_h2">About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='profileW'>
              <Figure>
                <Figure.Image width={640} height={270} alt='pfp img' src={casual} className='mainPFP' />
                <Figure.Caption size='lg'>
                  <p>Caribbean Cruise 2022</p>
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col xs={7}>
            <div className='aboutMeW'>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>Background</Accordion.Header>
                  <Accordion.Body>
                    <p className="about_p">Rex Wang was born in St. Joseph, Michigan. His father is Jizhong Wang, An acclaimed PhD in mathematical modeling of physiology and the director of technology at Broad Ocean Motors.
                    His mother is Fengxia Wang, an acclaimed and famous architect from China. Rex moved to Bolingbrook, Illinois shortly after 6th grade and attended Neuqua Valley High school (D204).
                    Growing up, he has always loved technology and computers, and with his father's employment, has had the resources to explore this passion. Now, Rex is a sophomore at Purdue
                    University, majoring in Computer Engineering.</p>
                    
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='1'>
                  <Accordion.Header>Interests</Accordion.Header>
                  <Accordion.Body>
                    <p className="about_p">I like to spend my time on a number of hobbies. I love playing video games, reading books and watching anime. I also sometimes use Unity to make games or other programs. I am
                    currently learning Japanese as well, though I'm not very good yet.</p>
                    
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>More Text Placeholder</Col>
        </Row>
        
      </Container>
      <div className='mainPDFW'>
        <embed src={resume} type='application/pdf' width='100%' height='1000px'></embed>
      </div>
    </div>
  );
}

export default AboutTab;
