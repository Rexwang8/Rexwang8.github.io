import {
  Navbar,
  Container,
  Button,
  Accordion,
  Nav,
  NavDropdown,
  Breadcrumb,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SiteNavbar from "../components/SiteNavbar";

import baseteapot from "../teapots/base.png";
import TeapotCard from "../components/teapotCard";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function AIStylePage(props) {
  document.title = props.title;
  const images = importAll(
    require.context("../teapots", true, /\.(png|jpe?g|svg)$/)
  );
  console.log(images);

  return (
    <div className="bg2">
      <div className="aspect">
        <div className="bg1">
          <SiteNavbar url="/resource/ai/styles"></SiteNavbar>
          <h1>Temp layout for MidJourney Styles Website</h1>
          <p>
            This site is my personal react-js portfolio, and is in the middle of
            a rebuild. I'm a busy college student, don't expect too much. I do
            plan on adding hundreds of modifiers and artists, grouped into
            categories eventually.
          </p>
          <p>
            Midjourney is an AI model for converting Text prompts to images. I
            am using the Utah Teapot as a base model for a study on modifiers.
            For consistancy, I will feed this base model in as an image prompt.
            Aspect Ratio: 16:9{" "}
            <a href="https://s.mj.run/PD_i8SNJkdg" alt="teapot">
              Teapot Image Link
            </a>
          </p>
          <a
            href="https://docs.google.com/spreadsheets/d/1j7zaDi_PkndizQ2pL8B_yMcwfKUdE6tSMhL31bYtJNs/edit#gid=0"
            alt="sheet link"
          >
            Useful Excel Sheet
          </a>
          <a
            href="https://arc.tencent.com/en/ai-demos/faceRestoration"
            alt="face tool link"
          >
            Useful Face Fixer
          </a>
          <a
            href="https://sweet-hall-e72.notion.site/A-Traveler-s-Guide-to-the-Latent-Space-85efba7e5e6a40e5bd3cae980f30235f"
            alt="Traveler's guide latent spaces link"
          >
            Traveler's guide latent spaces
          </a>



          <Accordion defaultActiveKey="0" className="accordCenter">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Medium</Accordion.Header>
    <Accordion.Body>
    <Container>
            <Row>
              <Col>
                <TeapotCard img={images["base.png"]} prompt="Utah Teapot" />
              </Col>
              <Col>
              <TeapotCard img={images["digitalArt.png"]} prompt="Utah Teapot, Digital Art" />
              </Col>
              <Col><TeapotCard img={images["illustration.png"]} prompt="Utah Teapot, Illustration" /></Col>
              <Col><TeapotCard img={images["sketch.png"]} prompt="Utah Teapot, Sketch" /></Col>
              <Col><TeapotCard img={images["oilPainting.png"]} prompt="Utah Teapot, Oil Painting" /></Col>
            </Row>
            <Row>
            <Col><TeapotCard img={images["charcoal.png"]} prompt="Utah Teapot, Charcoal" /></Col>
            <Col><TeapotCard img={images["watercolor.png"]} prompt="Utah Teapot, Watercolor" /></Col>
            <Col><TeapotCard img={images["chalk.png"]} prompt="Utah Teapot, Chalk" /></Col>
            <Col><TeapotCard img={images["tempera.png"]} prompt="Utah Teapot, Tempera" /></Col>
            <Col><TeapotCard img={images["pastel.png"]} prompt="Utah Teapot, Pastel" /></Col>
            </Row>
            <Row>
            <Col><TeapotCard img={images["inkPen.png"]} prompt="Utah Teapot, Ink and Pen" /></Col>
            <Col><TeapotCard img={images["graphitePencil.png"]} prompt="Utah Teapot, Graphite Pencil" /></Col>
            <Col><TeapotCard img={images["colorPencil.png"]} prompt="Utah Teapot, Color Pencil" /></Col>
            <Col><TeapotCard img={images["goache.png"]} prompt="Utah Teapot, Goache" /></Col>
            <Col><TeapotCard img={images["acrylic.png"]} prompt="Utah Teapot, Acrylic" /></Col>
            </Row>
            <Row>
            <Col><TeapotCard img={images["conte.png"]} prompt="Utah Teapot, Conte" /></Col>
            <Col><TeapotCard img={images["marker.png"]} prompt="Utah Teapot, Marker" /></Col>
            <Col><TeapotCard img={images["glaze.png"]} prompt="Utah Teapot, Glaze" /></Col>
            <Col><TeapotCard img={images["crayon.png"]} prompt="Utah Teapot, Crayon" /></Col>
            <Col><TeapotCard img={images["latex.png"]} prompt="Utah Teapot, Latex" /></Col>
            </Row>
            <Row>
            <Col><TeapotCard img={images["glitter.png"]} prompt="Utah Teapot, Glitter" /></Col>
            <Col><TeapotCard img={images["sprayPaint.png"]} prompt="Utah Teapot, Spray Paint" /></Col>
            <Col><TeapotCard img={images["glassPaint.png"]} prompt="Utah Teapot, Glass Paint" /></Col>
            <Col><TeapotCard img={images["latteArt.png"]} prompt="Utah Teapot, Latte Art" /></Col>
            <Col><TeapotCard img={images["latex.png"]} prompt="Utah Teapot, Latex" /></Col>
            </Row>
          </Container>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Physical Media</Accordion.Header>
    <Accordion.Body>
    <Row>
            <Col><TeapotCard img={images["wood.png"]} prompt="Utah Teapot made out of Wood" /></Col>
            <Col><TeapotCard img={images["glass.png"]} prompt="Utah Teapot made out of Glass" /></Col>
            <Col><TeapotCard img={images["stainedGlass.png"]} prompt="Utah Teapot made out of Stained Glass" /></Col>
            <Col><TeapotCard img={images["concrete.png"]} prompt="Utah Teapot made out of Concrete" /></Col>
            <Col><TeapotCard img={images["metal.png"]} prompt="Utah Teapot made out of Metal" /></Col>
            </Row>

            <Row>
            <Col><TeapotCard img={images["boneChina.png"]} prompt="Utah Teapot made out of Bone China" /></Col>
            <Col><TeapotCard img={images["porcelain.png"]} prompt="Utah Teapot made out of Porcelain" /></Col>
            <Col><TeapotCard img={images["flowers.png"]} prompt="Utah Teapot made out of Flowers" /></Col>
            <Col><TeapotCard img={images["pottery.png"]} prompt="Utah Teapot made out of Pottery" /></Col>
            <Col><TeapotCard img={images["paper.png"]} prompt="Utah Teapot made out of Paper" /></Col>
            </Row>

            <Row>
            <Col><TeapotCard img={images["stone.png"]} prompt="Utah Teapot made out of Stone" /></Col>
            <Col><TeapotCard img={images["marble.png"]} prompt="Utah Teapot made out of Marble" /></Col>
            <Col><TeapotCard img={images["fruit.png"]} prompt="Utah Teapot made out of Fruit" /></Col>
            <Col><TeapotCard img={images["bronze.png"]} prompt="Utah Teapot made out of Bronze" /></Col>
            <Col><TeapotCard img={images["plastic.png"]} prompt="Utah Teapot made out of Plastic" /></Col>
            </Row>

            <Row>
            <Col><TeapotCard img={images["water.png"]} prompt="Utah Teapot made out of Water" /></Col>
            <Col><TeapotCard img={images["marble.png"]} prompt="Utah Teapot made out of Marble" /></Col>
            <Col><TeapotCard img={images["ice.png"]} prompt="Utah Teapot made out of Ice" /></Col>
            <Col><TeapotCard img={images["wax.png"]} prompt="Utah Teapot made out of Wax" /></Col>
            <Col><TeapotCard img={images["ivory.png"]} prompt="Utah Teapot made out of Ivory" /></Col>
            </Row>
            <Row>
            <Col><TeapotCard img={images["soysauce.png"]} prompt="Utah Teapot made out of Soy Sauce" /></Col>
            <Col><TeapotCard img={images["vegetation.png"]} prompt="Utah Teapot made out of Vegetation" /></Col>
            <Col><TeapotCard img={images["ice.png"]} prompt="Utah Teapot made out of Ice" /></Col>
            <Col><TeapotCard img={images["wax.png"]} prompt="Utah Teapot made out of Wax" /></Col>
            <Col><TeapotCard img={images["ivory.png"]} prompt="Utah Teapot made out of Ivory" /></Col>
            </Row>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
          
        </div>
      </div>
    </div>
  );
}

export default AIStylePage;
