import { Col } from "react-bootstrap";
function TeapotCardLarge(props) {
  return (
    <Col>
      <div>
        <img src={props.img} alt='teapot' className='teapotlarge'></img>
        <p>"{props.prompt}"</p>
      </div>
    </Col>
  );
}

export default TeapotCardLarge;
