import { blogposts } from "../data/allblogposts";
import SiteNavbar from "../components/SiteNavbar";
import { Container, Row } from "react-bootstrap";


function BlogPostPage(props) {
  document.title = props.title;
  let path = `/blog/${props.path1}${props.path2}`;
  props.analytics.page({
    url: `https://rexwang8.github.io/${path}`,
  });


  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url={path}></SiteNavbar>
          <Container>

            <Row>

              <div>
                <h2>{props.title}</h2>
                <hr></hr>
              </div>
              
              
            </Row>
            <Row>
            <div>
            <p>{props.date}</p>
              <p>{props.content}</p>
              </div>
            </Row>
            <Row>
            <div>
             
             
              </div>
            </Row>
            <Row>
            
            </Row>
            <Row>
              <hr></hr>
            </Row>

          </Container>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPage;
