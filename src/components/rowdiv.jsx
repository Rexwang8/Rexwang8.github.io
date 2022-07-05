import { Row } from "react-bootstrap";

function RowStyleDiv(props) {
  return (
    <Row>
      <div className='styleDivide'>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </Row>
  );
}

export default RowStyleDiv;
