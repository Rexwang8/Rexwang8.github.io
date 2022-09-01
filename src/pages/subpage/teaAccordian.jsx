import { Container, Accordion, Row, Tabs, Tab } from "react-bootstrap";
import TeapotCard from "../../components/teapotCard";
import RowStyleDiv from "../../components/rowdiv";
import { ASPECTS, BASEMODIFICATIONS, MATERIALS, MJARGUMENTS, PHYSICALMEDIUMS, STYLES, CAMERA, POSTPROCESSING, LDD,
   ARTISTS, COLORS, REFERENCEMEDIA, INTANGIBLES, SDARGUMENTS, BASEMODIFICATIONS_sd } from "../../data/allkeys";
import TeapotShelf from "../../components/teapotShelf";

function TeaAccordian(props) {
  const images = props.images;

  function seperate(prefix, suffix, base, rowpercol) {
    var rows = [];
    for (var i = 0; i < Math.ceil(Object.keys(base).sort().length); i += rowpercol) {
      rows.push(
        <TeapotShelf
          key1={images[`${Object.keys(base).sort()[i]}.png`]}
          col={rowpercol}
          value1={`${prefix}${base[Object.keys(base).sort()[i]]}${suffix}`}
          key2={images[`${Object.keys(base).sort()[i + 1]}.png`]}
          value2={`${prefix}${base[Object.keys(base).sort()[i + 1]]}${suffix}`}
          key3={images[`${Object.keys(base).sort()[i + 2]}.png`]}
          value3={`${prefix}${base[Object.keys(base).sort()[i + 2]]}${suffix}`}
          key4={images[`${Object.keys(base).sort()[i + 3]}.png`]}
          value4={`${prefix}${base[Object.keys(base).sort()[i + 3]]}${suffix}`}
          key5={images[`${Object.keys(base).sort()[i + 4]}.png`]}
          value5={`${prefix}${base[Object.keys(base).sort()[i + 4]]}${suffix}`}
        />
      );
    }

    return rows;
  }
  let prompt = "Utah Teapot --ar ";

  let prompthead = "Utah teapot, ";
  let prompttail = "";
  
  var aspectrows = seperate(prompt, "", ASPECTS, 4);
  var aspectrowsSD = seperate("Utah Teapot aspect", "", ASPECTS, 4);
  var argrows = seperate("Utah Teapot ", "", MJARGUMENTS, 5);
  var argrowsSDcfg = seperate("Utah Teapot ", " -S 754680458", SDARGUMENTS.cfg, 5);
  var argrowsSDsteps = seperate("Utah Teapot ", " -S 754680458", SDARGUMENTS.steps, 5);
  var argrowsSDsampler = seperate("Utah Teapot ", " -S 754680458", SDARGUMENTS.sampler, 5);
  var basemodrows = seperate("", "", BASEMODIFICATIONS, 5);
  var basemodrowsSD = seperate("", " -s 15", BASEMODIFICATIONS_sd, 5);

  if(props.gen === "sd")
  {
    prompthead = "";
    prompttail = " of a Utah Teapot"
  }

  var physicalmedia = seperate(prompthead, prompttail, PHYSICALMEDIUMS.physicalmediums, 5);
  var fabricmedia = seperate(prompthead, prompttail, PHYSICALMEDIUMS.fabricmediums, 5);
  var photographicmedia = seperate(prompthead, prompttail, PHYSICALMEDIUMS.photographicmediums, 5);
  var digitalmedia = seperate(prompthead, prompttail, PHYSICALMEDIUMS.digitalmediums, 5);

  //physical mediums
  var drawingtypes = seperate(prompthead, prompttail, PHYSICALMEDIUMS.drawingtypes, 5);
  var pencilmediums = seperate(prompthead, prompttail, PHYSICALMEDIUMS.pencilmediums, 5);
  var penmediums = seperate(prompthead, prompttail, PHYSICALMEDIUMS.penmediums, 5);
  var crayonchalkmediums = seperate(prompthead, prompttail, PHYSICALMEDIUMS.crayonchalkmediums, 5);
  var paintmediums = seperate(prompthead, prompttail, PHYSICALMEDIUMS.paintmediums, 5);
  var textmediums = seperate(prompthead, prompttail, PHYSICALMEDIUMS.textmediums, 5);
  var printedmediums = seperate(prompthead, prompttail, PHYSICALMEDIUMS.printedmediums, 5);

  if(props.gen === "sd")
  {
    prompthead = "Utah teapot made of ";
    prompttail = "";
  }

  //MATERIALS
  var materials = seperate("Utah Teapot made of ", "", MATERIALS.materials, 5);
  var gemsStones = seperate("Utah Teapot made of ", "", MATERIALS.gemsStones, 5);
  var metals = seperate("Utah Teapot made of ", "", MATERIALS.metals, 5);
  var woods = seperate("Utah Teapot made of ", "", MATERIALS.woods, 5);
  var plasticFoams = seperate("Utah Teapot made of ", "", MATERIALS.plasticFoams, 5);
  var wax = seperate("Utah Teapot made of ", "", MATERIALS.wax, 5);
  var rubber = seperate("Utah Teapot made of ", "", MATERIALS.rubber, 5);
  var gelSponge = seperate("Utah Teapot made of ", "", MATERIALS.gelSponge, 5);
  var waterIce = seperate("Utah Teapot made of ", "", MATERIALS.waterIce, 5);
  var liquids = seperate("Utah Teapot made of ", "", MATERIALS.liquids, 5);
  var gas = seperate("Utah Teapot made of ", "", MATERIALS.gas, 5);
  var organic = seperate("Utah Teapot made of ", "", MATERIALS.organic, 5);
  var food = seperate("Utah Teapot made of ", "", MATERIALS.food, 5);
  var energy = seperate("Utah Teapot made of ", "", MATERIALS.energy, 5);
  var plantFungi = seperate("Utah Teapot made of ", "", MATERIALS.plantFungi, 5);
  var instruments = seperate("Utah Teapot made of ", "", MATERIALS.instruments, 5);

  
  prompthead = "Utah Teapot, Digital Art, ";
  prompttail = "";
  if(props.gen === "sd")
  {
    prompthead = "";
    prompttail = ", photo of a Utah Teapot"
  }
  //Camera
  var resolutions = seperate(prompthead, prompttail, CAMERA.resolution, 5);
  if(props.gen !== "sd")
  {
    prompthead = "A photo of a Utah Teapot, "
  }
  var resolutions2 = seperate(prompthead, prompttail, CAMERA.resolution2, 5);
  var perspectives = seperate(prompthead, prompttail, CAMERA.perspectives, 5);
  var lens = seperate(prompthead, prompttail, CAMERA.lens, 5);
  var Scenes = seperate(prompthead, prompttail, CAMERA.scenes, 5);
  var filmtypes = seperate(prompthead, prompttail, CAMERA.filmtypes, 5);
  var camerasettings = seperate(prompthead, prompttail, CAMERA.camerasettings, 5);
  var othercamera = seperate(prompthead, prompttail, CAMERA.othercamera, 5);

  prompthead = "Utah Teapot, Digital Art, ";
  prompttail = "";
  if(props.gen === "sd")
  {
    prompthead = "";
    prompttail = ", photo of a Utah Teapot"
  }
  var postprocess = seperate(prompthead, prompttail, POSTPROCESSING.postprocessing, 5);
  var reflections = seperate(prompthead, prompttail, POSTPROCESSING.reflections, 5);
  var ppmisc = seperate(prompthead, prompttail, POSTPROCESSING.misc, 5);
  if(props.gen !== "sd")
  {
    prompthead = "Utah Teapot,  ";
  }
  var lighting = seperate(prompthead, prompttail, LDD.lighting, 5);
  var dimensionality = seperate(prompthead, prompttail, LDD.dimensionality, 5);

  prompthead = "Utah Teapot,  ";
  prompttail = " Render";
  if(props.gen === "sd")
  {
    prompthead = "";
    prompttail = ", photo of a Utah Teapot"
  }
  var renderers = seperate(prompthead, prompttail, STYLES.renderers, 5);
  if(props.gen !== "sd")
  {
    prompttail = "";
  }
  var abstraction = seperate(prompthead, prompttail, STYLES.abstraction, 5);
  var photosites = seperate(prompthead, prompttail, STYLES.photosites, 5);
  var complexity = seperate(prompthead, prompttail, STYLES.complexity, 5);
  if(props.gen !== "sd")
  {
    prompthead = "A photo of the Utah Teapot,  ";
  }
  var timeframes = seperate(prompthead, prompttail, STYLES.timeframes, 5);
  if(props.gen !== "sd")
  {
    prompthead = "Utah Teapot in the style of ";
  }
  var punkstyles = seperate(prompthead, prompttail, STYLES.punkstyles, 5);
  var wavestyles = seperate(prompthead, prompttail, STYLES.wavestyles, 5);



  //ARTISTS
  prompthead = "Utah Teapot,  ";
  prompttail = "";
  if(props.gen === "sd")
  {
    prompthead = "";
    prompttail = ", photo of a Utah Teapot"
  }
  var Academism = seperate(prompthead, prompttail, ARTISTS.Academism, 5);
  var ArtsandCrafts = seperate(prompthead, prompttail, ARTISTS.ArtsandCrafts, 5);
  var ArtNouveau = seperate(prompthead, prompttail, ARTISTS.ArtNouveau, 5);

  var Baroque = seperate(prompthead, prompttail, ARTISTS.Baroque, 5);
  var Bauhaus = seperate(prompthead, prompttail, ARTISTS.Bauhaus, 5);
  var BayArea = seperate(prompthead, prompttail, ARTISTS.BayArea, 5);

  var Environmentalism = seperate(prompthead, prompttail, ARTISTS.Environmentalism, 5);
  var Expressionism = seperate(prompthead, prompttail, ARTISTS.Expressionism, 5);
  var Gothic = seperate(prompthead, prompttail, ARTISTS.Gothic, 5);
  var Impressionist = seperate(prompthead, prompttail, ARTISTS.Impressionist, 5);
  var InstallationArt = seperate(prompthead, prompttail, ARTISTS.InstallationArt, 5);
  var Luminism = seperate(prompthead, prompttail, ARTISTS.Luminism, 5);
  var Modernism = seperate(prompthead, prompttail, ARTISTS.Modernism, 5);
  var Photorealism = seperate(prompthead, prompttail, ARTISTS.Photorealism, 5);
  var PostImpressionist = seperate(prompthead, prompttail, ARTISTS.PostImpressionist, 5);
  var PopArt = seperate(prompthead, prompttail, ARTISTS.PopArt, 5);
  var Postmodern = seperate(prompthead, prompttail, ARTISTS.Postmodern, 5);
  var Realist = seperate(prompthead, prompttail, ARTISTS.Realist, 5);
  var Romantisism = seperate(prompthead, prompttail, ARTISTS.Romantisism, 5);
  var ScienceFiction = seperate(prompthead, prompttail, ARTISTS.ScienceFiction, 5);
  var StreetArt = seperate(prompthead, prompttail, ARTISTS.StreetArt, 5);
  var Surrealist = seperate(prompthead, prompttail, ARTISTS.Surrealist, 5);
  var Symbolism = seperate(prompthead, prompttail, ARTISTS.Symbolism, 5);
  var HudsonRiver = seperate(prompthead, prompttail, ARTISTS.HudsonRiver, 5);
  var VisionaryArt = seperate(prompthead, prompttail, ARTISTS.VisionaryArt, 5);
  var Futurism = seperate(prompthead, prompttail, ARTISTS.Futurism, 5);
  var Renaissance = seperate(prompthead, prompttail, ARTISTS.Renaissance, 5);
  var LowBrow = seperate(prompthead, prompttail, ARTISTS.Lowbrow, 5);
  var SocialRealism = seperate(prompthead, prompttail, ARTISTS.SocialRealism, 5);
  var Landscape = seperate(prompthead, prompttail, ARTISTS.Landscape, 5);
  var Orientalism = seperate(prompthead, prompttail, ARTISTS.Orientalism, 5);
  var Psycadelic = seperate(prompthead, prompttail, ARTISTS.Psycadelic, 5);
  var HeiseiEstheticism = seperate(prompthead, prompttail, ARTISTS.HeiseiEstheticism, 5);
  var Contemporary = seperate(prompthead, prompttail, ARTISTS.Contemporary, 5);
  var Naturalism = seperate(prompthead, prompttail, ARTISTS.Naturalism, 5);
  var Ukiyoe = seperate(prompthead, prompttail, ARTISTS.ukiyoe, 5);
  var Rococo = seperate(prompthead, prompttail, ARTISTS.Rococo, 5);
  var ReligiousArt = seperate(prompthead, prompttail, ARTISTS.ReligiousArt, 5);

  var artistVideoGames = seperate(prompthead, prompttail, ARTISTS.artistVideoGames, 5);
  var artistartstation = seperate(prompthead, prompttail, ARTISTS.artistartstation, 5);
  
  var artistIllustrator = seperate(prompthead, prompttail, ARTISTS.artistIllustrator, 5);
  var nartistFilmDirector = seperate(prompthead, prompttail, ARTISTS.nartistFilmDirector, 5);
  var nartistPhotography = seperate(prompthead, prompttail, ARTISTS.nartistPhotography, 5);
  var Mannerism = seperate(prompthead, prompttail, ARTISTS.Mannerism, 5);
  var nartistSculpter = seperate(prompthead, prompttail, ARTISTS.nartistSculpter, 5);
  var nartistMusician = seperate(prompthead, prompttail, ARTISTS.nartistMusician, 5);
  var nartistArchitect = seperate(prompthead, prompttail, ARTISTS.nartistArchitect, 5);
  var nartistEtcher = seperate(prompthead, prompttail, ARTISTS.nartistEtcher, 5);
  var nartistAnimator = seperate(prompthead, prompttail, ARTISTS.nartistAnimator, 5);
  var nartistWriter = seperate(prompthead, prompttail, ARTISTS.nartistWriter, 5);
  if(props.gen === "sd")
  {
    prompthead = "";
    prompttail = ", manga of a Utah Teapot"
  }
  var artistComicManga = seperate(prompthead, prompttail, ARTISTS.artistComicManga, 5);

  
  prompthead = "Utah Teapot,  ";
  prompttail = "";
  if(props.gen === "sd")
  {
    prompthead = "";
    prompttail = " color, photo of a Utah Teapot"
  }
  //COLORS
  var colors = seperate(prompthead, prompttail, COLORS.colors, 5);
  var colorpalletes = seperate(prompthead, prompttail, COLORS.colorpalletes, 5);

//REF MEDIA
if(props.gen === "sd")
  {
    prompthead = "";
    prompttail = " style, Utah Teapot"
  }
  
  var refvideogames = seperate(prompthead, prompttail, REFERENCEMEDIA.videogames, 5);
  prompthead = "Utah Teapot, anime, ";
  prompttail = "";
  if(props.gen === "sd")
  {
    prompthead = "";
    prompttail = " style, anime of a Utah Teapot"
  }
  
  var animestudios = seperate(prompthead, prompttail, REFERENCEMEDIA.animestudios, 5);
  
  prompthead = "Utah Teapot, ";
  prompttail = "";
  if(props.gen === "sd")
  {
    prompthead = "";
    prompttail = " photo of a Utah Teapot"
  }
  //Intangibles
  var emotions = seperate(prompthead, prompttail, INTANGIBLES.emotions, 5);
  var concepts = seperate(prompthead, prompttail, INTANGIBLES.concepts, 5);
  var symbols = seperate(prompthead, prompttail, INTANGIBLES.symbols, 5);
  var numbers = seperate(prompthead, prompttail, INTANGIBLES.numbers, 5);
  var numbersystem = seperate(prompthead, prompttail, INTANGIBLES.numbersystem, 5);

  return (
    <div>
      <Tabs defaultActiveKey='base' id='uncontrolled-tab-example' className='mb-3'>
        <Tab eventKey='base' title='Base'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>

            {props.gen === "mj" ? <Accordion.Item eventKey='0'>
              <Accordion.Header>Aspect Ratio</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Aspect Ratio' desc='Different aspect ratios.'></RowStyleDiv>
                  {aspectrows}
                </Container>
              </Accordion.Body>
            </Accordion.Item> : <div></div>}

            {props.gen === "sd" ? <Accordion.Item eventKey='0'>
              <Accordion.Header>Aspect Ratio</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Aspect Ratio' desc='Different aspect ratios. Replace "aspect" with correct -W and -H arguments.'></RowStyleDiv>
                  {aspectrowsSD}
                </Container>
              </Accordion.Body>
            </Accordion.Item> : <div></div>}

{props.gen === "mj" ? <Accordion.Item eventKey='1'>
              <Accordion.Header>Prompt Arguments</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Prompt Arguments' desc='MJ specific arguments.'></RowStyleDiv>
                  {argrows}
                </Container>
              </Accordion.Body>
            </Accordion.Item> : <div></div>}

            {props.gen === "sd" ? <Accordion.Item eventKey='1'>
              <Accordion.Header>Prompt Arguments</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='CFG' desc='Stable Diffusion specific arguments.'></RowStyleDiv>
                  {argrowsSDcfg}
                  <RowStyleDiv title='steps' desc='Stable Diffusion specific arguments.'></RowStyleDiv>
                  {argrowsSDsteps}
                  <RowStyleDiv title='sampler' desc='Stable Diffusion specific arguments.'></RowStyleDiv>
                  {argrowsSDsampler}
                </Container>
              </Accordion.Body>
            </Accordion.Item> : <div></div>}
            
            {props.gen === "mj" ? <Accordion.Item eventKey='2'>
              <Accordion.Header>Modifications</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Base modifications' desc='Modifications of the base prompt used in the following site.'></RowStyleDiv>
                  {basemodrows}
                </Container>
              </Accordion.Body>
            </Accordion.Item> : <div></div>}
            
            {props.gen === "sd" ? <Accordion.Item eventKey='2'>
              <Accordion.Header>Modifications</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Base modifications' desc='Modifications of the base prompt used in the following site. (STABLE DIFFUSION)'></RowStyleDiv>
                  {basemodrowsSD}
                </Container>
              </Accordion.Body>
            </Accordion.Item> : <div></div>}
          </Accordion>
        </Tab>

        <Tab eventKey='theme' title='Movements, Styles, Themes'>
          <RowStyleDiv title='See "Traditional Artists and Movements for more."' desc=''></RowStyleDiv>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Timeframes</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Timeframes' desc='Different decades and eras.'></RowStyleDiv>
                  {timeframes}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Abstraction/Realism</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Abstraction/Realism' desc='Levels of abstraction and realism'></RowStyleDiv>
                  {abstraction}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>Complexity</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Complexity' desc='Levels of complexity'></RowStyleDiv>
                  {complexity}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3'>
              <Accordion.Header>-Punk Styles</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='-Punk Styles' desc='Most popular are steampunk and cyberpunk.'></RowStyleDiv>
                  {punkstyles}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='4'>
              <Accordion.Header>-Wave Styles</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='-Wave Styles' desc='Most popular are synthwave and vaporwave.'></RowStyleDiv>
                  {wavestyles}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='med' title='Mediums'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Drawing Types</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Drawing Types' desc='Drawing Types'></RowStyleDiv>
                  {drawingtypes}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Pencil Mediums</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Pencil Mediums' desc='Pencil Mediums'></RowStyleDiv>
                  {pencilmediums}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>Pen Mediums</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Pen Mediums' desc='Pen Mediums'></RowStyleDiv>
                  {penmediums}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3'>
              <Accordion.Header>Crayon and Chalk Mediums</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Crayon and Chalk Mediums' desc='Crayon and Chalk Mediums'></RowStyleDiv>
                  {crayonchalkmediums}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='4'>
              <Accordion.Header>Paint Mediums</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Paint Mediums' desc='Paint Mediums'></RowStyleDiv>
                  {paintmediums}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='5'>
              <Accordion.Header>Text Mediums</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Text Mediums' desc='Text Mediums'></RowStyleDiv>
                  {textmediums}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='6'>
              <Accordion.Header>Printed Mediums</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Printed Mediums' desc='Printed Mediums'></RowStyleDiv>
                  {printedmediums}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='7'>
              <Accordion.Header>Other Physical Mediums</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Other Physical Mediums' desc='Other Physical Mediums that dont fit into the above catagory'></RowStyleDiv>
                  {physicalmedia}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='8'>
              <Accordion.Header>Fabric Mediums</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Fabric Mediums' desc='Physical things that are knitted, sewn or otherwise made from fabric.'></RowStyleDiv>
                  {fabricmedia}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='9'>
              <Accordion.Header>Photographic Mediums</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Photographic Mediums' desc='Things that are or appear to be photographed.'></RowStyleDiv>
                  {photographicmedia}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='10'>
              <Accordion.Header>Digital Mediums</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Digital Mediums' desc='Things that are drawn or generated digitally.'></RowStyleDiv>
                  {digitalmedia}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='mat' title='Materials'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Stone/Gemstones</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Stone/Gemstones' desc='Materials that the object is physically made out of, stone, concrete, gemstones etc..'></RowStyleDiv>
                  {gemsStones}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Metals</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Metals' desc='Materials that the object is physically made out of, metals, alloys etc..'></RowStyleDiv>
                  {metals}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>Wood</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Wood' desc='Materials that the object is physically made out of, wood, plant, plywood etc..'></RowStyleDiv>
                  {woods}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3'>
              <Accordion.Header>Plastic</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Plastic' desc='Materials that the object is physically made out of, plastic, plastic products etc..'></RowStyleDiv>
                  {plasticFoams}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='4'>
              <Accordion.Header>Gel / Sponge</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Gel / Sponge' desc='Materials that the object is physically made out of Gel or sponge etc..'></RowStyleDiv>
                  {gelSponge}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='5'>
              <Accordion.Header>Rubber</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Rubber' desc='Materials that the object is physically made out of rubber, plastic products etc..'></RowStyleDiv>
                  {rubber}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='6'>
              <Accordion.Header>Wax</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Wax' desc='Materials that the object is physically made out of, wax, wax products etc..'></RowStyleDiv>
                  {wax}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='7'>
              <Accordion.Header>Water / Ice</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Water / Ice' desc='Materials that the object is physically made out of, water/ice etc..'></RowStyleDiv>
                  {waterIce}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='8'>
              <Accordion.Header>Liquids</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Liquids' desc='Materials that the object is physically made out of liquids etc..'></RowStyleDiv>
                  {liquids}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='9'>
              <Accordion.Header>Gas</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Gas' desc='Materials that the object is physically made out of gas etc..'></RowStyleDiv>
                  {gas}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='10'>
              <Accordion.Header>Organic</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Organic' desc='Materials that the object is physically made out of organic materials, etc..'></RowStyleDiv>
                  {organic}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='11'>
              <Accordion.Header>Energy</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Energy' desc='Materials that the object is physically made out of energy, fire, plasma,  etc..'></RowStyleDiv>
                  {energy}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='12'>
              <Accordion.Header>Food</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Food' desc='Materials that the object is physically made out of food, food products, etc..'></RowStyleDiv>
                  {food}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='13'>
              <Accordion.Header>Plants and Fungi</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Plants and Fungi' desc='Materials that the object is physically made out of plants, fungi, similar products, etc..'></RowStyleDiv>
                  {plantFungi}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='14'>
              <Accordion.Header>Musical Instruments</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Musical Instruments' desc='Materials that the object is physically made out of musical instruments, similar products, etc..'></RowStyleDiv>
                  {instruments}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='15'>
              <Accordion.Header>Misc Materials</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Misc Materials' desc='Materials that the object is physically made out of.'></RowStyleDiv>
                  {materials}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='cam' title='Camera Properties and effects'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Resolution</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Resolution' desc='Resolution Keywords'></RowStyleDiv>
                  {resolutions}
                  {resolutions2}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Camera Lengths and Views</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Camera Lengths and Views' desc='Camera focal lengths and camera angles.'></RowStyleDiv>
                  {lens}
                  {perspectives}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>Camera Scenes</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Camera Scenes' desc='Photography words and types of photography.'></RowStyleDiv>
                  {Scenes}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3'>
              <Accordion.Header>Camera Film Types</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Camera Film Types' desc='Types of film and Cameras'></RowStyleDiv>
                  {filmtypes}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='4'>
              <Accordion.Header>Camera Settings</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Camera Settings' desc='Settings on the camera itself.'></RowStyleDiv>
                  {camerasettings}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='5'>
              <Accordion.Header>Other Camera words</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Other Camera words' desc='Other Camera words'></RowStyleDiv>
                  {othercamera}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='pp' title='Post-Processing'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Post Processing</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Post Processing' desc='Common post processing effects like bloom.'></RowStyleDiv>
                  {postprocess}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Reflections</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Reflections' desc='Reflection based effects'></RowStyleDiv>
                  {reflections}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>Misc Effects</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Misc Effects' desc='Unsorted Post-Processing effects.'></RowStyleDiv>
                  {ppmisc}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='ld' title='Lighting, Dimensionality'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Types of Lights</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Types of Lights' desc='Different types of physical lights.'></RowStyleDiv>
                  {lighting}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Dimensionality</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Dimensionality' desc='Dimension related keywords.'></RowStyleDiv>
                  {dimensionality}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='art' title='All Artists'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Traditional Artists and Movements</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='' desc='Artists falling under multiple movements are sorted by whatever I see first, dm me on discord if you think it should be changed.'></RowStyleDiv>
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

                  <RowStyleDiv title='Contemporary' desc='Contemporary art is the art of today, produced in the second half of the 20th century or in the 21st century.'></RowStyleDiv>
                  {Contemporary}

                  <RowStyleDiv
                    title='Environmentalism'
                    desc='Environmental artists seek to investigate our human relationship with the environment through embedding their artistic practice within it. This changes the way we think about the site of artistic production; as opposed to using the artists studio as the sole location in which to create, Environmental artists engage the natural world in a much more active and immediate way either by working in new ways outside, or by bringing natural materials into new settings.'></RowStyleDiv>
                  {Environmentalism}

                  <RowStyleDiv
                    title='Expressionism'
                    desc='Art was now meant to come forth from within the artist, rather than from a depiction of the external visual world, and the standard for assessing the quality of a work of art became the character of the artists feelings rather than an analysis of the composition.'></RowStyleDiv>
                  {Expressionism}

                  <RowStyleDiv
                    title='Futurism'
                    desc='A key focus of the Futurists was the depiction of movement, or dynamism. The group developed a number of novel techniques to express speed and motion, including blurring, repetition, and the use of lines of force. This last method was adapted from the work of the Cubists and the inclusion of such lines became a feature of Futurist images.'></RowStyleDiv>
                  {Futurism}

                  <RowStyleDiv
                    title='Gothic'
                    desc='The innovations of Gothic architecture were premised on the ideas developed by Abbot Suger that earthly light contained divine light and that the physical edifice of the church needed to make this concept tangible. Revolutionary transformations of flying buttresses and groin vaulting allowed the inclusion of more stained glass windows in the church’s structure, thus transforming the everyday sunlight into a prism of colors that danced over the surfaces of the stone and reminded worshippers of God’s divine presence.'></RowStyleDiv>
                  {Gothic}
                  <RowStyleDiv title='Heisei Estheticism' desc=' a style of art encompassing themes of darkness, bondage, metamorphosis, love and death.'></RowStyleDiv>
                  {HeiseiEstheticism}

                  <RowStyleDiv
                    title='Impressionist'
                    desc='The Impressionists tried to get down on canvas an “impression” of how a landscape, thing, or person appeared to them at a certain moment in time.'></RowStyleDiv>
                  {Impressionist}

                  <RowStyleDiv
                    title='Installation Art'
                    desc='Installation art is an artistic genre of three-dimensional works that are often site-specific and designed to transform the perception of a space.'></RowStyleDiv>
                  {InstallationArt}

                  <RowStyleDiv
                    title='Landscape'
                    desc='The English Landscape Movement includes gently rolling hills and water, ideally planned against a back drop of forest with groupings of trees in the background. In the 19th century the movement grew to include the addition of shrubs and blooming perennials sweeping in a painterly fashion with winding gravel pathways.'></RowStyleDiv>
                  {Landscape}

                  <RowStyleDiv
                    title='Low Brow'
                    desc='Lowbrow Pop Surrealism was a style of art that was heavily inspired by the popular culture of the 1960s and 1970s in America. Commonly referred to as a “retro” style, this movement was most commonly seen in the form of paintings, digital art, sculpture, collage, and even toys.'></RowStyleDiv>
                  {LowBrow}

                  <RowStyleDiv
                    title='Luminism'
                    desc=' Luminist paintings do not tend to depict nature as grand and imposing, nor do they strive to convey a sense of spectacular, awe-inspiring sublimity. Instead, Luminist paintings with their smaller size evoke a quiet spirituality based on closely observed natural phenomena, especially the quality of light.'></RowStyleDiv>
                  {Luminism}

                  <RowStyleDiv
                    title='Naturalism'
                    desc='Naturalism is often equated with Realism, but it was only defined some decades later - experiencing its heyday during the 1870-80s - and was more concerned than the older movement with a hyperreal visual compositional precision; and with integrating the human figure into an enveloping landscape or scenario.'></RowStyleDiv>
                  {Naturalism}

                  <RowStyleDiv
                    title='Mannarism'
                    desc='A key element of Mannerism was the use of figurative serpentinata, or "serpentine figure" in depicting human bodies. With extended limbs, elongated forms, and a fluid S-shaped grace, these figures presented an otherworldliness that departed from classical renditions.'></RowStyleDiv>
                  {Mannerism}

                  <RowStyleDiv
                    title='Modernism/Modern Art'
                    desc='Modernism refers to a global movement in society and culture that from the early decades of the twentieth century sought a new alignment with the experience and values of modern industrial life. Building on late nineteenth-century precedents, artists around the world used new imagery, materials and techniques to create artworks that they felt better reflected the realities and hopes of modern societies.'></RowStyleDiv>
                  {Modernism}

                  <RowStyleDiv
                    title='Orientalism'
                    desc='Populating their paintings with snake charmers, veiled women, and courtesans, Orientalist artists created and disseminated fantasy portrayals of the exotic East for European viewers. Although earlier examples exist, Orientalism primarily refers to Western (particularly English and French) painting, architecture and decorative arts of the 19th century that utilize scenes, settings, and motifs drawn from a range of countries including Turkey, Egypt, India, China, and Algeria.'></RowStyleDiv>
                  {Orientalism}

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
                    title='Psychedelic Art'
                    desc='In common parlance "psychedelic art" refers above all to the art movement of the late 1960s counterculture, featuring highly distorted or surreal visuals, bright colors and full spectrums and animation (including cartoons) to evoke, convey, or enhance psychedelic experiences.'></RowStyleDiv>
                  {Psycadelic}

                  <RowStyleDiv
                    title='Realist'
                    desc='Realist painters replaced the idealistic images and literary conceits of traditional art with real-life events, giving the margins of society similar weight to grand history paintings and allegories.'></RowStyleDiv>
                  {Realist}

                  <RowStyleDiv
                    title='Religious Art'
                    desc='Religious art is artistic imagery using religious inspiration and motifs and is often intended to uplift the mind to the spiritual. Sacred art involves the ritual and cultic practices and practical and operative aspects of the path of the spiritual realization within the artists religious tradition.'></RowStyleDiv>
                  {ReligiousArt}

                  <RowStyleDiv
                    title='Renaissance'
                    desc='Renaissance art, painting, sculpture, architecture, music, and literature produced during the 14th, 15th, and 16th centuries in Europe under the combined influences of an increased awareness of nature, a revival of classical learning, and a more individualistic view of man.'></RowStyleDiv>
                  {Renaissance}

                  <RowStyleDiv
                    title='Rococo'
                    desc='Genre paintings were popular ways to represent the Rococo periods bold and joyous lust for life. This included fete galante, or works denoting outdoor pastimes, erotic paintings alive with a sense of whimsical hedonism, Arcadian landscapes, and the "celebrity" portrait, which positioned ordinary people in the roles of notable historical or allegorical characters.'></RowStyleDiv>
                  {Rococo}

                  <RowStyleDiv
                    title='Romantisism'
                    desc='Romanticism embraced individuality and subjectivity to counteract the excessive insistence on logical thought. Artists began exploring various emotional and psychological states as well as moods. The preoccupation with the hero and the genius translated to new views of the artist as a brilliant creator who was unburdened by academic dictate and tastes.'></RowStyleDiv>
                  {Romantisism}

                  <RowStyleDiv title='Science Fiction' desc=''></RowStyleDiv>
                  {ScienceFiction}
                  <RowStyleDiv
                    title='Social Realism'
                    desc='Social Realism, trend in American art originating in about 1930 and referring in its narrow sense to paintings treating themes of social protest in a naturalistic or quasi-expressionist manner. In a broader sense, the term is sometimes taken to include the more general renderings of American life usually categorized as American Scene painting and Regionalism, which may or may not manifest socially critical comment.'></RowStyleDiv>
                  {SocialRealism}

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
                    title='Ukiyo-e'
                    desc='Produced in their many thousands and hugely popular during the Edo period (1615 – 1868), these colourful woodblock prints, known as ukiyo-e, depicted scenes from everyday Japan. Ukiyo-e literally means pictures of the floating world.'></RowStyleDiv>
                  {Ukiyoe}

                  <RowStyleDiv
                    title='Visionary Art'
                    desc='Visionary art isnt so much a movement as it is a theme. The style of the individual artists will vary radically, but their common theme is their attempt to portray the world beyond physical sight and to overlap mystical and spiritual ideas. Visionary art purports to transcend the physical and scientific world and give the audience a virtual vision (hence the name Visionary Art) of what the world might look like if we could see spiritual and mystical things in our every day life. The type of mystical energies portrayed in Visionary Art varies from artist to artist, but the four elements (water, fire, earth and wind), love, lust, holy, unholy, positive and negative forces are all reasonably common. '></RowStyleDiv>
                  {VisionaryArt}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Modern Style Artists</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Artstation/Deviantart' desc='Also Artsy'></RowStyleDiv>
                  {artistartstation}

                  <RowStyleDiv title='Comic/Manga' desc=''></RowStyleDiv>
                  {artistComicManga}

                  <RowStyleDiv title='Illustrator' desc='A person who draws or creates pictures for magazines, books, advertising, etc. Sort of a catch-all'></RowStyleDiv>
                  {artistIllustrator}
                  <RowStyleDiv title='Animator' desc='Animators'></RowStyleDiv>
                  {nartistAnimator}
                  <RowStyleDiv title='Videogame Art' desc='Artists and art from video games'></RowStyleDiv>
                  {artistVideoGames}

                  <RowStyleDiv title='Unsorted Modern Artists' desc='Unsorted Artists'></RowStyleDiv>
                  <Row>
                    <TeapotCard img={images["bobbyerley.png"]} prompt='Utah Teapot by Bob Byerley' />
                    <TeapotCard img={images["carlholsoe.png"]} prompt='Utah Teapot by Carl Holsøe' />
                    <TeapotCard img={images["codexseraphinianus.png"]} prompt='Utah Teapot by Codex Seraphinianus' />
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>Non-Painting Artists</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Scultors' desc='Making sculptures.'></RowStyleDiv>
                  {nartistSculpter}

                  <RowStyleDiv title='Architects' desc='Buildings'></RowStyleDiv>
                  {nartistArchitect}

                  <RowStyleDiv title='Photographers' desc='Temp category'></RowStyleDiv>
                  {nartistPhotography}

                  <RowStyleDiv title='Writers' desc='Writers'></RowStyleDiv>
                  {nartistWriter}

                  <RowStyleDiv title='Musicians' desc='Musicians'></RowStyleDiv>
                  {nartistMusician}

                  <RowStyleDiv title='Film Directors' desc='Film, Animation, Movies, etc'></RowStyleDiv>
                  {nartistFilmDirector}

                  <RowStyleDiv title='Designers' desc='Temp category'></RowStyleDiv>
                  <Row>
                    <TeapotCard img={images["charleseames.png"]} prompt='Utah Teapot by Charles Eames' />
                  </Row>

                  <RowStyleDiv title='Etching' desc='Temp category'></RowStyleDiv>
                  <Row>{nartistEtcher}</Row>

                  <RowStyleDiv title='Misc Artists' desc='Temp category'></RowStyleDiv>
                  <Row>
                    <TeapotCard img={images["benoitbmandelbrot.png"]} prompt='Utah Teapot by Benoit B. Mandelbrot' />
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='web' title='Art Websites and Game Renderers'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Rendering Engines</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Rendering Engines' desc='Rendering engines, game engines and 3d modeling engines.'></RowStyleDiv>
                  {renderers}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Photo sites</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Photo sites' desc='Photosharing and Art sharing sites. Also includes image repositories.'></RowStyleDiv>
                  {photosites}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='int' title='Intangible Modifiers'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Emotions and Qualities</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Emotions and Qualities' desc='Emotions'></RowStyleDiv>
                  {emotions}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Concepts</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Concepts' desc='Sizes, and other concepts'></RowStyleDiv>
                  {concepts}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2'>
              <Accordion.Header>Symbols</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Symbols' desc='Symbolism'></RowStyleDiv>
                  {symbols}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3'>
              <Accordion.Header>Numbers</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Numbers' desc='Latin Number system'></RowStyleDiv>
                  {numbers}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='4'>
              <Accordion.Header>Number Systems</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Number Systems' desc='Base-systems and similar'></RowStyleDiv>
                  {numbersystem}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='col' title='Colors and Color Palletes'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Basic Colors</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Basic Colors' desc='Different hues and shades of colors'></RowStyleDiv>
                  {colors}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Color Palletes</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Color Palletes' desc='More advanced combos of colors'></RowStyleDiv>
                  {colorpalletes}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='sha' title='Shapes and Forms'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Shapes and Forms</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Shapes and Forms' desc='Shapes and Forms'></RowStyleDiv>
                  <Row>WIP</Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey='ref' title='Referencing Media'>
          <Accordion defaultActiveKey='0' className='accordCenter' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Games</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Games' desc='Invoking names of famous games.'></RowStyleDiv>
                  {refvideogames}
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Anime Studios</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <RowStyleDiv title='Anime Studios' desc='Invoking names of famous anime studios.'></RowStyleDiv>
                  {animestudios}
                </Container>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TeaAccordian;
