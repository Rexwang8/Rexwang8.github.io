import { Navbar, Card, Modal, Container, Button, Accordion, Nav, NavDropdown, Breadcrumb, Row, Col, CardImg } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";
import { Link } from "react-router-dom";

import TeapotCardLarge from "../components/teapotCardLarge";
import RowStyleDiv from "../components/rowdiv";

import { COLORS, COLORS_DESC, GROUP_DESCRIPTIONS, GROUP_TITLES, INTANGIBLES, INTANGIBLES_DESC, REFERENCEMEDIA, REFERENCEMEDIA_DESC, STYLES, STYLES_DESC, MATERIALS, MATERIALS_DESC, PHYSICALMEDIUMS, PHYSICALMEDIUMS_DESC, CAMERA, CAMERA_DESC, POSTPROCESSING, POSTPROCESSING_DESC, LDD, LDD_DESC, ARTISTS, ARTISTS_DESC } from "../data/allkeys.jsx";
import { useState } from "react";

import ModifierCard from "../components/ModifierCard";
import ModifierShelf from "../components/ModifierShelf";
import ModifierNavbar from "../components/ModifierNavbar";
import TeapotFooter from "../components/teapotfooter";

//#region functions

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

//take an dictionary of images and return an array of names from the keys
function getNames(images) {
  let names = [];
  Object.keys(images).forEach((key) => {
    names.push(key);
  }
  );
  return names;
}

//function that takes a list of names, appends .png to the end and returns an array of ModifierCard objects
function expand(group, names, descs, thumbnailstr, images_mj, images_sd, handleShow, handleClose, statesModals, isMobile,p_start, p_end, sd_start, sd_end)
{
  let cards = [];
  let k = Object.keys(names).sort();
  for (var i = 0; i < Math.ceil(k.length); i += 5) {
    cards.push(
<ModifierShelf
id0 = {k[i] + ".png"}
mj0 = {images_mj[k[i] + ".png"]}
sd0 = {images_sd[k[i] + ".png"]}
show0 = {statesModals[k[i] + ".png"]}
name0 = {names[k[i]]}
desc0 = {descs[k[i]]}
mjprompt0 = {p_start + names[k[i]] + p_end}
sdprompt0 = {sd_start + names[k[i]] + sd_end}

id1={k[i + 1] + ".png"}
mj1={images_mj[k[i + 1] + ".png"]}
sd1={images_sd[k[i + 1] + ".png"]}
show1={statesModals[k[i + 1] + ".png"]}
name1 = {names[k[i + 1]]}
desc1 = {descs[k[i + 1]]}
mjprompt1 = {p_start + names[k[i + 1]] + p_end}
sdprompt1 = {sd_start + names[k[i + 1]] + sd_end}

id2={k[i + 2] + ".png"}
mj2={images_mj[k[i + 2] + ".png"]}
sd2={images_sd[k[i + 2] + ".png"]}
show2={statesModals[k[i + 2] + ".png"]}
name2 = {names[k[i + 2]]}
desc2 = {descs[k[i + 2]]}
mjprompt2 = {p_start + names[k[i + 2]] + p_end}
sdprompt2 = {sd_start + names[k[i + 2]] + sd_end}

id3={k[i + 3] + ".png"}
mj3={images_mj[k[i + 3] + ".png"]}
sd3={images_sd[k[i + 3] + ".png"]}
show3={statesModals[k[i + 3] + ".png"]}
name3 = {names[k[i + 3]]}
desc3 = {descs[k[i + 3]]}
mjprompt3 = {p_start + names[k[i + 3]] + p_end}
sdprompt3 = {sd_start + names[k[i + 3]] + sd_end}

id4={k[i + 4] + ".png"}
mj4={images_mj[k[i + 4] + ".png"]}
sd4={images_sd[k[i + 4] + ".png"]}
show4={statesModals[k[i + 4] + ".png"]}
name4 = {names[k[i + 4]]}
desc4 = {descs[k[i + 4]]}
mjprompt4 = {p_start + names[k[i + 4]] + p_end}
sdprompt4 = {sd_start + names[k[i + 4]] + sd_end}

handleShow = {handleShow}
handleClose = {handleClose}
isMobile = {isMobile}
group = {group}
thumbnailstr = {thumbnailstr}
></ModifierShelf>
    //  <ModifierCard id={k[i] + ".png"} mj={images_mj[k[i] + ".png"]} sd={images_sd[k[i] + ".png"]} handleShow={handleShow} handleClose={handleClose} show={statesModals[k[i] + ".png"]}></ModifierCard>
    );
  }
  return cards;
}

