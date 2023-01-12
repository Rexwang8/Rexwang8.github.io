import { Col, Card, Modal, Button, Container, Row } from "react-bootstrap";
import ModifierCard from "./ModifierCard";

function ModifierShelf(props) {
  if(props.isMobile == false)
  {
    return (
      <Row className='modifier_shelf' auto>
        <Col md="auto">
          {props.id0 != 'undefined.png' ?<ModifierCard name={props.name0} desc={props.desc0} mjprompt={props.mjprompt0} id={props.id0} mj={props.mj0} sd={props.sd0} show={props.show0} handleShow={props.handleShow} handleClose={props.handleClose} group={props.group} /> :<div></div>}
        </Col>
  
        <Col md="auto">
        {props.id1 != 'undefined.png' ? <ModifierCard name={props.name1} desc={props.desc1} mjprompt={props.mjprompt1} id={props.id1} mj={props.mj1} sd={props.sd1} show={props.show1} handleShow={props.handleShow} handleClose={props.handleClose} group={props.group}/>:<div></div>}
        </Col>
  
        <Col md="auto">
        {props.id2 != 'undefined.png' ?<ModifierCard name={props.name2} desc={props.desc2} mjprompt={props.mjprompt2} id={props.id2} mj={props.mj2} sd={props.sd2} show={props.show2} handleShow={props.handleShow} handleClose={props.handleClose} group={props.group}/>:<div></div>}
        </Col>
  
        <Col md="auto">
        {props.id3 != 'undefined.png' ? <ModifierCard name={props.name3} desc={props.desc3} mjprompt={props.mjprompt3} id={props.id3} mj={props.mj3} sd={props.sd3} show={props.show3} handleShow={props.handleShow} handleClose={props.handleClose} group={props.group}/>:<div></div>}
        </Col>
  
        <Col md="auto">
        {props.id4 != 'undefined.png' ? <ModifierCard name={props.name4} desc={props.desc4} mjprompt={props.mjprompt4} id={props.id4} mj={props.mj4} sd={props.sd4} show={props.show4} handleShow={props.handleShow} handleClose={props.handleClose} group={props.group}/>:<div></div>}
        </Col>
      </Row>
    );
  }else
  {
    return (
      <Row className='modifier_shelf'>
        <Col>
        {props.id0 != 'undefined.png' ? <ModifierCard name={props.name0} desc={props.desc0} mjprompt={props.mjprompt0}id={props.id0} mj={props.mj0} sd={props.sd0} show={props.show0} handleShow={props.handleShow} handleClose={props.handleClose} group={props.group}/>:<div></div>}
        </Col>
  
        <Col>
        {props.id1 != 'undefined.png' ?<ModifierCard name={props.name1} desc={props.desc1} mjprompt={props.mjprompt1} id={props.id1} mj={props.mj1} sd={props.sd1} show={props.show1} handleShow={props.handleShow} handleClose={props.handleClose} group={props.group}/>:<div></div>}
        </Col>
      </Row>
    );
  }
  
}

export default ModifierShelf;
