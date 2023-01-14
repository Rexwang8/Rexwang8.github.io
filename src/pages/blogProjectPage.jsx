import { blogposts } from "../data/allblogposts";
import SiteNavbar from "../components/SiteNavbar";
import { Container, Row } from "react-bootstrap";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function BlogProjectPage(props) {
  console.log(props);
  document.title = props.title;
  let path = `/blog/${props.path}`;
  props.analytics.page({
    url: `https://rexwang8.github.io/blog/${path}`,
  });
  const images = importAll(require.context("../projectassets", true, /\.(png|jpe?g|svg)$/));


  //Posts
  const posts = [];
  for (let index = 0; index < Object.keys(props.posts).length; index++) {
    let p = props.posts[Object.keys(props.posts)[index]];
    let postpath = `${path}${p.path}`;
    posts.push(<a href={postpath}>{`${p.title}`}</a>);
  }

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
                <a href={props.github}>Check out my project on Github.</a>
              </div>
            </Row>
            <Row>
              <img class='projectpageimg' src={images[`${props.img}.png`]} alt='Project'></img>
            </Row>
            <Row>
              <hr></hr>
            </Row>
            <Row>{posts}</Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default BlogProjectPage;
