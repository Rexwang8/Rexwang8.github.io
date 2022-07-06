import {  Container,  Accordion, Row, Col } from "react-bootstrap";
import TeapotCard from "../../components/teapotCard";
import RowStyleDiv from "../../components/rowdiv";




function TeaAccordian(props) {
    const images = props.images;

    return(
        <div>
             <Accordion defaultActiveKey='0' className='accordCenter'>
      <Accordion.Item eventKey='0'>
          <Accordion.Header>Base prompts</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Aspect Ratio' desc='Different aspect ratios.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["base11.png"]} prompt='Utah Teapot' />
              <TeapotCard img={images["base169.png"]} prompt='Utah Teapot --ar 16:9' />
              <TeapotCard img={images["base916.png"]} prompt='Utah Teapot --ar 9:16' />
              </Row>
              <RowStyleDiv title='Prompt Arguments' desc='MJ specific arguments.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["basevibe.png"]} prompt='Utah Teapot --vibe' />
              <TeapotCard img={images["basevibefast.png"]} prompt='Utah Teapot --vibefast' />
              <TeapotCard img={images["basehd.png"]} prompt='Utah Teapot --hd' />
              </Row>
              <RowStyleDiv title='Base modifications' desc='Modifications of the base prompt used in the following site.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["baseart.png"]} prompt='Utah Teapot, digital art --ar 16:9' />
              <TeapotCard img={images["basephoto.png"]} prompt='a photo of a Utah Teapot --ar 16:9' />
              <TeapotCard img={images["basemade.png"]} prompt='Utah Teapot made of --ar 16:9' />
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1'>
          <Accordion.Header>Art Medium</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Physical Mediums' desc='Things that are drawn or printed.'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["base.png"]} prompt='Utah Teapot' />
                <TeapotCard img={images["illustration.png"]} prompt='Utah Teapot, Illustration' />
                <TeapotCard img={images["sketch.png"]} prompt='Utah Teapot, Sketch' />
                <TeapotCard img={images["oilPainting.png"]} prompt='Utah Teapot, Oil Painting' />
                <TeapotCard img={images["glassPaint.png"]} prompt='Utah Teapot, Glass Paint' />
              </Row>
              <Row>
                <TeapotCard img={images["charcoal.png"]} prompt='Utah Teapot, Charcoal' />
                <TeapotCard img={images["watercolor.png"]} prompt='Utah Teapot, Watercolor' />
                <TeapotCard img={images["chalk.png"]} prompt='Utah Teapot, Chalk' />
                <TeapotCard img={images["tempera.png"]} prompt='Utah Teapot, Tempera' />
                <TeapotCard img={images["pastel.png"]} prompt='Utah Teapot, Pastel' />
              </Row>
              <Row>
                <TeapotCard img={images["inkPen.png"]} prompt='Utah Teapot, Ink and Pen' />
                <TeapotCard img={images["graphitePencil.png"]} prompt='Utah Teapot, Graphite Pencil' />
                <TeapotCard img={images["colorPencil.png"]} prompt='Utah Teapot, Color Pencil' />
                <TeapotCard img={images["goache.png"]} prompt='Utah Teapot, Goache' />
                <TeapotCard img={images["acrylic.png"]} prompt='Utah Teapot, Acrylic' />
              </Row>
              <Row>
                <TeapotCard img={images["conte.png"]} prompt='Utah Teapot, Conte' />
                <TeapotCard img={images["marker.png"]} prompt='Utah Teapot, Marker' />
                <TeapotCard img={images["glaze.png"]} prompt='Utah Teapot, Glaze' />
                <TeapotCard img={images["crayon.png"]} prompt='Utah Teapot, Crayon' />
                <TeapotCard img={images["latex.png"]} prompt='Utah Teapot, Latex' />
              </Row>
              <Row>
                <TeapotCard img={images["glitter.png"]} prompt='Utah Teapot, Glitter' />
                <TeapotCard img={images["sprayPaint.png"]} prompt='Utah Teapot, Spray Paint' />
                <TeapotCard img={images["glassPaint.png"]} prompt='Utah Teapot, Glass Paint' />
                <TeapotCard img={images["latte2.png"]} prompt='Utah Teapot, Latte Art' />
                <TeapotCard img={images["illumanu.png"]} prompt='Utah Teapot, Illuminated Manuscript' />
              </Row>
              <Row>
                <TeapotCard img={images["blueprint.png"]} prompt='Utah Teapot, Blueprint' />
                <TeapotCard img={images["blueprint2.png"]} prompt='A blueprint of the Utah Teapot' />
                <TeapotCard img={images["concept.png"]} prompt='Utah Teapot, Concept Art' />
                <TeapotCard img={images["storyboard.png"]} prompt='Utah Teapot, Storyboard' />
                <TeapotCard img={images["collage.png"]} prompt='Utah Teapot, Collage' />
              </Row>
              <Row>
                <TeapotCard img={images["block.png"]} prompt='Utah Teapot, Block Printing' />
                <TeapotCard img={images["line.png"]} prompt='Utah Teapot, Line Art' />
                <TeapotCard img={images["prop.png"]} prompt='Utah Teapot, Propaganda Poster' />
                <TeapotCard img={images["sears.png"]} prompt='Utah Teapot, Sears Catalog' />
                <TeapotCard img={images["prod.png"]} prompt='Utah Teapot, Product Photo' />
              </Row>
              <Row>
                <TeapotCard img={images["elecPhoto.png"]} prompt='Utah Teapot, Election Photo' />
                <TeapotCard img={images["elecPoster.png"]} prompt='Utah Teapot, Election Poster' />
                <TeapotCard img={images["screen.png"]} prompt='Utah Teapot, Screen Painting' />
                <TeapotCard img={images["mono.png"]} prompt='Utah Teapot, Mono Printing' />
                <TeapotCard img={images["foundobj.png"]} prompt='Utah Teapot, Found Objects' />
              </Row>
              <Row>
                <TeapotCard img={images["etching.png"]} prompt='Utah Teapot, Etching' />
                <TeapotCard img={images["litho.png"]} prompt='Utah Teapot, Lithography' />
                <TeapotCard img={images["installation.png"]} prompt='Utah Teapot, Installation Art' />
                <TeapotCard img={images["airbrush.png"]} prompt='Utah Teapot, Airbrush' />
                <TeapotCard img={images["anatomical.png"]} prompt='Utah Teapot, Anatomical Drawing' />
              </Row>
              <Row>
                <TeapotCard img={images["calligraphy.png"]} prompt='Utah Teapot, Calligraphy' />
                <TeapotCard img={images["inkpainting.png"]} prompt='Utah Teapot, Ink Painting' />
                <TeapotCard img={images["scroll.png"]} prompt='Utah Teapot, Scroll Painting' />
                <TeapotCard img={images["tattoo.png"]} prompt='Utah Teapot, Tattoo' />
                <TeapotCard img={images["applique.png"]} prompt='Utah Teapot, Applique' />
              </Row>
              <Row>
                <TeapotCard img={images["enameled.png"]} prompt='Utah Teapot, Enameled' />
                <TeapotCard img={images["jewelry.png"]} prompt='Utah Teapot, Jewelry' />
                <TeapotCard img={images["azulejo.png"]} prompt='Utah Teapot, Azulejo' />
                <TeapotCard img={images["stamp.png"]} prompt='Utah Teapot, Stamp' />
                <TeapotCard img={images["goldleaf.png"]} prompt='Utah Teapot, Gold Leaf' />
              </Row>

              <Row>
                <TeapotCard img={images["lacquer.png"]} prompt='Utah Teapot, Carved Lacquer' />
                <TeapotCard img={images["scientificdiagram.png"]} prompt='Utah Teapot, Scientific Diagram' />

                <TeapotCard img={images["magazine.png"]} prompt='Utah Teapot, Magazine' />
                <TeapotCard img={images["ad.png"]} prompt='Utah Teapot, Advertisement' />

                <TeapotCard img={images["postage.png"]} prompt='Utah Teapot, Postage' />
              </Row>

              <Row>
                <TeapotCard img={images["woodblock.png"]} prompt='Utah Teapot, Wood Block Print' />
                <TeapotCard img={images["newspaper.png"]} prompt='Utah Teapot, Newspaper' />
              </Row>

              <RowStyleDiv title='Fabric Mediums' desc='Physical things that are knitted, sewn or otherwise made from fabric.'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["quilt.png"]} prompt='Utah Teapot, Quilt' />
                <TeapotCard img={images["lace.png"]} prompt='Utah Teapot, Lace' />
                <TeapotCard img={images["embroidery.png"]} prompt='Utah Teapot, Embroidery' />
                <TeapotCard img={images["macrame.png"]} prompt='Utah Teapot, Macrame' />
                <TeapotCard img={images["knitted.png"]} prompt='Utah Teapot, Knitted' />
              </Row>
              <Row>
                <TeapotCard img={images["rug.png"]} prompt='Utah Teapot, Rug' />
                <TeapotCard img={images["weave.png"]} prompt='Utah Teapot, Weave' />
                <TeapotCard img={images["felted.png"]} prompt='Utah Teapot, Felted' />
                <TeapotCard img={images["crochet.png"]} prompt='Utah Teapot, Crochet' />

                <TeapotCard img={images["crossstitch.png"]} prompt='Utah Teapot, Cross Stich' />
              </Row>
              <Row>
                <TeapotCard img={images["crewl.png"]} prompt='Utah Teapot, Crewl Embroidery' />
                <TeapotCard img={images["needlepoint.png"]} prompt='Utah Teapot, Needlepoint' />
                <TeapotCard img={images["patch.png"]} prompt='Utah Teapot, Patch' />
              </Row>
              <RowStyleDiv title='Photographic Mediums' desc='Things that are or appear to be photographed.'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["stopmotion.png"]} prompt='Utah Teapot, Stop Motion' />
                <TeapotCard img={images["photoshoot.png"]} prompt='Utah Teapot, Photoshoot' />
                <TeapotCard img={images["gopro.png"]} prompt='Utah Teapot, Gopro' />
                <TeapotCard img={images["trailcam.png"]} prompt='Utah Teapot, Trail Cam' />
                <TeapotCard img={images["dashcam.png"]} prompt='Utah Teapot, Dashcam' />
              </Row>

              <RowStyleDiv title='Digital Mediums' desc='Things that are drawn or generated digitally.'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["digitalArt.png"]} prompt='Utah Teapot, Digital Art' />
                <TeapotCard img={images["pixel.png"]} prompt='Utah Teapot, PixelArt' />
                <TeapotCard img={images["pixel2.png"]} prompt='A pixel art of the Utah Teapot' />
                <TeapotCard img={images["anime.png"]} prompt='Utah Teapot, Anime' />
                <TeapotCard img={images["texture.png"]} prompt='Utah Teapot, Texture' />
              </Row>
              <Row>
                <TeapotCard img={images["fractal.png"]} prompt='Utah Teapot, Fractal' />
                <TeapotCard img={images["algo.png"]} prompt='Utah Teapot, Algorithmic' />
                <TeapotCard img={images["datamosh.png"]} prompt='Utah Teapot, Data Moshing' />
                <TeapotCard img={images["dynamic.png"]} prompt='Utah Teapot, Dynamic Painting' />
                <TeapotCard img={images["3dmodel.png"]} prompt='Utah Teapot, 3D Model' />
              </Row>
              <Row>
                <TeapotCard img={images["logo.png"]} prompt='Utah Teapot, Logo' />
                <TeapotCard img={images["icon.png"]} prompt='Utah Teapot, Icon' />
                <TeapotCard img={images["digitalphotography.png"]} prompt='Utah Teapot, Digital Photography' />
                <TeapotCard img={images["vector.png"]} prompt='Utah Teapot, Vector Art' />
                <TeapotCard img={images["tilemap.png"]} prompt='Utah Teapot, Tilemap' />
              </Row>
              <Row>
                <TeapotCard img={images["mspaint.png"]} prompt='Utah Teapot, Microsoft Paint' />
                <TeapotCard img={images["raster.png"]} prompt='Utah Teapot, Raster Art' />
                <TeapotCard img={images["geometric.png"]} prompt='Utah Teapot, Geometric' />
                <TeapotCard img={images["photoshop.png"]} prompt='Utah Teapot, Photoshop' />
                <TeapotCard img={images["isometric.png"]} prompt='Utah Teapot, Isometric' />
              </Row>

              <Row>
                <TeapotCard img={images["depthmap.png"]} prompt='Utah Teapot, Depth Map' />
                <TeapotCard img={images["animation.png"]} prompt='Utah Teapot, Animation' />
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='2'>
          <Accordion.Header>Materials</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Physical Media' desc='Materials that the object is physically made out of.'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["wood.png"]} prompt='Utah Teapot made out of Wood' />
                <TeapotCard img={images["glass.png"]} prompt='Utah Teapot made out of Glass' />
                <TeapotCard img={images["stainedGlass.png"]} prompt='Utah Teapot made out of Stained Glass' />
                <TeapotCard img={images["concrete.png"]} prompt='Utah Teapot made out of Concrete' />
                <TeapotCard img={images["metal.png"]} prompt='Utah Teapot made out of Metal' />
              </Row>

              <Row>
                <TeapotCard img={images["boneChina.png"]} prompt='Utah Teapot made out of Bone China' />
                <TeapotCard img={images["porcelain.png"]} prompt='Utah Teapot made out of Porcelain' />
                <TeapotCard img={images["flowers.png"]} prompt='Utah Teapot made out of Flowers' />
                <TeapotCard img={images["pottery.png"]} prompt='Utah Teapot made out of Pottery' />
                <TeapotCard img={images["paper.png"]} prompt='Utah Teapot made out of Paper' />
              </Row>

              <Row>
                <TeapotCard img={images["stone.png"]} prompt='Utah Teapot made out of Stone' />
                <TeapotCard img={images["marble.png"]} prompt='Utah Teapot made out of Marble' />
                <TeapotCard img={images["fruit.png"]} prompt='Utah Teapot made out of Fruit' />
                <TeapotCard img={images["bronze.png"]} prompt='Utah Teapot made out of Bronze' />
                <TeapotCard img={images["plastic.png"]} prompt='Utah Teapot made out of Plastic' />
              </Row>

              <Row>
                <TeapotCard img={images["water.png"]} prompt='Utah Teapot made out of Water' />
                <TeapotCard img={images["yarn.png"]} prompt='Utah Teapot made out of Yarn' />
                <TeapotCard img={images["ice.png"]} prompt='Utah Teapot made out of Ice' />
                <TeapotCard img={images["wax.png"]} prompt='Utah Teapot made out of Wax' />
                <TeapotCard img={images["ivory.png"]} prompt='Utah Teapot made out of Ivory' />
              </Row>
              <Row>
                <TeapotCard img={images["soysauce.png"]} prompt='Utah Teapot made out of Soy Sauce' />
                <TeapotCard img={images["vegetation.png"]} prompt='Utah Teapot made out of Vegetation' />
                <TeapotCard img={images["tile.png"]} prompt='Utah Teapot made out of Tile' />
                <TeapotCard img={images["pewter.png"]} prompt='Utah Teapot made out of Pewter' />
                <TeapotCard img={images["origami.png"]} prompt='Utah Teapot made out of Origami' />
              </Row>
              <Row>
                <TeapotCard img={images["styrofoam.png"]} prompt='Utah Teapot made out of Styrofoam' />
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='3'>
          <Accordion.Header>Artistic Movements</Accordion.Header>
          <Accordion.Body>
            <Container>
            <RowStyleDiv title='See "Traditional Artists and Movements for more."' desc=''></RowStyleDiv>
              <RowStyleDiv title='-Punk Styles' desc='Most popular are steampunk and cyberpunk.'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["steampunk.png"]} prompt='Utah Teapot in the style of steampunk' />
                <TeapotCard img={images["cyberpunk.png"]} prompt='Utah Teapot in the style of cyberpunk' />
                <TeapotCard img={images["solarpunk.png"]} prompt='Utah Teapot in the style of solarpunk' />
                <TeapotCard img={images["steelpunk.png"]} prompt='Utah Teapot in the style of cyberpunk' />
                <TeapotCard img={images["bronzepunk.png"]} prompt='Utah Teapot in the style of bronzepunk' />
              </Row>
              <Row>
                <TeapotCard img={images["dieselpunk.png"]} prompt='Utah Teapot in the style of dieselpunk' />
                <TeapotCard img={images["piedieselpunk.png"]} prompt='Utah Teapot in the style of Piecraftian dieselpunk' />
                <TeapotCard img={images["ottodieselpunk.png"]} prompt='Utah Teapot in the style of Ottensian dieselpunk' />
                <TeapotCard img={images["decopunk.png"]} prompt='Utah Teapot in the style of decopunk' />
                <TeapotCard img={images["atompunk.png"]} prompt='Utah Teapot in the style of atompunk' />
              </Row>
              <Row>
                <TeapotCard img={images["biopunk.png"]} prompt='Utah Teapot in the style of biopunk' />
                <TeapotCard img={images["cuberpunk.png"]} prompt='Utah Teapot in the style of cuberpunk' />
                <TeapotCard img={images["postcyberpunk.png"]} prompt='Utah Teapot in the style of postcyberpunk' />
                <TeapotCard img={images["cybernoir.png"]} prompt='Utah Teapot in the style of cybernoir' />
                <TeapotCard img={images["clockpunk.png"]} prompt='Utah Teapot in the style of clockpunk' />
              </Row>

              <Row>
                <TeapotCard img={images["decopunk.png"]} prompt='Utah Teapot in the style of decopunk' />
                <TeapotCard img={images["atompunk.png"]} prompt='Utah Teapot in the style of atompunk' />
                <TeapotCard img={images["formicapunk.png"]} prompt='Utah Teapot in the style of formicapunk' />
              </Row>

              <RowStyleDiv title='-Wave Styles' desc='Most popular are synthwave and vaporwave.'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["synthwave.png"]} prompt='Utah Teapot in the style of synthwave' />
                <TeapotCard img={images["vaporwave.png"]} prompt='Utah Teapot in the style of vaporwave' />
                <TeapotCard img={images["retrowave.png"]} prompt='Utah Teapot in the style of retrowave' />
                <TeapotCard img={images["futurefunk.png"]} prompt='Utah Teapot in the style of Future Funk' />
                <TeapotCard img={images["outrun.png"]} prompt='Utah Teapot in the style of Outrun' />
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='4'>
          <Accordion.Header>Camera properties and effects</Accordion.Header>
          <Accordion.Body>
            <Container>
            <RowStyleDiv title='Resolution' desc='Resolution Keywords'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["4k.png"]} prompt='Utah Teapot, digital art, 4k' />
                <TeapotCard img={images["8k.png"]} prompt='Utah Teapot, digital art, 8k' />
                <TeapotCard img={images["16k.png"]} prompt='Utah Teapot, digital art, 16k' />
              </Row>

              <RowStyleDiv title='Camera Effects' desc='Camera related effects and modifiers.'></RowStyleDiv>
              <Row>

              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='5'>
          <Accordion.Header>Post Processing</Accordion.Header>
          <Accordion.Body>
            <Container>
              
              <RowStyleDiv title='Post Processing' desc='Common post processing effects like bloom.'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["aliasing.png"]} prompt='Utah Teapot, digital art, Anti-Aliasing' />
                <TeapotCard img={images["occlusion.png"]} prompt='Utah Teapot, digital art, Ambient Occlusion' />
                <TeapotCard img={images["exposure.png"]} prompt='Utah Teapot, digital art, Exposure' />
                <TeapotCard img={images["bloom.png"]} prompt='Utah Teapot, digital art, Bloom' />
                <TeapotCard img={images["chromatic.png"]} prompt='Utah Teapot, digital art, Chromatic Abberation' />
              </Row>
              <Row>
                <TeapotCard img={images["fog.png"]} prompt='Utah Teapot, digital art, Fog Effect' />
                <TeapotCard img={images["dof.png"]} prompt='Utah Teapot, digital art, Depth of Field effect' />
                <TeapotCard img={images["grain.png"]} prompt='Utah Teapot, digital art, Grain Effect' />
                <TeapotCard img={images["distortion.png"]} prompt='Utah Teapot, digital art, Lens Distortion Effect' />
                <TeapotCard img={images["mblur.png"]} prompt='Utah Teapot, digital art, Motion Blur Effect' />
              </Row>
              <Row>
                <TeapotCard img={images["panini.png"]} prompt='Utah Teapot, digital art, Panini Effect' />
                <TeapotCard img={images["vignette.png"]} prompt='Utah Teapot, digital art, Vignette effect' />
                <TeapotCard img={images["grain.png"]} prompt='Utah Teapot, digital art, Grain Effect' />
                <TeapotCard img={images["ray.png"]} prompt='Utah Teapot, digital art, Ray Traced' />
                <TeapotCard img={images["rayocc.png"]} prompt='Utah Teapot, digital art, Ray Tracing Ambient Occlusion' />
              </Row>
              <Row>
                <TeapotCard img={images["shaders.png"]} prompt='Utah Teapot, digital art, Shaders' />
                <TeapotCard img={images["postprocess.png"]} prompt='Utah Teapot, digital art, Post Processing' />
                <TeapotCard img={images["cel.png"]} prompt='Utah Teapot, digital art, Cel Shading' />
              </Row>
              <RowStyleDiv title='Reflections' desc='Reflection based effects'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["refray.png"]} prompt='Utah teapot, digital art, Ray Tracing Reflections' />
                <TeapotCard img={images["reflumen.png"]} prompt='Utah teapot, digital art, Lumen Reflections' />
                <TeapotCard img={images["refscreen.png"]} prompt='Utah teapot, digital art, Screen Space Reflections' />
              </Row>

              <RowStyleDiv title='Misc Effects' desc='Unsorted Post-Processing effects.'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["hdr.png"]} prompt='Utah Teapot, digital art, hdr' />
                <TeapotCard img={images["cinematic.png"]} prompt='Utah Teapot, digital art, cinematic' />
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='6'>
          <Accordion.Header>Lighting, Dimensionality, Design Styles</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Complexity' desc='Detail level keywords'></RowStyleDiv>
              <Row>

              </Row>
              <RowStyleDiv title='Lighting' desc='Lighting and shadow related keywords'></RowStyleDiv>
              <Row>

              </Row>

              <RowStyleDiv title='Dimensionality' desc='Dimension related keywords.'></RowStyleDiv>
              <Row>

              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='7'>
          <Accordion.Header>Traditional Artists and Movements</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Surrealist' desc='Disdaining rationalism and literary realism, and powerfully influenced by psychoanalysis'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["salvadordali.png"]} prompt='Utah Teapot by Salvador Dali' />
              
              </Row>
              <RowStyleDiv title='Impressionist' desc='The Impressionists tried to get down on canvas an “impression” of how a landscape, thing, or person appeared to them at a certain moment in time.'></RowStyleDiv>
              <Row>
              
              </Row>
              <RowStyleDiv title='Post-Impressionist' desc='Post-Impressionism encompasses a wide range of distinct artistic styles that all share the common motivation of responding to the opticality of the Impressionist movement.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["vangogh.png"]} prompt='Utah Teapot by Van Gogh' />
              </Row>
              <RowStyleDiv title='Realist' desc='Realist painters replaced the idealistic images and literary conceits of traditional art with real-life events, giving the margins of society similar weight to grand history paintings and allegories.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["adolphmenzel.png"]} prompt='Utah Teapot by Adolph Menzel' />
              
              </Row>
              <RowStyleDiv title='Expressionism' desc='Art was now meant to come forth from within the artist, rather than from a depiction of the external visual world, and the standard for assessing the quality of a work of art became the character of the artists feelings rather than an analysis of the composition.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["affadi.png"]} prompt='Utah Teapot by Affadi' />
              
              </Row>
              <RowStyleDiv title='Modernism/Modern Art' desc='Modernism refers to a global movement in society and culture that from the early decades of the twentieth century sought a new alignment with the experience and values of modern industrial life. Building on late nineteenth-century precedents, artists around the world used new imagery, materials and techniques to create artworks that they felt better reflected the realities and hopes of modern societies.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["agneslawrence.png"]} prompt='Utah Teapot by Agnes Lawrence Pelton' />
              </Row>
              <RowStyleDiv title='Luminism' desc=' Luminist paintings do not tend to depict nature as grand and imposing, nor do they strive to convey a sense of spectacular, awe-inspiring sublimity. Instead, Luminist paintings with their smaller size evoke a quiet spirituality based on closely observed natural phenomena, especially the quality of light.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["albertbierstadt.png"]} prompt='Utah Teapot by Albert Bierstadt' />
              </Row>
              <RowStyleDiv title='Gothic' desc='The innovations of Gothic architecture were premised on the ideas developed by Abbot Suger that earthly light contained divine light and that the physical edifice of the church needed to make this concept tangible. Revolutionary transformations of flying buttresses and groin vaulting allowed the inclusion of more stained glass windows in the church’s structure, thus transforming the everyday sunlight into a prism of colors that danced over the surfaces of the stone and reminded worshippers of God’s divine presence.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["albrechtdurer.png"]} prompt='Utah Teapot by Albrecht Durer' />
              </Row>
              <RowStyleDiv title='Postmodern' desc='Postmodernism overturned the idea that there was one inherent meaning to a work of art or that this meaning was determined by the artist at the time of creation. Instead, the viewer became an important determiner of meaning, even allowed by some artists to participate in the work as in the case of some performance pieces. Other artists went further by creating works that required viewer intervention to create and/or complete the work.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["alexgrey.png"]} prompt='Utah Teapot by Alex Grey' />
              </Row>
              <RowStyleDiv title='Modern Artists' desc='Artists for video games, manga, comic books, artstation etc.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["akihikoyoshida.png"]} prompt='Utah Teapot by Akihiko Yoshida' />
              <TeapotCard img={images["akaritoriyama.png"]} prompt='Utah Teapot by Akari Toriyama' />
              <TeapotCard img={images["alwilliamson.png"]} prompt='Utah Teapot by Al Williamson' />
              <TeapotCard img={images["alanlee.png"]} prompt='Utah Teapot by Alan Lee' />
              <TeapotCard img={images["albertovargas.png"]} prompt='Utah Teapot by Alberto Vargas' />
              </Row>
              <Row>
              <TeapotCard img={images["aleksibriclot.png"]} prompt='Utah Teapot by Aleksi Briclot' />
              <TeapotCard img={images["alenaaenami.png"]} prompt='Utah Teapot by Alena Aenami' />
              <TeapotCard img={images["alexanderjansson.png"]} prompt='Utah Teapot by Alexander Jansson' />
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='8'>
          <Accordion.Header>Non-Painting Artists</Accordion.Header>
          <Accordion.Body>
            <Container>
            <RowStyleDiv title='Scultors' desc='Making sculptures.'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["albertogiacometti.png"]} prompt='Utah Teapot by Alberto Giacometti' />
              </Row>
              
              <RowStyleDiv title='Architects' desc='Temp category'></RowStyleDiv>
              <Row>

              </Row>
              <RowStyleDiv title='Photographers' desc='Temp category'></RowStyleDiv>
              <Row>

              </Row>
              <RowStyleDiv title='Misc Artists' desc='Temp category'></RowStyleDiv>
              <Row>

              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='9'>
          <Accordion.Header>Intangible Modifiers</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Emotions and Qualities' desc='Detail level keywords'></RowStyleDiv>
              <Row>

              </Row>
              <RowStyleDiv title='Concepts' desc='Lighting and shadow related keywords'></RowStyleDiv>
              <Row>

              </Row>

              <RowStyleDiv title='Dimensionality' desc='Dimension related keywords.'></RowStyleDiv>
              <Row>

              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>
    );
}

export default TeaAccordian;