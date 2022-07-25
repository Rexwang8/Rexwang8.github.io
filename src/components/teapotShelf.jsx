import { Row } from "react-bootstrap";
import TeapotCard from "./teapotCard";
function TeapotShelf(props) {
  return (
    <Row>
        {props.key1 && props.col >= 1 ? <TeapotCard img={props.key1} prompt={props.value1} /> : null}
        {props.key2 && props.col >= 2 ? <TeapotCard img={props.key2} prompt={props.value2} /> : null}
        {props.key3 && props.col >= 3 ? <TeapotCard img={props.key3} prompt={props.value3} /> : null}
        {props.key4 && props.col >= 4 ? <TeapotCard img={props.key4} prompt={props.value4} /> : null}
        {props.key5 && props.col >= 5 ? <TeapotCard img={props.key5} prompt={props.value5} /> : null}
    </Row>
  );
}

export default TeapotShelf;
