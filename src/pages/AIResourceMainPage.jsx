import SiteNavbar from "../components/SiteNavbar";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import { useState } from "react";
import teapotold from "../teapots_mj/alexgrey.png";
import teapotheart from "../teapots_mj/red.png";
import TeapotFooter from "../components/teapotfooter";


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function AIResourceMainPage(props) {
  document.title = props.title;
  props.analytics.page({
    url: `https://rexwang8.github.io/ai/resource`,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const teapots = importAll(require.context("../assets/images/tplogos", true, /\.(png|jpe?g|svg)$/));
  //get a random number between 0 and the number of images
  const randomTeapot = Math.floor(Math.random() * Object.keys(teapots).length);
  //get the image at that index
  const teapot = teapots[Object.keys(teapots)[randomTeapot]];

  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url='/resource/ai' brand="Rex's AI Resources" showMods={false} dark={props.darkMode} toggleDark={props.toggleDarkMode}></SiteNavbar>
          
          <Container fluid>
            

            <Row className='AIPageBG1 AIPageCenter AIPageBorder AIPageResponsive'>
              <Col className="AIPageWidth1">
                <div className='AIPageCenter'>
                  <img className=" AIPageImgSize"
                    src={teapot}
                    alt='Teapot logo'></img>
                </div>
              </Col>
              <Col><p>[NEW] Modifiers - A fully rebuilt (WIP) Sheet for styles from the teapots page.</p></Col> 
              <Col className='AIPageCenter'>
                <div><p className="AIPageBigText">Modifiers</p><Button variant='primary' size='lg' href="/resource/ai/modifiers">
                  Go to page
                </Button></div>
                
              </Col>
            </Row>


            <Row className='AIPageBG1 AIPageCenter AIPageBorder AIPageResponsive'>
              <Col>
                <div className='AIPageCenter'>
                  <img className=" AIPageImgSize"
                    src={teapotold}
                    alt='Teapot'></img>
                </div>
              </Col>
              <Col><p>[OLD] Teapots - Explore the styles of midjourney through teapots.</p></Col> 
              <Col className='AIPageCenter'>
                <div><p className="AIPageBigText">Teapots</p><Button variant='primary' size='lg' href="/resource/ai/teapot">
                  Go to page
                </Button></div>
                
              </Col>
            </Row>

            <Row className='AIPageBG1 AIPageCenter AIPageBorder AIPageResponsive'>
              <Col>
                <div className='AIPageCenter'>
                  <img className=" AIPageImgSize"
                    src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_185c22daf98%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_185c22daf98%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.891666412353516%22%20y%3D%2295.28000011444092%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                    alt='Teapot'></img>
                </div>
              </Col>
              <Col><p>[OLD] Randomizer - Create random ready-made prompts for AI models.</p></Col> 
              <Col className='AIPageCenter'>
                <div><p className="AIPageBigText">Generator</p><Button variant='primary' size='lg' href="/resource/ai/generator">
                  Go to page
                </Button></div>
                
              </Col>
            </Row>

            <Row className='AIPageBG1 AIPageCenter AIPageBorder AIPageResponsive'>
              <Col>
                <div className='AIPageCenter'>
                  <img className=" AIPageImgSize"
                    src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_185c22daf98%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_185c22daf98%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.891666412353516%22%20y%3D%2295.28000011444092%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                    alt='Teapot'></img>
                </div>
              </Col>
              <Col><p>[OLD] Prompts - Explore how MJ prompts work and the mechanics behind them.</p></Col>
              <Col className='AIPageCenter'>
                <div><p className="AIPageBigText">Prompts</p><Button variant='primary' size='lg' href="/resource/ai/prompts">
                  Go to page
                </Button></div>
                
              </Col>
            </Row>

            <Row className='AIPageBG1 AIPageCenter AIPageBorder AIPageResponsive'>
              <Col>
                <div className='AIPageCenter'>
                  <img className=" AIPageImgSize"
                    src={teapotheart}
                    alt='Teapot'></img>
                </div>
              </Col>
              <Col><p>[NEW] Credits - Credits to people and resources that helped me build the page.</p></Col>
              <Col className='AIPageCenter'>
                <div><p className="AIPageBigText">Credits</p><Button variant='primary' size='lg' onClick={handleShow}>
                  Open Window
                </Button></div>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Direct Contributors: Pelletier-esque Weltanschauung#9081</p><br></br>
          <a href="https://s.mj.run/PD_i8SNJkdg">Original Utah Teapot link</a><br></br>
        <a href="https://github.com/willwulfken/MidJourney-Styles-and-Keywords">Will's Spheres link</a><br></br>
        <a href="https://docs.google.com/document/d/e/2PACX-1vSIWlr5F6J4yv4jxazaXcZaI-F3MxCsnSq4jwoaO3vaEYC911v2N7JpDgjuhAUVYhq4VmA1SCjF3rdK/pub">Tallah#0627 's Teapot comparison</a><br></br>
        <a href="https://bit.ly/3nAal6T">Sincarnate#1121 's Artist comparison</a><br></br>
        <a href="https://gist.github.com/JustOurStyle/999d20609c78587453d5e2f72e8becd2">JustOurStyle#5471 's FFMPEG image splitter script</a><br></br>
        <a href="https://chat.openai.com/chat">ChatGPT Comments</a><br></br>
        <p>The Midjourney, Stable Diffusion, and Art Mechanicum discord servers!</p><br></br>
        <a href='https://ko-fi.com/J3J1E24MB' target='_blank' rel="noreferrer"><br></br>
        <img height='36' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /><br></br>
      </a>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                
              </Col>
            </Row>
<Row><Col><TeapotFooter></TeapotFooter></Col></Row>

          </Container>
        </div>
      </div>
    </div>
  );
}

export default AIResourceMainPage;
