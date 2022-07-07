import { Col } from "react-bootstrap";
function TeapotCard(props) {
  return (
    <Col>
      <div>
        <img src={props.img} alt='teapot' className='teapot'></img>
        <p>"{props.prompt}"</p>
      </div>
    </Col>
  );
}

export default TeapotCard;
