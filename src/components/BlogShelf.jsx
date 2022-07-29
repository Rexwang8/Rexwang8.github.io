import { Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function BlogShelf(props) {

  return (
    <Row>
      
        {props.title1 != 'test' ? <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img1} />
      <Card.Body>
        <Card.Title>{props.title1}</Card.Title>
        <Card.Text>
          {props.content1}
        </Card.Text>
            <Button variant="primary" href={props.link1}>To Project Page</Button>
      </Card.Body>
    </Card>  : null}

    {props.title2 != 'test' ? <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img1} />
      <Card.Body>
        <Card.Title>{props.title2}</Card.Title>
        <Card.Text>
          {props.content2}
        </Card.Text>
            <Button variant="primary" href={props.link2}>To Project Page</Button>
      </Card.Body>
    </Card>  : null}

    {props.title3 != 'test' ? <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img3} />
      <Card.Body>
        <Card.Title>{props.title3}</Card.Title>
        <Card.Text>
          {props.content3}
        </Card.Text>
            <Button variant="primary" href={props.link3}>To Project Page</Button>
      </Card.Body>
    </Card>  : null}

    </Row>
  );
}

export default BlogShelf;
