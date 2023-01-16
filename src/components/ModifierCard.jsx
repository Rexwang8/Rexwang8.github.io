import { Col, Card, Modal, Button, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
  




function ModifierCard(props) {

  let thumbnailimg = props.mj;

  if(props.thumb == "mj3"){
    thumbnailimg = props.mj;
  }

  return (
    /*<Col>
      <div>
        <img src={props.img} alt='teapot' className='teapot' loading="lazy"></img>
        <p>"{props.prompt}"</p>
      </div>
    </Col>*/

    <div>
          <Card className="modifier_card">
      <Card.Img variant="top" src={thumbnailimg} loading="lazy" ></Card.Img>
      <Card.Body>
        <Card.Title className="modifier_cardTitle">
          <p>{props.name}</p></Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <div className="modifier_center"><Button className="modifier_button" variant="primary" id={props.id} onClick={props.handleShow}>More Info</Button></div>
        
      </Card.Body>
    </Card>


            <Container>
              <Modal id={props.id} show={props.show} onHide={props.handleClose} size="lg">
                <Modal.Header>
                  <Modal.Title>{props.group} - {props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="modifier_modal_container">
                  <Container>
                    <Row><Col><p>{props.desc}</p></Col></Row>
                    <Row>
                      <Col className="modifier_modalcard">
                      <img loading="lazy" className="style_modalimg" src={props.mj} alt="Midjourney Image Unavaliable!(Not Generated yet)!" />
                      <p>Midjourney V3 - Teapot</p>
                      <Button className="modifier_modal_copybutton" variant="primary" id={props.id} onClick={(e) => {navigator.clipboard.writeText(e.target.textContent)}}><FontAwesomeIcon icon={faClipboard} />&nbsp;/imagine: {props.mjprompt}</Button>
                      </Col>
                      <Col className="modifier_modalcard">
                      <img loading="lazy" className="style_modalimg" src={props.sd} alt="Stable Diffusion Image Unavaliable (Not Generated yet)!" />
                      <p>Stable Diffusion 1.5 - Teapot</p>
                      <Button className="modifier_modal_copybutton" variant="primary" id={props.id} onClick={(e) => {navigator.clipboard.writeText(e.target.textContent)}}><FontAwesomeIcon icon={faClipboard} />&nbsp;{props.sdprompt}</Button>
                      </Col>
                    </Row>

                  </Container>

                  </div>
                  

                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary'id={props.id} onClick={props.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Container>
          </div>
  );
}

export default ModifierCard;