function expand_mobile(group, names, descs, thumbnailstr, images_mj, images_sd, handleShow, handleClose, statesModals, isMobile,p_start, p_end, sd_start, sd_end)
{
  console.log(names);
  let cards = [];
  let k = Object.keys(names).sort();
  for (var i = 0; i < Math.ceil(k.length); i += 2) {
    cards.push(
<ModifierShelf
id0 = {k[i] + ".png"}
mj0 = {images_mj[k[i] + ".png"]}
sd0 = {images_sd[k[i] + ".png"]}
show0 = {statesModals[k[i] + ".png"]}
name0 = {names[k[i]]}
desc0 = {descs[k[i]]}
mjprompt0 = {p_start + names[k[i]] + p_end}
sdprompt0 = {sd_start + names[k[i]] + sd_end}

id1={k[i + 1] + ".png"}
mj1={images_mj[k[i + 1] + ".png"]}
sd1={images_sd[k[i + 1] + ".png"]}
show1={statesModals[k[i + 1] + ".png"]}
name1 = {names[k[i + 1]]}
desc1 = {descs[k[i + 1]]}
mjprompt1 = {p_start + names[k[i + 1]] + p_end}
sdprompt1 = {sd_start + names[k[i + 1]] + sd_end}


handleShow = {handleShow}
handleClose = {handleClose}
isMobile = {isMobile}
group = {group}
thumbnailstr = {thumbnailstr}

></ModifierShelf>
    );
  }
  return cards;
}
//#endregion


