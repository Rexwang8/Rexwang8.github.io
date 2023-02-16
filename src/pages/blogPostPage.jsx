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



function BlogPostPage(props) {
  document.title = props.title;
  let path = `/blog/${props.path1}${props.path2}`;
  props.analytics.page({
    url: `https://rexwang8.github.io/${path}`,
  });

  const images = importAll(require.context("../projectassets", true, /\.(png|jpe?g|svg)$/));

  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url={path} brand={props.title} showMods={false} dark={props.darkMode} toggleDark={props.toggleDarkMode}></SiteNavbar>

          <Container>
            <Row>
              <div>
                <h2 className='blogPostsTitle'>{props.title}</h2>
                <hr></hr>
              </div>
            </Row>
            <Row>
              <div>
                <p className='blogPostsParagraph'>{props.date}</p>
                <p className='blogPostsParagraph'>{props.content}</p>
              </div>
            </Row>
            <Row>
              <div>
                {props.obj.simg1 != "" ? <img src={images[`${props.obj.simg1}.png`]} className='blogPostsImage'></img> : <div></div>}
                {props.obj.simg2 != "" ? <img src={images[`${props.obj.simg2}.png`]} className='blogPostsImage'></img> : <div></div>}
              </div>
            </Row>
            <Row></Row>
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
