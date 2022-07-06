import { Col } from "react-bootstrap";
function TeapotCardLarge(props) {
  return (<div><Col><img src={props.img} alt="teapot" className="teapotlarge"></img><p>"{props.prompt}"</p>
  </Col>


  </div>);
}

export default TeapotCardLarge;