function AIModifiersPage(props) {
  document.title = props.title;
  const images_mj = importAll(require.context("../teapots_mj", true, /\.(png|jpe?g|svg)$/));
  const images_sd = importAll(require.context("../teapots_sd", true, /\.(png|jpe?g|svg)$/));
  const names_mj = getNames(images_mj);
  props.analytics.page({
    url: "https://rexwang8.github.io/resource/ai/modifiers",
  });


  //function to handle modal states. one variable per modal autogenerated.
  const [statesModals, setStatesModals] = useState({});

  const handleShow = (evt) => {
    let name = evt.target.id;
    setStatesModals({ ...statesModals, [name]: true });
  };

  const handleClose = () => {
    //set all modals to false
    setStatesModals({});
  };

  const [ddval, setDDVal] = useState("colorsSimple");

  const handleSelect=(e)=>{
    setDDVal(e)
  }

  //#region dropdowns

  let mediumsDrawing = [];
  let mediumsPencil = [];
  let mediumsPen = [];
  let mediumsCrayon = [];
  let mediumsPaint = [];
  let mediumsPrint = [];
  let mediumsText = [];
  let mediumsDigital = [];
  let mediumsPhotography = [];
  let mediumsFabric = [];
  let physicalmediums = [];

  let cameraResolution = [];
  let cameraPerspective = [];
  let cameraLens = [];
  let cameraScene = [];
  let cameraFilms = [];
  let cameraCompanies = [];
  let camerasettings = [];
  let cameraOther = [];

  let postprocessing = [];
  let postprocessingmisc = [];
  let postprocessingreflections = [];

  let lddLighting = [];
  let ldddimensionality = [];

  let materialsMetals = [];
  let materialsGemstones = [];
  let materialsWood = [];
  let materialsPlastic = [];
  let materialsWax = [];
  let materialsRubber = [];
  let materialsWater = [];
  let materialsLiquid = [];
  let materialsGas = [];
  let materialsOrganic = [];
  let materialsEnergy = [];
  let materialsPlantsFungi = [];
  let materialsFood = [];
  let materialsMusical = [];
  let materialsMiscellaneous = [];
  let materialsGel = [];
  let materialsGlue = [];

  let stylesPhotosites = [];
  let stylesTimeframes = [];
  let stylesAbstractions = [];
  let stylesRenderer = [];
  let stylesComplexity = [];
  let stylesPunk = [];
  let stylesWave = [];
  let colorsSimple = [];
  let colorsPalletes = [];
  let shapesForms = [];
  let intangibleEmotions = [];
  let intangibleConcepts = [];
  let intangibleSymbols = [];
  let intangibleZodiac = [];
  let intangibleNumbers = [];
  let intangibleNumbersystem = [];
  let referenceGames = [];
  let referenceAnimeStudio = [];
  //#endregion

  //#region dropdowns - artists

  let artistAcademism = [];
  let artistArtsandCrafts = [];
  let artistArtNouveau = [];
  let artistBaroque = [];
  let artistBauhaus = [];
  let artistBayArea = [];
  let artistContemporary = [];
  let artistEnvironmentalism = [];
  let artistExpressionism = [];
  let artistFuturism = [];
  let artistGothic = [];
  let artistHeiseiEstheticism = [];
  let artistImpressionist = [];
  let artistInstallationArt = [];
  let artistLandscape = [];
  let artistLowbrow = [];
  let artistLuminism = [];
  let artistNaturalism = [];
  let artistMannerism = [];
  let artistModernism = [];
  let artistOrientalism = [];
  let artistPhotorealism = [];
  let artistPostImpressionist = [];
  let artistPopArt = [];
  let artistPostmodern = [];
  let artistPsycadelic = [];
  let artistRealist = [];
  let artistReligiousArt = [];
  let artistRenaissance = [];
  let artistRococo = [];
  let artistScienceFiction = [];
  let artistSocialRealism = [];
  let artistRomantisism = [];
  let artistStreetArt = [];
  let artistSurrealist = [];
  let artistSymbolism = [];
  let artistHudsonRiver = [];
  let artistukiyoe = [];
  let artistVisionaryArt = [];
  let artistartistartstation = [];
  let artistartistVideoGames = [];
  let artistartistComicManga = [];
  let artistartistIllustrator = [];
  let artistnartistFilmDirector = [];
  let nartistMusician = [];
  let nartistEtcher = [];
  let nartistArchitect = [];
  let nartistAnimator = [];
  let nartistPhotography = [];
  let nartistSculpter = [];
  let nartistWriter = [];

  //#endregion


  let method = expand;
  if (props.isMobile == true) {
    method = expand_mobile;
  }

  //#region populate dropdowns
  mediumsDrawing = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.drawingtypes, PHYSICALMEDIUMS_DESC.drawingtypes, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  mediumsPencil = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.pencilmediums, PHYSICALMEDIUMS_DESC.pencilmediums, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  mediumsPen = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.penmediums, PHYSICALMEDIUMS_DESC.penmediums, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  mediumsCrayon = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.crayonchalkmediums, PHYSICALMEDIUMS_DESC.crayonchalkmediums, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  mediumsPaint = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.paintmediums, PHYSICALMEDIUMS_DESC.paintmediums, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  mediumsPrint = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.printedmediums, PHYSICALMEDIUMS_DESC.printedmediums, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  mediumsText = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.textmediums, PHYSICALMEDIUMS_DESC.textmediums, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  mediumsDigital = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.digitalmediums, PHYSICALMEDIUMS_DESC.digitalmediums, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  mediumsPhotography = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.photographicmediums, PHYSICALMEDIUMS_DESC.photographicmediums, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  mediumsFabric = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.fabricmediums, PHYSICALMEDIUMS_DESC.fabricmediums, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  physicalmediums = method(GROUP_TITLES[ddval], PHYSICALMEDIUMS.physicalmediums, PHYSICALMEDIUMS_DESC.physicalmediums, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");

  cameraResolution = method(GROUP_TITLES[ddval], CAMERA.resolution, CAMERA_DESC.resolution, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  cameraPerspective = method(GROUP_TITLES[ddval], CAMERA.perspectives, CAMERA_DESC.perspectives, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  cameraLens = method(GROUP_TITLES[ddval], CAMERA.lens, CAMERA_DESC.lens, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  cameraScene = method(GROUP_TITLES[ddval], CAMERA.scenes, CAMERA_DESC.scenes, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  cameraFilms = method(GROUP_TITLES[ddval], CAMERA.filmtypes, CAMERA_DESC.filmtypes, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  cameraCompanies = method(GROUP_TITLES[ddval], CAMERA.cameratypescompanies, CAMERA_DESC.cameratypescompanies, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  camerasettings = method(GROUP_TITLES[ddval], CAMERA.camerasettings, CAMERA_DESC.camerasettings, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  cameraOther = method(GROUP_TITLES[ddval], CAMERA.othercamera, CAMERA_DESC.othercamera, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");

  postprocessing = method(GROUP_TITLES[ddval], POSTPROCESSING.postprocessing, POSTPROCESSING_DESC.postprocessing, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  postprocessingmisc = method(GROUP_TITLES[ddval], POSTPROCESSING.misc, POSTPROCESSING_DESC.misc, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  postprocessingreflections = method(GROUP_TITLES[ddval], POSTPROCESSING.reflections, POSTPROCESSING_DESC.reflections, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  lddLighting = method(GROUP_TITLES[ddval], LDD.lighting, LDD_DESC.lighting, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");
  ldddimensionality = method(GROUP_TITLES[ddval], LDD.dimensionality, LDD_DESC.dimensionality, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", "of a Utah Teapot");

  materialsMetals = method(GROUP_TITLES[ddval], MATERIALS.metals, MATERIALS_DESC.metals, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsGemstones = method(GROUP_TITLES[ddval], MATERIALS.gemsStones, MATERIALS_DESC.gemsStones, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsWood = method(GROUP_TITLES[ddval], MATERIALS.woods, MATERIALS_DESC.woods, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsPlastic = method(GROUP_TITLES[ddval], MATERIALS.plasticFoams, MATERIALS_DESC.plasticFoams, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsWax = method(GROUP_TITLES[ddval], MATERIALS.wax, MATERIALS_DESC.wax, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsRubber = method(GROUP_TITLES[ddval], MATERIALS.rubber, MATERIALS_DESC.rubber, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsWater = method(GROUP_TITLES[ddval], MATERIALS.waterIce, MATERIALS_DESC.waterIce, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsLiquid = method(GROUP_TITLES[ddval], MATERIALS.liquids, MATERIALS_DESC.liquids, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsGas = method(GROUP_TITLES[ddval], MATERIALS.gas, MATERIALS_DESC.gas, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsOrganic = method(GROUP_TITLES[ddval], MATERIALS.organic, MATERIALS_DESC.organic, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsFood = method(GROUP_TITLES[ddval], MATERIALS.food, MATERIALS_DESC.food, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsEnergy = method(GROUP_TITLES[ddval], MATERIALS.energy, MATERIALS_DESC.energy, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsPlantsFungi = method(GROUP_TITLES[ddval], MATERIALS.plantFungi, MATERIALS_DESC.plantFungi, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsMusical = method(GROUP_TITLES[ddval], MATERIALS.instruments, MATERIALS_DESC.instruments, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsMiscellaneous = method(GROUP_TITLES[ddval], MATERIALS.materials, MATERIALS_DESC.materials, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsGel = method(GROUP_TITLES[ddval], MATERIALS.gelSponge, MATERIALS_DESC.gelSponge, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");
  materialsGlue = method(GROUP_TITLES[ddval], MATERIALS.glue, MATERIALS_DESC.glue, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot made of ', " --ar 16:9 --v 3", "Utah Teapot made of ", "");

  stylesPhotosites = method(GROUP_TITLES[ddval], STYLES.photosites, STYLES_DESC.photosites, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  stylesTimeframes = method(GROUP_TITLES[ddval], STYLES.timeframes, STYLES_DESC.timeframes, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'A photo of a Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  stylesAbstractions = method(GROUP_TITLES[ddval], STYLES.abstraction, STYLES_DESC.abstraction, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  stylesRenderer = method(GROUP_TITLES[ddval], STYLES.renderers, STYLES_DESC.renderers, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', "renderer --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  stylesComplexity = method(GROUP_TITLES[ddval], STYLES.complexity, STYLES_DESC.complexity, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  stylesPunk = method(GROUP_TITLES[ddval], STYLES.punkstyles, STYLES_DESC.punkstyles, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  stylesWave = method(GROUP_TITLES[ddval], STYLES.wavestyles, STYLES_DESC.wavestyles, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  colorsSimple = method(GROUP_TITLES[ddval], COLORS.colors, COLORS_DESC.colors, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " color, photo of a Utah Teapot");
    colorsPalletes = method(GROUP_TITLES[ddval], COLORS.colorpalletes, COLORS_DESC.colorpalletes, "mj3",images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " color, photo of a Utah Teapot");
    shapesForms = method(GROUP_TITLES[ddval], COLORS.shapes, COLORS_DESC.shapes, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " shape, photo of a Utah Teapot");
    intangibleEmotions = method(GROUP_TITLES[ddval], INTANGIBLES.emotions, INTANGIBLES_DESC.emotions, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
    intangibleConcepts = method(GROUP_TITLES[ddval], INTANGIBLES.concepts, INTANGIBLES_DESC.concepts, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
    intangibleSymbols = method(GROUP_TITLES[ddval], INTANGIBLES.symbols, INTANGIBLES_DESC.symbols, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
    intangibleZodiac = method(GROUP_TITLES[ddval], INTANGIBLES.zodiac, INTANGIBLES_DESC.zodiac, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
    intangibleNumbers = method(GROUP_TITLES[ddval], INTANGIBLES.numbers, INTANGIBLES_DESC.numbers, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
    intangibleNumbersystem = method(GROUP_TITLES[ddval], INTANGIBLES.numbersystem, INTANGIBLES_DESC.numbersystem, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
    referenceGames = method(GROUP_TITLES[ddval], REFERENCEMEDIA.videogames, REFERENCEMEDIA_DESC.videogames, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " style, Utah Teapot");
    referenceAnimeStudio = method(GROUP_TITLES[ddval], REFERENCEMEDIA.animestudios, REFERENCEMEDIA_DESC.animestudios, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, anime ', " --ar 16:9 --v 3", "", " style, anime of a Utah Teapot");
  //#endregion

  //#region populate dropdowns - artists

  artistAcademism = method(GROUP_TITLES[ddval], ARTISTS.Academism, ARTISTS_DESC.Academism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistArtNouveau = method(GROUP_TITLES[ddval], ARTISTS.ArtNouveau, ARTISTS_DESC.ArtNouveau, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistArtsandCrafts = method(GROUP_TITLES[ddval], ARTISTS.ArtsandCrafts, ARTISTS_DESC.ArtsandCrafts, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistBaroque = method(GROUP_TITLES[ddval], ARTISTS.Baroque, ARTISTS_DESC.Baroque, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistBauhaus = method(GROUP_TITLES[ddval], ARTISTS.Bauhaus, ARTISTS_DESC.Bauhaus, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistBayArea = method(GROUP_TITLES[ddval], ARTISTS.BayArea, ARTISTS_DESC.BayArea, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistContemporary = method(GROUP_TITLES[ddval], ARTISTS.Contemporary, ARTISTS_DESC.Contemporary, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistEnvironmentalism = method(GROUP_TITLES[ddval], ARTISTS.Environmentalism, ARTISTS_DESC.Environmentalism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistExpressionism = method(GROUP_TITLES[ddval], ARTISTS.Expressionism, ARTISTS_DESC.Expressionism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistFuturism = method(GROUP_TITLES[ddval], ARTISTS.Futurism, ARTISTS_DESC.Futurism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistGothic = method(GROUP_TITLES[ddval], ARTISTS.Gothic, ARTISTS_DESC.Gothic, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistHeiseiEstheticism = method(GROUP_TITLES[ddval], ARTISTS.HeiseiEstheticism, ARTISTS_DESC.HeiseiEstheticism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistImpressionist = method(GROUP_TITLES[ddval], ARTISTS.Impressionist, ARTISTS_DESC.Impressionist, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistInstallationArt = method(GROUP_TITLES[ddval], ARTISTS.InstallationArt, ARTISTS_DESC.InstallationArt, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistLandscape = method(GROUP_TITLES[ddval], ARTISTS.Landscape, ARTISTS_DESC.Landscape, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistLowbrow = method(GROUP_TITLES[ddval], ARTISTS.Lowbrow, ARTISTS_DESC.Lowbrow, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistLuminism = method(GROUP_TITLES[ddval], ARTISTS.Luminism, ARTISTS_DESC.Luminism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistNaturalism = method(GROUP_TITLES[ddval], ARTISTS.Naturalism, ARTISTS_DESC.Naturalism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistMannerism = method(GROUP_TITLES[ddval], ARTISTS.Mannerism, ARTISTS_DESC.Mannerism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistModernism = method(GROUP_TITLES[ddval], ARTISTS.Modernism, ARTISTS_DESC.Modernism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistOrientalism = method(GROUP_TITLES[ddval], ARTISTS.Orientalism, ARTISTS_DESC.Orientalism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistPhotorealism = method(GROUP_TITLES[ddval], ARTISTS.Photorealism, ARTISTS_DESC.Photorealism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistPostImpressionist = method(GROUP_TITLES[ddval], ARTISTS.PostImpressionist, ARTISTS_DESC.PostImpressionist, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistPopArt = method(GROUP_TITLES[ddval], ARTISTS.PopArt, ARTISTS_DESC.PopArt, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistPostmodern = method(GROUP_TITLES[ddval], ARTISTS.Postmodern, ARTISTS_DESC.Postmodern, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistPsycadelic = method(GROUP_TITLES[ddval], ARTISTS.Psycadelic, ARTISTS_DESC.Psycadelic, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistRealist = method(GROUP_TITLES[ddval], ARTISTS.Realist, ARTISTS_DESC.Realist, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistReligiousArt = method(GROUP_TITLES[ddval], ARTISTS.ReligiousArt, ARTISTS_DESC.ReligiousArt, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistRenaissance = method(GROUP_TITLES[ddval], ARTISTS.Renaissance, ARTISTS_DESC.Renaissance, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistRococo = method(GROUP_TITLES[ddval], ARTISTS.Rococo, ARTISTS_DESC.Rococo, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistRomantisism = method(GROUP_TITLES[ddval], ARTISTS.Romantisism, ARTISTS_DESC.Romantisism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistScienceFiction = method(GROUP_TITLES[ddval], ARTISTS.ScienceFiction, ARTISTS_DESC.ScienceFiction, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistSocialRealism = method(GROUP_TITLES[ddval], ARTISTS.SocialRealism, ARTISTS_DESC.SocialRealism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistStreetArt = method(GROUP_TITLES[ddval], ARTISTS.StreetArt, ARTISTS_DESC.StreetArt, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistSurrealist = method(GROUP_TITLES[ddval], ARTISTS.Surrealist, ARTISTS_DESC.Surrealist, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistSymbolism = method(GROUP_TITLES[ddval], ARTISTS.Symbolism, ARTISTS_DESC.Symbolism, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistHudsonRiver = method(GROUP_TITLES[ddval], ARTISTS.HudsonRiver, ARTISTS_DESC.HudsonRiver, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistukiyoe = method(GROUP_TITLES[ddval], ARTISTS.ukiyoe, ARTISTS_DESC.ukiyoe, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistVisionaryArt = method(GROUP_TITLES[ddval], ARTISTS.VisionaryArt, ARTISTS_DESC.VisionaryArt, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistartistartstation = method(GROUP_TITLES[ddval], ARTISTS.artistartstation, ARTISTS_DESC.artistartstation, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistartistVideoGames = method(GROUP_TITLES[ddval], ARTISTS.artistVideoGames, ARTISTS_DESC.artistVideoGames, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistartistComicManga = method(GROUP_TITLES[ddval], ARTISTS.artistComicManga, ARTISTS_DESC.artistComicManga, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistartistIllustrator = method(GROUP_TITLES[ddval], ARTISTS.artistIllustrator, ARTISTS_DESC.artistIllustrator, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  artistnartistFilmDirector = method(GROUP_TITLES[ddval], ARTISTS.nartistFilmDirector, ARTISTS_DESC.nartistFilmDirector, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  nartistMusician = method(GROUP_TITLES[ddval], ARTISTS.nartistMusician, ARTISTS_DESC.nartistMusician, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  nartistEtcher = method(GROUP_TITLES[ddval], ARTISTS.nartistEtcher, ARTISTS_DESC.nartistEtcher, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  nartistArchitect = method(GROUP_TITLES[ddval], ARTISTS.nartistArchitect, ARTISTS_DESC.nartistArchitect, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  nartistAnimator = method(GROUP_TITLES[ddval], ARTISTS.nartistAnimator, ARTISTS_DESC.nartistAnimator, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  nartistPhotography = method(GROUP_TITLES[ddval], ARTISTS.nartistPhotography, ARTISTS_DESC.nartistPhotography, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  nartistSculpter = method(GROUP_TITLES[ddval], ARTISTS.nartistSculpter, ARTISTS_DESC.nartistSculpter, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  nartistWriter = method(GROUP_TITLES[ddval], ARTISTS.nartistWriter, ARTISTS_DESC.nartistWriter, "mj3", images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile,'Utah Teapot, ', " --ar 16:9 --v 3", "", " photo of a Utah Teapot");
  
  
  //#endregion



  return (
    <div className='bg2 hideScrollbarX'>
      <div className='aspect '>
        <div className='bg1 '>
          <SiteNavbar url='/resource/ai/modifiers' brand="Rex's Modifier Sheet" showMods={true} selected={ddval} handleSelect={handleSelect} dark={props.darkMode} toggleDark={props.toggleDarkMode}></SiteNavbar>

          <Container fluid className="">
          <Row className="modifier_descbox"><Col><h2 className="darkModeText_Description">{GROUP_TITLES[ddval]}</h2></Col></Row>
            <Row className="modifier_descbox"><Col><p className="darkModeText_Description">{GROUP_DESCRIPTIONS[ddval]}</p></Col></Row>
          <hr className="modifier_hr"></hr>
          {ddval == "mediumsDrawing" ? mediumsDrawing : <div></div>}
          {ddval == "mediumsPencil" ? mediumsPencil : <div></div>}
          {ddval == "mediumsPen" ? mediumsPen : <div></div>}
          {ddval == "mediumsCrayon" ? mediumsCrayon : <div></div>}
          {ddval == "mediumsPaint" ? mediumsPaint : <div></div>}
          {ddval == "mediumsPrint" ? mediumsPrint : <div></div>}
          {ddval == "mediumsText" ? mediumsText : <div></div>}
          {ddval == "mediumsDigital" ? mediumsDigital : <div></div>}
          {ddval == "mediumsPhotography" ? mediumsPhotography : <div></div>}
          {ddval == "mediumsFabric" ? mediumsFabric : <div></div>}
          {ddval == "physicalmediums" ? physicalmediums : <div></div>}

          {ddval == "cameraResolution" ? cameraResolution : <div></div>}
          {ddval == "cameraPerspective" ? cameraPerspective : <div></div>}
          {ddval == "cameraLens" ? cameraLens : <div></div>}
          {ddval == "cameraScene" ? cameraScene : <div></div>}
          {ddval == "cameraFilms" ? cameraFilms : <div></div>}
          {ddval == "cameraCompanies" ? cameraCompanies : <div></div>}
          {ddval == "camerasettings" ? camerasettings : <div></div>}
          {ddval == "cameraOther" ? cameraOther : <div></div>}

          {ddval == "postprocessing" ? postprocessing : <div></div>}
          {ddval == "postprocessingmisc" ? postprocessingmisc : <div></div>}
          {ddval == "postprocessingreflections" ? postprocessingreflections : <div></div>}
          {ddval == "lddLighting" ? lddLighting : <div></div>}
          {ddval == "ldddimensionality" ? ldddimensionality : <div></div>}

          {ddval == "materialsMetals" ? materialsMetals : <div></div>}
          {ddval == "materialsGemstones" ? materialsGemstones : <div></div>}
          {ddval == "materialsWood" ? materialsWood : <div></div>}
          {ddval == "materialsPlastic" ? materialsPlastic : <div></div>}
          {ddval == "materialsWax" ? materialsWax : <div></div>}
          {ddval == "materialsRubber" ? materialsRubber : <div></div>}
          {ddval == "materialsWater" ? materialsWater : <div></div>}
          {ddval == "materialsLiquid" ? materialsLiquid : <div></div>}
          {ddval == "materialsGas" ? materialsGas : <div></div>}
          {ddval == "materialsOrganic" ? materialsOrganic : <div></div>}
          {ddval == "materialsFood" ? materialsFood : <div></div>}
          {ddval == "materialsPlantsFungi" ? materialsPlantsFungi : <div></div>}
          {ddval == "materialsEnergy" ? materialsEnergy : <div></div>}
          {ddval == "materialsMusical" ? materialsMusical : <div></div>}
          {ddval == "materialsGel" ? materialsGel : <div></div>}
          {ddval == "materialsGlue" ? materialsGlue : <div></div>}
          {ddval == "materialsMiscellaneous" ? materialsMiscellaneous : <div></div>}
          
          {ddval == "stylesPhotosites" ? stylesPhotosites : <div></div>}
          {ddval == "stylesTimeframes" ? stylesTimeframes : <div></div>}
          {ddval == "stylesAbstractions" ? stylesAbstractions : <div></div>}
          {ddval == "stylesRenderer" ? stylesRenderer : <div></div>}
          {ddval == "stylesComplexity" ? stylesComplexity : <div></div>}
          {ddval == "stylesPunk" ? stylesPunk : <div></div>}
          {ddval == "stylesWave" ? stylesWave : <div></div>}
          {ddval == "colorsSimple" ? colorsSimple : <div></div>}
          {ddval == "colorsPalletes" ? colorsPalletes : <div></div>}
          {ddval == "shapesForms" ? shapesForms : <div></div>}
          {ddval == "intangibleEmotions" ? intangibleEmotions : <div></div>}
          {ddval == "intangibleConcepts" ? intangibleConcepts : <div></div>}
          {ddval == "intangibleSymbols" ? intangibleSymbols : <div></div>}
          {ddval == "intangibleZodiac" ? intangibleZodiac : <div></div>}
          {ddval == "intangibleNumbers" ? intangibleNumbers : <div></div>}
          {ddval == "intangibleNumbersystem" ? intangibleNumbersystem : <div></div>}
          {ddval == "referenceGames" ? referenceGames : <div></div>}
          {ddval == "referenceAnimeStudio" ? referenceAnimeStudio : <div></div>}

          {ddval == "artistAcademism" ? artistAcademism : <div></div>}
          {ddval == "artistArtsandCrafts" ? artistArtsandCrafts : <div></div>}
          {ddval == "artistArtNouveau" ? artistArtNouveau : <div></div>}
          {ddval == "artistBaroque" ? artistBaroque : <div></div>}
          {ddval == "artistBauhaus" ? artistBauhaus : <div></div>}
          {ddval == "artistBayArea" ? artistBayArea : <div></div>}
          {ddval == "artistContemporary" ? artistContemporary : <div></div>}
          {ddval == "artistEnvironmentalism" ? artistEnvironmentalism : <div></div>}
          {ddval == "artistExpressionism" ? artistExpressionism : <div></div>}
          {ddval == "artistFuturism" ? artistFuturism : <div></div>}
          {ddval == "artistGothic" ? artistGothic : <div></div>}
          {ddval == "artistHeiseiEstheticism" ? artistHeiseiEstheticism : <div></div>}
          {ddval == "artistImpressionist" ? artistImpressionist : <div></div>}
          {ddval == "artistInstallationArt" ? artistInstallationArt : <div></div>}
          {ddval == "artistLandscape" ? artistLandscape : <div></div>}
          {ddval == "artistLowbrow" ? artistLowbrow : <div></div>}
          {ddval == "artistLuminism" ? artistLuminism : <div></div>}
          {ddval == "artistNaturalism" ? artistNaturalism : <div></div>}
          {ddval == "artistMannerism" ? artistMannerism : <div></div>}
          {ddval == "artistModernism" ? artistModernism : <div></div>}
          {ddval == "artistOrientalism" ? artistOrientalism : <div></div>}
          {ddval == "artistPhotorealism" ? artistPhotorealism : <div></div>}
          {ddval == "artistPostImpressionist" ? artistPostImpressionist : <div></div>}
          {ddval == "artistPopArt" ? artistPopArt : <div></div>}
          {ddval == "artistPostmodern" ? artistPostmodern : <div></div>}
          {ddval == "artistPsycadelic" ? artistPsycadelic : <div></div>}
          {ddval == "artistRealist" ? artistRealist : <div></div>}
          {ddval == "artistReligiousArt" ? artistReligiousArt : <div></div>}
          {ddval == "artistRenaissance" ? artistRenaissance : <div></div>}
          {ddval == "artistRococo" ? artistRococo : <div></div>}
          {ddval == "artistRomantisism" ? artistRomantisism : <div></div>}
          {ddval == "artistScienceFiction" ? artistScienceFiction : <div></div>}
          {ddval == "artistSocialRealism" ? artistSocialRealism : <div></div>}
          {ddval == "artistStreetArt" ? artistStreetArt : <div></div>}
          {ddval == "artistSurrealist" ? artistSurrealist : <div></div>}
          {ddval == "artistSymbolism" ? artistSymbolism : <div></div>}
          {ddval == "artistHudsonRiver" ? artistHudsonRiver : <div></div>}
          {ddval == "artistukiyoe" ? artistukiyoe : <div></div>}
          {ddval == "artistVisionaryArt" ? artistVisionaryArt : <div></div>}
          {ddval == "artistartistartstation" ? artistartistartstation : <div></div>}
          {ddval == "artistartistVideoGames" ? artistartistVideoGames : <div></div>}
          {ddval == "artistartistComicManga" ? artistartistComicManga : <div></div>}
          {ddval == "artistartistIllustrator" ? artistartistIllustrator : <div></div>}
          {ddval == "artistnartistFilmDirector" ? artistnartistFilmDirector : <div></div>}
          {ddval == "nartistMusician" ? nartistMusician : <div></div>}
          {ddval == "nartistEtcher" ? nartistEtcher : <div></div>}
          {ddval == "nartistArchitect" ? nartistArchitect : <div></div>}
          {ddval == "nartistAnimator" ? nartistAnimator : <div></div>}
          {ddval == "nartistPhotography" ? nartistPhotography : <div></div>}
          {ddval == "nartistSculpter" ? nartistSculpter : <div></div>}
          {ddval == "nartistWriter" ? nartistWriter : <div></div>}


          <Row><Col><TeapotFooter></TeapotFooter></Col></Row>
          </Container>
       
        </div>
      </div>
    </div>
  );
}

export default AIModifiersPage;
