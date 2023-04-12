import SiteNavbar from "../components/SiteNavbar";
import { Container, Row, Col } from "react-bootstrap";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function BlogProjectPage(props) {
  document.title = props.project.title;
  let path = `/blog/${props.path}`;
  props.analytics.page({
    url: `https://rexwang8.github.io/${path}`,
  });
  const images = importAll(require.context("../projectassets", true, /\.(png|jpe?g|svg)$/));


  //Posts
  const posts = [];
  let unsortedPosts = props.project.blogposts;
  let uskeys = Object.keys(unsortedPosts);
  let sortedPosts = {};
  //sort blogposts by id, with highest being iterated on last
  for (let index = uskeys.length; index > 0; index--) {
    let k = uskeys[index-1];
    let p = unsortedPosts[k];
    
    sortedPosts[index] = p;
  }

  //map posts to jsx
  for (let index = uskeys.length; index > 0; index--) {
    let p = sortedPosts[index];
    let postpath = `${props.project.pathToProj}${p.path}`;
    posts.push(<div><a href={postpath}>{`${p.title} - ${p.date}`}</a><br></br></div>);
  }

  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url={props.project.path} brand={props.project.title} showMods={false} dark={props.darkMode} toggleDark={props.toggleDarkMode}></SiteNavbar>
          <Container className="ProjectPageText ">
            <Row>
              <Col>
              <div>
                <p className="ProjectPageTextLarge">{props.project.title}</p>
              </div>
              </Col>
            </Row>
            <Row className="BlogProjectMetadataWrapper"><Col>
            <div><p className="ProjectPageTextLargeish">Project Specifications</p>
            <p>Start Date: {props.project.date}</p>
            <p>Tech used: {props.project.tech}</p>
            {props.project.gh_hf == 'gh' ? <p>Project hosted on: Github</p> : <p></p>}
            {props.project.gh_hf == 'hf' ? <p>Project hosted on: HuggingfaceHub</p> : <p></p>}
            
            </div>
            </Col></Row>
            <Row>
              <Col>
              <div>
                
                <p>{props.content}</p>
              </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <div>
                {props.project.gh_hf == 'gh' ? <a href={props.project.github}>Check out my project on Github!</a> : <p></p>}
                {props.project.gh_hf == 'hf' ? <a href={props.project.huggingface}>Check out my project on HuggingfaceHub!</a> : <p></p>}
              </div>
              </Col>
            </Row>
            <Row>
              <Col><img class='projectpageimg ProjectPageImages' src={images[`${props.img}.png`]} alt='Project'></img></Col>
              
            </Row>
            <Row>
              <hr></hr>
            </Row>
            <Row><Col>{props.project.blogs == true ? <p>Devlog posts</p> : <div></div>} </Col></Row>
            <Row><Col>{props.project.blogs == true ? posts : <div></div>}</Col></Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default BlogProjectPage;
