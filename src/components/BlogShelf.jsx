import { Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function BlogShelf(props) {
  return (
    <Row >
        {props.obj1 != undefined ? <Card className="blogBlogCard" style={{ width: '17rem' }}>
      <Card.Img variant="top" src={props.img1} />
      <Card.Body>
        <Card.Title>{props.obj1.title} - {props.obj1.date}</Card.Title>
        <Card.Text>
          {props.obj1.desc}
        </Card.Text>
            <Button variant="primary" href={`blog/${props.obj1.pathToProj}`}>To Project Page</Button>
      </Card.Body>
    </Card>  : null}

    {props.obj2 != undefined ? <Card className="blogBlogCard" style={{ width: '17rem' }}>
      <Card.Img variant="top" src={props.img2} />
      <Card.Body>
        <Card.Title>{props.obj2.title} - {props.obj2.date}</Card.Title>
        <Card.Text>
          {props.obj2.desc}
        </Card.Text>
            <Button variant="primary" href={`blog/${props.obj2.pathToProj}`}>To Project Page</Button>
      </Card.Body>
    </Card>  : null}

    {props.obj3 != undefined ? <Card className="blogBlogCard" style={{ width: '17rem' }}>
      <Card.Img variant="top" src={props.img3} />
      <Card.Body>
        <Card.Title>{props.obj3.title} - {props.obj3.date}</Card.Title>
        <Card.Text>
          {props.obj3.desc}
        </Card.Text>
            <Button variant="primary" href={`blog/${props.obj3.pathToProj}`}>To Project Page</Button>
      </Card.Body>
    </Card>  : null}

    </Row>
  );
}

export default BlogShelf;
