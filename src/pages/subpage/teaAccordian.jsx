import { Container, Accordion, Row, Col } from "react-bootstrap";
import TeapotCard from "../../components/teapotCard";
import RowStyleDiv from "../../components/rowdiv";
import { ASPECTS, BASEMODIFICATIONS, MATERIALS, MJARGUMENTS, PHYSICALMEDIUMS, STYLES, CAMERA, POSTPROCESSING, LDD, ARTISTS } from "../../components/allkeys";
import TeapotShelf from "../../components/teapotShelf";



function TeaAccordian(props) {
  const images = props.images;


  function seperate(prefix, suffix, base, rowpercol)
  {
    var rows = [];
    for (var i = 0; i < Math.ceil(Object.keys(base).length); i += rowpercol) {
      rows.push(<TeapotShelf key1={images[`${Object.keys(base)[i]}.png`]} value1={`${prefix}${base[Object.keys(base)[i]]}${suffix}`}
      key2={images[`${Object.keys(base)[i + 1]}.png`]} value2={`${prefix}${base[Object.keys(base)[i + 1]]}${suffix}`}
      key3={images[`${Object.keys(base)[i + 2]}.png`]} value3={`${prefix}${base[Object.keys(base)[i + 2]]}${suffix}`}
      key4={images[`${Object.keys(base)[i + 3]}.png`]} value4={`${prefix}${base[Object.keys(base)[i + 3]]}${suffix}`}
      key5={images[`${Object.keys(base)[i + 4]}.png`]} value5={`${prefix}${base[Object.keys(base)[i + 4]]}${suffix}`}/>);
    }
    
    return rows;
  }
  let prompt = "Utah Teapot --ar ";
  var aspectrows = seperate(prompt,'', ASPECTS, 5);
  var argrows = seperate("Utah Teapot ",'', MJARGUMENTS, 5);
  var basemodrows = seperate("",'', BASEMODIFICATIONS, 5);
  var physicalmedia = seperate("Utah Teapot, ",'', PHYSICALMEDIUMS.physicalmediums, 5);
  var fabricmedia = seperate("Utah Teapot, ",'', PHYSICALMEDIUMS.fabricmediums, 5);
  var photographicmedia = seperate("Utah Teapot, ",'', PHYSICALMEDIUMS.photographicmediums, 5);
  var digitalmedia = seperate("Utah Teapot, ",'', PHYSICALMEDIUMS.digitalmediums, 5);
  var materials = seperate("Utah Teapot made of ",'', MATERIALS.materials, 5);
  
  var punkstyles = seperate("Utah Teapot in the style of ",'', STYLES.punkstyles, 5);
  var wavestyles = seperate("Utah Teapot in the style of ",'', STYLES.wavestyles, 5);
  var resolutions = seperate("Utah Teapot, Digital Art, ",'', CAMERA.resolution, 5);
  var perspectives = seperate("A photo of a utah teapot,   ",'', CAMERA.perspectives, 5);
  
  var postprocess = seperate("Utah Teapot, Digital Art, ",'', POSTPROCESSING.postprocessing, 5);
  var reflections = seperate("Utah Teapot, Digital Art, ",'', POSTPROCESSING.reflections, 5);
  
  var ppmisc = seperate("Utah Teapot, Digital Art, ",'', POSTPROCESSING.misc, 5);
  var lighting = seperate("Utah Teapot,  ",'', LDD.lighting, 5);
  var renderers = seperate("Utah Teapot,  ",' Render', STYLES.renderers, 5);
  var abstraction = seperate("Utah Teapot,  ",'', STYLES.abstraction, 5);
  var photosites = seperate("Utah Teapot,  ",' ', STYLES.photosites, 5);
  var timeframes = seperate("A photo of the Utah Teapot,  ",'', STYLES.timeframes, 5);

  //ARTISTS
  var Academism = seperate("Utah Teapot by  ",'', ARTISTS.Academism, 5);
  var ArtsandCrafts = seperate("Utah Teapot by  ",'', ARTISTS.ArtsandCrafts, 5);
  var ArtNouveau = seperate("Utah Teapot by  ",'', ARTISTS.ArtNouveau, 5);
  
  var Baroque = seperate("Utah Teapot by  ",'', ARTISTS.Baroque, 5);
  var Bauhaus = seperate("Utah Teapot by  ",'', ARTISTS.Bauhaus, 5);
  var BayArea = seperate("Utah Teapot by  ",'', ARTISTS.BayArea, 5);
  
  var Environmentalism = seperate("Utah Teapot by  ",'', ARTISTS.Environmentalism, 5);
  var Expressionism = seperate("Utah Teapot by  ",'', ARTISTS.Expressionism, 5);
  console.log("Good til here2");
  var Gothic = seperate("Utah Teapot by  ",'', ARTISTS.Gothic, 5);
  var Impressionist = seperate("Utah Teapot by  ",'', ARTISTS.Impressionist, 5);
  console.log("Good til here");
  var InstallationArt = seperate("Utah Teapot by  ",'', ARTISTS.InstallationArt, 5);
  var Luminism = seperate("Utah Teapot by  ",'', ARTISTS.Luminism, 5);
  var Modernism = seperate("Utah Teapot by  ",'', ARTISTS.Modernism, 5);
  var Photorealism = seperate("Utah Teapot by  ",'', ARTISTS.Photorealism, 5);
  var PostImpressionist = seperate("Utah Teapot by  ",'', ARTISTS.PostImpressionist, 5);
  var PopArt = seperate("Utah Teapot by  ",'', ARTISTS.PopArt, 5);
  var Postmodern = seperate("Utah Teapot by  ",'', ARTISTS.Postmodern, 5);
  var Realist = seperate("Utah Teapot by  ",'', ARTISTS.Realist, 5);
  var Romantisism = seperate("Utah Teapot by  ",'', ARTISTS.Romantisism, 5);
  var ScienceFiction = seperate("Utah Teapot by  ",'', ARTISTS.ScienceFiction, 5);
  var StreetArt = seperate("Utah Teapot by  ",'', ARTISTS.StreetArt, 5);
  var Surrealist = seperate("Utah Teapot by  ",'', ARTISTS.Surrealist, 5);
  var Symbolism = seperate("Utah Teapot by  ",'', ARTISTS.Symbolism, 5);
  var HudsonRiver = seperate("Utah Teapot by  ",'', ARTISTS.HudsonRiver, 5);
  var VisionaryArt = seperate("Utah Teapot by  ",'', ARTISTS.VisionaryArt, 5);

  return (
    <div>
      <Accordion defaultActiveKey='0' className='accordCenter'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Base prompts</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Aspect Ratio' desc='Different aspect ratios.'></RowStyleDiv>
            {aspectrows}
              <RowStyleDiv title='Prompt Arguments' desc='MJ specific arguments.'></RowStyleDiv>
              {argrows}
              <RowStyleDiv title='Base modifications' desc='Modifications of the base prompt used in the following site.'></RowStyleDiv>
                {basemodrows}
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1'>
          <Accordion.Header>Art Medium</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Physical Mediums' desc='Things that are drawn or printed.'></RowStyleDiv>
              {physicalmedia}
              <RowStyleDiv title='Fabric Mediums' desc='Physical things that are knitted, sewn or otherwise made from fabric.'></RowStyleDiv>
              {fabricmedia}
              <RowStyleDiv title='Photographic Mediums' desc='Things that are or appear to be photographed.'></RowStyleDiv>
              {photographicmedia}
              

              <RowStyleDiv title='Digital Mediums' desc='Things that are drawn or generated digitally.'></RowStyleDiv>
              {digitalmedia}
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='2'>
          <Accordion.Header>Materials</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Materials' desc='Materials that the object is physically made out of.'></RowStyleDiv>
              {materials}
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='3'>
          <Accordion.Header>Artistic Movements, Styles, Themes</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='See "Traditional Artists and Movements for more."' desc=''></RowStyleDiv>
              <RowStyleDiv title='Rendering Engines' desc='Rendering engines, game engines and 3d modeling engines.'></RowStyleDiv>
              {renderers}
              <RowStyleDiv title='Photosites' desc='Photosharing and Art sharing sites.'></RowStyleDiv>
              {photosites}

              <RowStyleDiv title='Timeframes' desc='Different decades and eras.'></RowStyleDiv>
              {timeframes}

              <RowStyleDiv title='Abstraction/Realism' desc='Levels of abstraction and realism'></RowStyleDiv>
              {abstraction}

              <RowStyleDiv title='-Punk Styles' desc='Most popular are steampunk and cyberpunk.'></RowStyleDiv>
              {punkstyles}

              <RowStyleDiv title='-Wave Styles' desc='Most popular are synthwave and vaporwave.'></RowStyleDiv>
              {wavestyles}
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='4'>
          <Accordion.Header>Camera properties and effects</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Resolution' desc='Resolution Keywords'></RowStyleDiv>
              {resolutions}

              <RowStyleDiv title='Camera Lengths and Views' desc='Camera focal lengths and camera angles.'></RowStyleDiv>
              {perspectives}
             
              <RowStyleDiv title='Camera Effects' desc='Camera related effects and modifiers.'></RowStyleDiv>
              <Row></Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='5'>
          <Accordion.Header>Post Processing</Accordion.Header>
          <Accordion.Body>
            <Container>
              
              <RowStyleDiv title='Post Processing' desc='Common post processing effects like bloom.'></RowStyleDiv>
              {postprocess}
              <RowStyleDiv title='Reflections' desc='Reflection based effects'></RowStyleDiv>
              {reflections}
             

              <RowStyleDiv title='Misc Effects' desc='Unsorted Post-Processing effects.'></RowStyleDiv>
              {ppmisc}
             
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
              {lighting}
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
              <RowStyleDiv
                title='Academism'
                desc=' Academism kind of preserved the familiar classical forms and brought them up to the level of an immutable law, to the denial of the artist’s individuality— he was only supposed to imitate his great predecessors.'></RowStyleDiv>
              {Academism}

              <RowStyleDiv
                title='Arts and Crafts'
                desc='It stood for traditional craftsmanship, and often used medieval, romantic, or folk styles of decoration. It advocated economic and social reform and was anti-industrial in its orientation. It had a strong influence on the arts in Europe until it was displaced by Modernism in the 1930s, and its influence continued among craft makers, designers, and town planners long afterwards.'></RowStyleDiv>
              {ArtsandCrafts}


              <RowStyleDiv
                title='Art Nouveau'
                desc='The practitioners of Art Nouveau sought to revive good workmanship, raise the status of craft, and produce genuinely modern design that reflected the utility of the items they were creating.'></RowStyleDiv>
              {ArtNouveau}

              <RowStyleDiv
                title='Baroque'
                desc='Baroque brought images for religious worship back into the public eye after being banned for their glorification of the ethereal and ideal. The movements leaders professed that art should be easily understood and strongly felt by common people with the effect of encouraging piety and an awe for the church.'></RowStyleDiv>
              {Baroque}

              <RowStyleDiv title='Bauhaus' desc=''></RowStyleDiv>
              {Bauhaus}

              <RowStyleDiv
                title='Bay Area Figurative Movement'
                desc='The work of the Bay Area Figurative Movement arguably signifies the most significant and subtle challenge to the dominance of Abstract Expressionism in post-Second World War North-American art. If the revolt of the Pop Artists was defined by a contrarian embrace of the superficial, artists such as David Park, Elmer Bischoff, and Richard Diebenkorn embraced the spirit of abstraction while turning to landscapes, figures, and contemporary settings in which their compositions could be grounded.'></RowStyleDiv>
              {BayArea}

              <RowStyleDiv
                title='Environmentalism'
                desc='Environmental artists seek to investigate our human relationship with the environment through embedding their artistic practice within it. This changes the way we think about the site of artistic production; as opposed to using the artists studio as the sole location in which to create, Environmental artists engage the natural world in a much more active and immediate way either by working in new ways outside, or by bringing natural materials into new settings.'></RowStyleDiv>
              {Environmentalism}


              <RowStyleDiv
                title='Expressionism'
                desc='Art was now meant to come forth from within the artist, rather than from a depiction of the external visual world, and the standard for assessing the quality of a work of art became the character of the artists feelings rather than an analysis of the composition.'></RowStyleDiv>
              {Expressionism}

              <RowStyleDiv
                title='Gothic'
                desc='The innovations of Gothic architecture were premised on the ideas developed by Abbot Suger that earthly light contained divine light and that the physical edifice of the church needed to make this concept tangible. Revolutionary transformations of flying buttresses and groin vaulting allowed the inclusion of more stained glass windows in the church’s structure, thus transforming the everyday sunlight into a prism of colors that danced over the surfaces of the stone and reminded worshippers of God’s divine presence.'></RowStyleDiv>
              {Gothic}

              <RowStyleDiv
                title='Impressionist'
                desc='The Impressionists tried to get down on canvas an “impression” of how a landscape, thing, or person appeared to them at a certain moment in time.'></RowStyleDiv>
              {Impressionist}

              <RowStyleDiv
                title='Installation Art'
                desc='Installation art is an artistic genre of three-dimensional works that are often site-specific and designed to transform the perception of a space.'></RowStyleDiv>
              {InstallationArt}


              <RowStyleDiv
                title='Luminism'
                desc=' Luminist paintings do not tend to depict nature as grand and imposing, nor do they strive to convey a sense of spectacular, awe-inspiring sublimity. Instead, Luminist paintings with their smaller size evoke a quiet spirituality based on closely observed natural phenomena, especially the quality of light.'></RowStyleDiv>
              {Luminism}

              <RowStyleDiv
                title='Modernism/Modern Art'
                desc='Modernism refers to a global movement in society and culture that from the early decades of the twentieth century sought a new alignment with the experience and values of modern industrial life. Building on late nineteenth-century precedents, artists around the world used new imagery, materials and techniques to create artworks that they felt better reflected the realities and hopes of modern societies.'></RowStyleDiv>
              {Modernism}

              <RowStyleDiv
                title='Photorealism'
                desc='Photorealism is a genre of art that encompasses painting, drawing and other graphic media, in which an artist studies a photograph and then attempts to reproduce the image as realistically as possible in another medium.'></RowStyleDiv>
              {Photorealism}

              <RowStyleDiv
                title='Post-Impressionist'
                desc='Post-Impressionism encompasses a wide range of distinct artistic styles that all share the common motivation of responding to the opticality of the Impressionist movement.'></RowStyleDiv>
              {PostImpressionist}

              <RowStyleDiv
                title='Postmodern'
                desc='Postmodernism overturned the idea that there was one inherent meaning to a work of art or that this meaning was determined by the artist at the time of creation. Instead, the viewer became an important determiner of meaning, even allowed by some artists to participate in the work as in the case of some performance pieces. Other artists went further by creating works that required viewer intervention to create and/or complete the work.'></RowStyleDiv>
              {Postmodern}

              <RowStyleDiv
                title='Pop Art'
                desc='The Pop Art movement aimed to blur the boundaries between "high" art and "low" culture. The concept that there is no hierarchy of culture and that art may borrow from any source has been one of the most influential characteristics of Pop Art.'></RowStyleDiv>
              {PopArt}

              <RowStyleDiv
                title='Realist'
                desc='Realist painters replaced the idealistic images and literary conceits of traditional art with real-life events, giving the margins of society similar weight to grand history paintings and allegories.'></RowStyleDiv>
              {Realist}

              <RowStyleDiv
                title='Romantisism'
                desc='Romanticism embraced individuality and subjectivity to counteract the excessive insistence on logical thought. Artists began exploring various emotional and psychological states as well as moods. The preoccupation with the hero and the genius translated to new views of the artist as a brilliant creator who was unburdened by academic dictate and tastes.'></RowStyleDiv>
              {Romantisism}

              <RowStyleDiv title='Science Fiction' desc=''></RowStyleDiv>
              {ScienceFiction}
              <RowStyleDiv title='Street Art' desc=''></RowStyleDiv>
              {StreetArt}

              <RowStyleDiv title='Surrealist' desc='Disdaining rationalism and literary realism, and powerfully influenced by psychoanalysis'></RowStyleDiv>
              {Surrealist}

              <RowStyleDiv
                title='Symbolism'
                desc='Symbolists combined religious mysticism, the perverse, the erotic, and the decadent. Symbolist subject matter is typically characterized by an interest in the occult, the morbid, the dream world, melancholy, evil, and death.'></RowStyleDiv>
              {Symbolism}

              <RowStyleDiv
                title='The Hudson River School'
                desc='Like Romantic painters in Britain and Germany, Hudson River School artists embraced the landscape as a meaningful subject, precisely as industrialization began to change terrains and reshape mans connection to his environment. The Americans both championed these forces of modernization and lamented what was lost in the name of "progress."'></RowStyleDiv>
              {HudsonRiver}

              <RowStyleDiv
                title='Visionary Art'
                desc='Visionary art isnt so much a movement as it is a theme. The style of the individual artists will vary radically, but their common theme is their attempt to portray the world beyond physical sight and to overlap mystical and spiritual ideas. Visionary art purports to transcend the physical and scientific world and give the audience a virtual vision (hence the name Visionary Art) of what the world might look like if we could see spiritual and mystical things in our every day life. The type of mystical energies portrayed in Visionary Art varies from artist to artist, but the four elements (water, fire, earth and wind), love, lust, holy, unholy, positive and negative forces are all reasonably common. '></RowStyleDiv>
              {VisionaryArt}

              <RowStyleDiv title='Artstation/Deviantart' desc='Also Artsy'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["antonfadeev.png"]} prompt='Utah Teapot by Annton Fadeev' />
                <TeapotCard img={images["alenaaenami.png"]} prompt='Utah Teapot by Alena Aenami' />
                <TeapotCard img={images["andreasrocha.png"]} prompt='Utah Teapot by Andreas Rocha' />
                <TeapotCard img={images["charliebowater.png"]} prompt='Utah Teapot by Charlie Bowater' />
                <TeapotCard img={images["christopherbalaskas.png"]} prompt='Utah Teapot by Christopher Balaskas' />
              </Row>
              <Row>
                <TeapotCard img={images["coryloftis.png"]} prompt='Utah Teapot by Cory Loftis' />
                <TeapotCard img={images["craola.png"]} prompt='Utah Teapot by Craola' />
              </Row>

              <RowStyleDiv title='Comic/Manga' desc=''></RowStyleDiv>
              <Row>
                <TeapotCard img={images["akaritoriyama.png"]} prompt='Utah Teapot by Akari Toriyama' />
                <TeapotCard img={images["alwilliamson.png"]} prompt='Utah Teapot by Al Williamson' />
                <TeapotCard img={images["angusmckie.png"]} prompt='Utah Teapot by Angus McKie' />
                <TeapotCard img={images["antonpieck.png"]} prompt='Utah Teapot by Anton Pieck' />
                <TeapotCard img={images["artgerm.png"]} prompt='Utah Teapot by Artgerm' />
              </Row>
              <Row>
                <TeapotCard img={images["bentemplesmith.png"]} prompt='Utah Teapot by Ben Templesmith' />
                <TeapotCard img={images["brianbolland.png"]} prompt='Utah Teapot by Brian Bolland' />
                <TeapotCard img={images["carlbarks.png"]} prompt='Utah Teapot by Carl Barks' />
                <TeapotCard img={images["charlesschulz.png"]} prompt='Utah Teapot by Charles M. Schulz' />
                <TeapotCard img={images["craigdavison.png"]} prompt='Utah Teapot by Craig Davison' />
              </Row>

              <RowStyleDiv title='Illustrator' desc='A person who draws or creates pictures for magazines, books, advertising, etc.'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["arthurrackham.png"]} prompt='Utah Teapot by Arthur Rackham' />
                <TeapotCard img={images["annestokes.png"]} prompt='Utah Teapot by Anne Stokes' />
                <TeapotCard img={images["alanlee.png"]} prompt='Utah Teapot by Alan Lee' />
                <TeapotCard img={images["aleksibriclot.png"]} prompt='Utah Teapot by Aleksi Briclot' />
                <TeapotCard img={images["alexanderjansson.png"]} prompt='Utah Teapot by Alexander Jansson' />
              </Row>
              <Row>
                <TeapotCard img={images["artspiegelman.png"]} prompt='Utah Teapot by Art Spiegelman' />
                <TeapotCard img={images["asafhanuka.png"]} prompt='Utah Teapot by Asaf Hanuka' />
                <TeapotCard img={images["ashleywood.png"]} prompt='Utah Teapot by Ashley Wood' />
                <TeapotCard img={images["antonotto.png"]} prompt='Utah Teapot by Anton Otto' />
                <TeapotCard img={images["apolloniasaintclair.png"]} prompt='Utah Teapot by Apollonia Saintclair' />
              </Row>
              <Row>
                <TeapotCard img={images["beatrixpotter.png"]} prompt='Utah Teapot by Beatrix Potter' />
                <TeapotCard img={images["berniewrightson.png"]} prompt='Utah Teapot by Bernie Wrightson' />
                <TeapotCard img={images["briandespain.png"]} prompt='Utah Teapot by Brian Despain' />
                <TeapotCard img={images["briankesinger.png"]} prompt='Utah Teapot by Brian Kesinger' />
                <TeapotCard img={images["carnegriffiths.png"]} prompt='Utah Teapot by Carne Griffiths' />
              </Row>
              <Row>
                <TeapotCard img={images["charlesblackman.png"]} prompt='Utah Teapot by Charles Blackman' />
                <TeapotCard img={images["clydecaldwell.png"]} prompt='Utah Teapot by Clyde Caldwell' />
                <TeapotCard img={images["cobywhitmore.png"]} prompt='Utah Teapot by Coby Whitmore' />
                <TeapotCard img={images["colesphillips.png"]} prompt='Utah Teapot by Coles Phillips' />
                <TeapotCard img={images["conradroset.png"]} prompt='Utah Teapot by Conrad Roset' />
              </Row>

              <RowStyleDiv title='Videogame Art' desc='Artists and art from video games'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["akihikoyoshida.png"]} prompt='Utah Teapot by Akihiko Yoshida' />
              </Row>

              <RowStyleDiv title='Unsorted Modern Artists' desc='Unsorted Artists'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["bobbyerley.png"]} prompt='Utah Teapot by Bob Byerley' />
              <TeapotCard img={images["carlholsoe.png"]} prompt='Utah Teapot by Carl Holsøe' />
              <TeapotCard img={images["codexseraphinianus.png"]} prompt='Utah Teapot by Codex Seraphinianus' />
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
                <TeapotCard img={images["alexandermilnecalder.png"]} prompt='Utah Teapot by Alexander Milne Calder' />
              </Row>

              <RowStyleDiv title='Architects' desc='Temp category'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["bjarkeingels.png"]} prompt='Utah Teapot by Bjarke Ingels' />
              </Row>
              <RowStyleDiv title='Photographers' desc='Temp category'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["annegeddes.png"]} prompt='Utah Teapot by Anne Geddes' />
                <TeapotCard img={images["claudecahun.png"]} prompt='Utah Teapot by Claude Cahun' />
              </Row>
              <RowStyleDiv title='Writers' desc='Temp category'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["annemccaffrey.png"]} prompt='Utah Teapot by Anne McCaffrey' />
              </Row>

              <RowStyleDiv title='Designers' desc='Temp category'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["charleseames.png"]} prompt='Utah Teapot by Charles Eames' />
              </Row>

              <RowStyleDiv title='Etching' desc='Temp category'></RowStyleDiv>
              <Row>
                <TeapotCard img={images["canaletto.png"]} prompt='Utah Teapot by Canaletto' />
              </Row>

              <RowStyleDiv title='Misc Artists' desc='Temp category'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["benoitbmandelbrot.png"]} prompt='Utah Teapot by Benoit B. Mandelbrot' />
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='9'>
          <Accordion.Header>Art Websites and Game Renderers</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Art Websites' desc='Detail level keywords'></RowStyleDiv>
              <Row>
              <TeapotCard img={images["cgsociety.png"]} prompt='Utah Teapot by CG Society' />

              </Row>
              <RowStyleDiv title='Game Renderers' desc='Lighting and shadow related keywords'></RowStyleDiv>
              <Row>


              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='10'>
          <Accordion.Header>Intangible Modifiers</Accordion.Header>
          <Accordion.Body>
            <Container>
              <RowStyleDiv title='Emotions and Qualities' desc='Detail level keywords'></RowStyleDiv>
              <Row></Row>
              <RowStyleDiv title='Concepts' desc='Lighting and shadow related keywords'></RowStyleDiv>
              <Row></Row>

              <RowStyleDiv title='Dimensionality' desc='Dimension related keywords.'></RowStyleDiv>
              <Row></Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>


      </Accordion>
    </div>
  );
}

export default TeaAccordian;
