import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import { GROUP_TITLES } from "../data/allkeys";
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

function DropdownModifier(props) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=''
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}>
      {children}
      &#x25bc;
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
        <Form.Control autoFocus className='mx-3 my-2 w-auto' placeholder='Type to filter...' onChange={(e) => setValue(e.target.value)} value={value} />
        <ul className='list-unstyled'>{React.Children.toArray(children).filter((child) => !value || child.props.children.toLowerCase().startsWith(value))}</ul>
      </div>
    );
  });

  return (
    
    <Dropdown onSelect={props.handleSelect} className="modifierdropdown_toggle">
      <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
        Modifier Groups
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu} className="modifierdropdown_wrapper">
      <Dropdown.Item eventKey='mediumsDrawing'>{GROUP_TITLES['mediumsDrawing']}</Dropdown.Item>
      <Dropdown.Item eventKey='mediumsPencil'>{GROUP_TITLES['mediumsPencil']}</Dropdown.Item>
      <Dropdown.Item eventKey='mediumsPen'>{GROUP_TITLES['mediumsPen']}</Dropdown.Item>
      <Dropdown.Item eventKey='mediumsCrayon'>{GROUP_TITLES['mediumsCrayon']}</Dropdown.Item>
      <Dropdown.Item eventKey='mediumsPaint'>{GROUP_TITLES['mediumsPaint']}</Dropdown.Item>
      <Dropdown.Item eventKey='mediumsText'>{GROUP_TITLES['mediumsText']}</Dropdown.Item>
      <Dropdown.Item eventKey='mediumsPrint'>{GROUP_TITLES['mediumsPrint']}</Dropdown.Item>
      <Dropdown.Item eventKey='mediumsFabric'>{GROUP_TITLES['mediumsFabric']}</Dropdown.Item>
      <Dropdown.Item eventKey='mediumsPhotography'>{GROUP_TITLES['mediumsPhotography']}</Dropdown.Item>
      <Dropdown.Item eventKey='mediumsDigital'>{GROUP_TITLES['mediumsDigital']}</Dropdown.Item>
      <Dropdown.Item eventKey='physicalmediums'>{GROUP_TITLES['physicalmediums']}</Dropdown.Item>

      <Dropdown.Item eventKey='cameraResolution'>{GROUP_TITLES['cameraResolution']}</Dropdown.Item>
      <Dropdown.Item eventKey='cameraPerspective'>{GROUP_TITLES['cameraPerspective']}</Dropdown.Item>
      <Dropdown.Item eventKey='cameraLens'>{GROUP_TITLES['cameraLens']}</Dropdown.Item>
      <Dropdown.Item eventKey='cameraScene'>{GROUP_TITLES['cameraScene']}</Dropdown.Item>
      <Dropdown.Item eventKey='cameraFilms'>{GROUP_TITLES['cameraFilms']}</Dropdown.Item>
      <Dropdown.Item eventKey='cameraCompanies'>{GROUP_TITLES['cameraCompanies']}</Dropdown.Item>
      <Dropdown.Item eventKey='camerasettings'>{GROUP_TITLES['camerasettings']}</Dropdown.Item>
      <Dropdown.Item eventKey='cameraOther'>{GROUP_TITLES['cameraOther']}</Dropdown.Item>

      <Dropdown.Item eventKey='postprocessing'>{GROUP_TITLES['postprocessing']}</Dropdown.Item>
      <Dropdown.Item eventKey='postprocessingreflections'>{GROUP_TITLES['postprocessingreflections']}</Dropdown.Item>
      <Dropdown.Item eventKey='postprocessingmisc'>{GROUP_TITLES['postprocessingmisc']}</Dropdown.Item>

      <Dropdown.Item eventKey='lddLighting'>{GROUP_TITLES['lddLighting']}</Dropdown.Item>
      <Dropdown.Item eventKey='ldddimensionality'>{GROUP_TITLES['ldddimensionality']}</Dropdown.Item>

      <Dropdown.Item eventKey='materialsMetals'>{GROUP_TITLES['materialsMetals']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsGemstones'>{GROUP_TITLES['materialsGemstones']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsWood'>{GROUP_TITLES['materialsWood']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsPlastic'>{GROUP_TITLES['materialsPlastic']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsWax'>{GROUP_TITLES['materialsWax']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsRubber'>{GROUP_TITLES['materialsRubber']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsWater'>{GROUP_TITLES['materialsWater']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsLiquid'>{GROUP_TITLES['materialsLiquid']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsGas'>{GROUP_TITLES['materialsGas']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsOrganic'>{GROUP_TITLES['materialsOrganic']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsEnergy'>{GROUP_TITLES['materialsEnergy']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsFood'>{GROUP_TITLES['materialsFood']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsPlantsFungi'>{GROUP_TITLES['materialsPlantsFungi']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsMusical'>{GROUP_TITLES['materialsMusical']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsGel'>{GROUP_TITLES['materialsGel']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsGlue'>{GROUP_TITLES['materialsGlue']}</Dropdown.Item>
      <Dropdown.Item eventKey='materialsMiscellaneous'>{GROUP_TITLES['materialsMiscellaneous']}</Dropdown.Item>

      <Dropdown.Item eventKey='stylesRenderer'>{GROUP_TITLES['stylesRenderer']}</Dropdown.Item>
      <Dropdown.Item eventKey='stylesPhotosites'>{GROUP_TITLES['stylesPhotosites']}</Dropdown.Item>
        <Dropdown.Item eventKey='stylesTimeframes'>{GROUP_TITLES['stylesTimeframes']}</Dropdown.Item>
        <Dropdown.Item eventKey='stylesAbstractions'>{GROUP_TITLES['stylesAbstractions']}</Dropdown.Item>
        <Dropdown.Item eventKey='stylesComplexity'>{GROUP_TITLES['stylesComplexity']}</Dropdown.Item>
        <Dropdown.Item eventKey='stylesPunk'>{GROUP_TITLES['stylesPunk']}</Dropdown.Item>
        <Dropdown.Item eventKey='stylesWave'>{GROUP_TITLES['stylesWave']}</Dropdown.Item>
        <Dropdown.Item eventKey='colorsSimple'>{GROUP_TITLES['colorsSimple']}</Dropdown.Item>
        <Dropdown.Item eventKey='colorsPalletes'>{GROUP_TITLES['colorsPalletes']}</Dropdown.Item>
        <Dropdown.Item eventKey='shapesForms'>{GROUP_TITLES['shapesForms']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleEmotions'>{GROUP_TITLES['intangibleEmotions']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleConcepts'>{GROUP_TITLES['intangibleConcepts']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleSymbols'>{GROUP_TITLES['intangibleSymbols']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleZodiac'>{GROUP_TITLES['intangibleZodiac']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleNumbers'>{GROUP_TITLES['intangibleNumbers']}</Dropdown.Item>
        <Dropdown.Item eventKey='intangibleNumbersystem'>{GROUP_TITLES['intangibleNumbersystem']}</Dropdown.Item>
        <Dropdown.Item eventKey='referenceGames'>{GROUP_TITLES['referenceGames']}</Dropdown.Item>
        <Dropdown.Item eventKey='referenceAnimeStudio'>{GROUP_TITLES['referenceAnimeStudio']}</Dropdown.Item>


        <Dropdown.Item eventKey='artistAcademism'>{GROUP_TITLES['artistAcademism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistArtsandCrafts'>{GROUP_TITLES['artistArtsandCrafts']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistArtNouveau'>{GROUP_TITLES['artistArtNouveau']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistBaroque'>{GROUP_TITLES['artistBaroque']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistBauhaus'>{GROUP_TITLES['artistBauhaus']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistBayArea'>{GROUP_TITLES['artistBayArea']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistContemporary'>{GROUP_TITLES['artistContemporary']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistEnvironmentalism'>{GROUP_TITLES['artistEnvironmentalism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistExpressionism'>{GROUP_TITLES['artistExpressionism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistFuturism'>{GROUP_TITLES['artistFuturism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistGothic'>{GROUP_TITLES['artistGothic']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistHeiseiEstheticism'>{GROUP_TITLES['artistHeiseiEstheticism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistImpressionist'>{GROUP_TITLES['artistImpressionist']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistInstallationArt'>{GROUP_TITLES['artistInstallationArt']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistLandscape'>{GROUP_TITLES['artistLandscape']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistLowbrow'>{GROUP_TITLES['artistLowbrow']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistLuminism'>{GROUP_TITLES['artistLuminism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistNaturalism'>{GROUP_TITLES['artistNaturalism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistMannerism'>{GROUP_TITLES['artistMannerism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistModernism'>{GROUP_TITLES['artistModernism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistOrientalism'>{GROUP_TITLES['artistOrientalism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistPhotorealism'>{GROUP_TITLES['artistPhotorealism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistPostImpressionist'>{GROUP_TITLES['artistPostImpressionist']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistPopArt'>{GROUP_TITLES['artistPopArt']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistPostmodern'>{GROUP_TITLES['artistPostmodern']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistPsycadelic'>{GROUP_TITLES['artistPsycadelic']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistRealist'>{GROUP_TITLES['artistRealist']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistReligiousArt'>{GROUP_TITLES['artistReligiousArt']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistRenaissance'>{GROUP_TITLES['artistRenaissance']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistRococo'>{GROUP_TITLES['artistRococo']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistRomantisism'>{GROUP_TITLES['artistRomantisism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistScienceFiction'>{GROUP_TITLES['artistScienceFiction']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistSocialRealism'>{GROUP_TITLES['artistSocialRealism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistStreetArt'>{GROUP_TITLES['artistStreetArt']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistSurrealist'>{GROUP_TITLES['artistSurrealist']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistSymbolism'>{GROUP_TITLES['artistSymbolism']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistHudsonRiver'>{GROUP_TITLES['artistHudsonRiver']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistukiyoe'>{GROUP_TITLES['artistukiyoe']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistVisionaryArt'>{GROUP_TITLES['artistVisionaryArt']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistartistartstation'>{GROUP_TITLES['artistartistartstation']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistartistVideoGames'>{GROUP_TITLES['artistartistVideoGames']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistartistComicManga'>{GROUP_TITLES['artistartistComicManga']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistartistIllustrator'>{GROUP_TITLES['artistartistIllustrator']}</Dropdown.Item>
        <Dropdown.Item eventKey='artistnartistFilmDirector'>{GROUP_TITLES['artistnartistFilmDirector']}</Dropdown.Item>
        <Dropdown.Item eventKey='nartistMusician'>{GROUP_TITLES['nartistMusician']}</Dropdown.Item>
        <Dropdown.Item eventKey='nartistEtcher'>{GROUP_TITLES['nartistEtcher']}</Dropdown.Item>
        <Dropdown.Item eventKey='nartistArchitect'>{GROUP_TITLES['nartistArchitect']}</Dropdown.Item>
        <Dropdown.Item eventKey='nartistAnimator'>{GROUP_TITLES['nartistAnimator']}</Dropdown.Item>
        <Dropdown.Item eventKey='nartistPhotography'>{GROUP_TITLES['nartistPhotography']}</Dropdown.Item>
        <Dropdown.Item eventKey='nartistSculpter'>{GROUP_TITLES['nartistSculpter']}</Dropdown.Item>
        <Dropdown.Item eventKey='nartistWriter'>{GROUP_TITLES['nartistWriter']}</Dropdown.Item>
      </Dropdown.Menu>
      
    </Dropdown>
  );
}

export default DropdownModifier;
