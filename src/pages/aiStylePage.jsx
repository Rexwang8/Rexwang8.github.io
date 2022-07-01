import { Navbar, Container, Button, Accordion, Nav, NavDropdown, Breadcrumb, Row, Col } from "react-bootstrap";
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
  const images = importAll(require.context("../teapots", true, /\.(png|jpe?g|svg)$/));
  console.log(images);

  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url='/resource/ai/teapot'></SiteNavbar>
          <div className='textAICenter'>
            <h1>Understanding MidJourney through teapots.</h1>
            <p>
              This site is my personal react-js portfolio, and is in the middle of a rebuild. I'm a busy college student, don't expect too much. I do plan on adding hundreds of modifiers and artists,
              grouped into categories eventually.
            </p>
            <p>
              Midjourney is an AI model for converting Text prompts to images. I am using the Utah Teapot as a base model for a study on modifiers. For consistancy, I will feed this base model in as
              an image prompt. Aspect Ratio: 16:9 (--ar 16:9) images generated are 448x256, downscaled to 110px height.
              <a href='https://s.mj.run/PD_i8SNJkdg' alt='teapot'>
                Teapot Image Link
              </a>
            </p>
            <a href='https://docs.google.com/spreadsheets/d/1j7zaDi_PkndizQ2pL8B_yMcwfKUdE6tSMhL31bYtJNs/edit#gid=0' alt='sheet link'>
              Useful Excel Sheet
            </a>
            <a href='https://arc.tencent.com/en/ai-demos/faceRestoration' alt='face tool link'>
              Useful Face Fixer
            </a>
            <a href='https://sweet-hall-e72.notion.site/A-Traveler-s-Guide-to-the-Latent-Space-85efba7e5e6a40e5bd3cae980f30235f' alt="Traveler's guide latent spaces link">
              Traveler's guide latent spaces
            </a>
            <h5>Contact me on discord at bob#1236 for suggestions, comments or pictures of teapots.</h5>
          </div>
          <img src='https://s.mj.run/PD_i8SNJkdg' alt='teapot' className='teapotExample'></img>

          <Accordion defaultActiveKey='0' className='accordCenter'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Medium</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    <h3 className='styleDivide'>Physical Mediums</h3>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["base.png"]} prompt='Utah Teapot' />
                    </Col>

                    <Col>
                      <TeapotCard img={images["illustration.png"]} prompt='Utah Teapot, Illustration' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["sketch.png"]} prompt='Utah Teapot, Sketch' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["oilPainting.png"]} prompt='Utah Teapot, Oil Painting' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["glassPaint.png"]} prompt='Utah Teapot, Glass Paint' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["charcoal.png"]} prompt='Utah Teapot, Charcoal' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["watercolor.png"]} prompt='Utah Teapot, Watercolor' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["chalk.png"]} prompt='Utah Teapot, Chalk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["tempera.png"]} prompt='Utah Teapot, Tempera' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["pastel.png"]} prompt='Utah Teapot, Pastel' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["inkPen.png"]} prompt='Utah Teapot, Ink and Pen' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["graphitePencil.png"]} prompt='Utah Teapot, Graphite Pencil' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["colorPencil.png"]} prompt='Utah Teapot, Color Pencil' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["goache.png"]} prompt='Utah Teapot, Goache' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["acrylic.png"]} prompt='Utah Teapot, Acrylic' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["conte.png"]} prompt='Utah Teapot, Conte' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["marker.png"]} prompt='Utah Teapot, Marker' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["glaze.png"]} prompt='Utah Teapot, Glaze' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["crayon.png"]} prompt='Utah Teapot, Crayon' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["latex.png"]} prompt='Utah Teapot, Latex' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["glitter.png"]} prompt='Utah Teapot, Glitter' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["sprayPaint.png"]} prompt='Utah Teapot, Spray Paint' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["glassPaint.png"]} prompt='Utah Teapot, Glass Paint' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["latte2.png"]} prompt='Utah Teapot, Latte Art' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["illumanu.png"]} prompt='Utah Teapot, Illuminated Manuscript' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["blueprint.png"]} prompt='Utah Teapot, Blueprint' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["blueprint2.png"]} prompt='A blueprint of the Utah Teapot' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["concept.png"]} prompt='Utah Teapot, Concept Art' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["storyboard.png"]} prompt='Utah Teapot, Storyboard' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["quilt.png"]} prompt='Utah Teapot, Quilt' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["collage.png"]} prompt='Utah Teapot, Collage' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["line.png"]} prompt='Utah Teapot, Line Art' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["prop.png"]} prompt='Utah Teapot, Propaganda Poster' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["sears.png"]} prompt='Utah Teapot, Sears Catalog' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["prod.png"]} prompt='Utah Teapot, Product Photo' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["elecPhoto.png"]} prompt='Utah Teapot, Election Photo' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["elecPoster.png"]} prompt='Utah Teapot, Election Poster' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["screen.png"]} prompt='Utah Teapot, Screen Painting' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["mono.png"]} prompt='Utah Teapot, Mono Printing' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["block.png"]} prompt='Utah Teapot, Block Printing' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["etching.png"]} prompt='Utah Teapot, Etching' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["litho.png"]} prompt='Utah Teapot, Lithography' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["installation.png"]} prompt='Utah Teapot, Installation Art' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["airbrush.png"]} prompt='Utah Teapot, Airbrush' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["foundobj.png"]} prompt='Utah Teapot, Found Objects' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["calligraphy.png"]} prompt='Utah Teapot, Calligraphy' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["inkpainting.png"]} prompt='Utah Teapot, Ink Painting' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["scroll.png"]} prompt='Utah Teapot, Scroll Painting' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["anatomical.png"]} prompt='Utah Teapot, Anatomical Drawing' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["lace.png"]} prompt='Utah Teapot, Lace' />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <TeapotCard img={images["embroidery.png"]} prompt='Utah Teapot, Embroidery' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["macrame.png"]} prompt='Utah Teapot, Macrame' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["knitted.png"]} prompt='Utah Teapot, Knitted' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["rug.png"]} prompt='Utah Teapot, Rug' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["tattoo.png"]} prompt='Utah Teapot, Tattoo' />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <TeapotCard img={images["weave.png"]} prompt='Utah Teapot, Weave' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["felted.png"]} prompt='Utah Teapot, Felted' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["crochet.png"]} prompt='Utah Teapot, Crochet' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["applique.png"]} prompt='Utah Teapot, Applique' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["crossstitch.png"]} prompt='Utah Teapot, Cross Stich' />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <TeapotCard img={images["crewl.png"]} prompt='Utah Teapot, Crewl Embroidery' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["needlepoint.png"]} prompt='Utah Teapot, Needlepoint' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["patch.png"]} prompt='Utah Teapot, Patch' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["enameled.png"]} prompt='Utah Teapot, Enameled' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["jewelry.png"]} prompt='Utah Teapot, Jewelry' />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <TeapotCard img={images["azulejo.png"]} prompt='Utah Teapot, Azulejo' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["stamp.png"]} prompt='Utah Teapot, Stamp' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["stopmotion.png"]} prompt='Utah Teapot, Stop Motion' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["goldleaf.png"]} prompt='Utah Teapot, Gold Leaf' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["postage.png"]} prompt='Utah Teapot, Postage' />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <TeapotCard img={images["lacquer.png"]} prompt='Utah Teapot, Carved Lacquer' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["scientificdiagram.png"]} prompt='Utah Teapot, Scientific Diagram' />
                    </Col>
                  </Row>

                  <Row>
                    <h3 className='styleDivide'>Digital</h3>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["digitalArt.png"]} prompt='Utah Teapot, Digital Art' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["pixel.png"]} prompt='Utah Teapot, PixelArt' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["pixel2.png"]} prompt='A pixel art of the Utah Teapot' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["anime.png"]} prompt='Utah Teapot, Anime' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["texture.png"]} prompt='Utah Teapot, Texture' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["fractal.png"]} prompt='Utah Teapot, Fractal' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["algo.png"]} prompt='Utah Teapot, Algorithmic' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["datamosh.png"]} prompt='Utah Teapot, Data Moshing' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["dynamic.png"]} prompt='Utah Teapot, Dynamic Painting' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["3dmodel.png"]} prompt='Utah Teapot, 3D Model' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["logo.png"]} prompt='Utah Teapot, Logo' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["icon.png"]} prompt='Utah Teapot, Icon' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["digitalphotography.png"]} prompt='Utah Teapot, Digital Photography' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["vector.png"]} prompt='Utah Teapot, Vector Art' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["tilemap.png"]} prompt='Utah Teapot, Tilemap' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["mspaint.png"]} prompt='Utah Teapot, Microsoft Paint' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["raster.png"]} prompt='Utah Teapot, Raster Art' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["geometric.png"]} prompt='Utah Teapot, Geometric' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["photoshop.png"]} prompt='Utah Teapot, Photoshop' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["isometric.png"]} prompt='Utah Teapot, Isometric' />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <TeapotCard img={images["depthmap.png"]} prompt='Utah Teapot, Depth Map' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["animation.png"]} prompt='Utah Teapot, Animation' />
                    </Col>
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Physical Media</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    <h3 className='styleDivide'>Physical Media</h3>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["wood.png"]} prompt='Utah Teapot made out of Wood' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["glass.png"]} prompt='Utah Teapot made out of Glass' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["stainedGlass.png"]} prompt='Utah Teapot made out of Stained Glass' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["concrete.png"]} prompt='Utah Teapot made out of Concrete' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["metal.png"]} prompt='Utah Teapot made out of Metal' />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <TeapotCard img={images["boneChina.png"]} prompt='Utah Teapot made out of Bone China' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["porcelain.png"]} prompt='Utah Teapot made out of Porcelain' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["flowers.png"]} prompt='Utah Teapot made out of Flowers' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["pottery.png"]} prompt='Utah Teapot made out of Pottery' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["paper.png"]} prompt='Utah Teapot made out of Paper' />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <TeapotCard img={images["stone.png"]} prompt='Utah Teapot made out of Stone' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["marble.png"]} prompt='Utah Teapot made out of Marble' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["fruit.png"]} prompt='Utah Teapot made out of Fruit' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["bronze.png"]} prompt='Utah Teapot made out of Bronze' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["plastic.png"]} prompt='Utah Teapot made out of Plastic' />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <TeapotCard img={images["water.png"]} prompt='Utah Teapot made out of Water' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["yarn.png"]} prompt='Utah Teapot made out of Yarn' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["ice.png"]} prompt='Utah Teapot made out of Ice' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["wax.png"]} prompt='Utah Teapot made out of Wax' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["ivory.png"]} prompt='Utah Teapot made out of Ivory' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["soysauce.png"]} prompt='Utah Teapot made out of Soy Sauce' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["vegetation.png"]} prompt='Utah Teapot made out of Vegetation' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["tile.png"]} prompt='Utah Teapot made out of Tile' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["pewter.png"]} prompt='Utah Teapot made out of Pewter' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["origami.png"]} prompt='Utah Teapot made out of Origami' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["styrofoam.png"]} prompt='Utah Teapot made out of Styrofoam' />
                    </Col>
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>Artistic Styles</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    <h3 className='styleDivide'>-Punk</h3>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["steampunk.png"]} prompt='Utah Teapot in the style of steampunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["cyberpunk.png"]} prompt='Utah Teapot in the style of cyberpunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["solarpunk.png"]} prompt='Utah Teapot in the style of solarpunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["steelpunk.png"]} prompt='Utah Teapot in the style of cyberpunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["bronzepunk.png"]} prompt='Utah Teapot in the style of bronzepunk' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["dieselpunk.png"]} prompt='Utah Teapot in the style of dieselpunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["piedieselpunk.png"]} prompt='Utah Teapot in the style of Piecraftian dieselpunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["ottodieselpunk.png"]} prompt='Utah Teapot in the style of Ottensian dieselpunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["decopunk.png"]} prompt='Utah Teapot in the style of decopunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["atompunk.png"]} prompt='Utah Teapot in the style of atompunk' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["biopunk.png"]} prompt='Utah Teapot in the style of biopunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["cuberpunk.png"]} prompt='Utah Teapot in the style of cuberpunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["postcyberpunk.png"]} prompt='Utah Teapot in the style of postcyberpunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["cybernoir.png"]} prompt='Utah Teapot in the style of cybernoir' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["clockpunk.png"]} prompt='Utah Teapot in the style of clockpunk' />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <TeapotCard img={images["decopunk.png"]} prompt='Utah Teapot in the style of decopunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["atompunk.png"]} prompt='Utah Teapot in the style of atompunk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["formicapunk.png"]} prompt='Utah Teapot in the style of formicapunk' />
                    </Col>
                  </Row>

                  <Row>
                    <h3 className='styleDivide'>-Wave</h3>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["synthwave.png"]} prompt='Utah Teapot in the style of synthwave' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["vaporwave.png"]} prompt='Utah Teapot in the style of vaporwave' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["retrowave.png"]} prompt='Utah Teapot in the style of retrowave' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["futurefunk.png"]} prompt='Utah Teapot in the style of Future Funk' />
                    </Col>
                    <Col>
                      <TeapotCard img={images["outrun.png"]} prompt='Utah Teapot in the style of Outrun' />
                    </Col>
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3'>
              <Accordion.Header>Photo Effects</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <Row>
                    <h3 className='styleDivide'>Resolution</h3>
                  </Row>
                  <Row>
                    <Col>
                      <TeapotCard img={images["8k.png"]} prompt='Utah Teapot, digital art, 8k' />
                    </Col>
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className='footer'>
            <p>Portfolio Website for Rex Wang, Coded in React framework in 2022.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIStylePage;
