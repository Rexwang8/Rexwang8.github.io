import SiteNavbar from "../components/SiteNavbar";
import Dropdown from "react-bootstrap/Dropdown";
import { ASPECTS, MATERIALS, PHYSICALMEDIUMS, STYLES, CAMERA, POSTPROCESSING, LDD, ARTISTS, generatorKeys } from "../data/allkeys";
import { useState } from "react";
import { Button } from "react-bootstrap";
function PromptGenerationPage(props) {
  document.title = props.title;

  props.analytics.page({
    url: "https://rexwang8.github.io/resource/ai/generator",
  });
  const [subject, setSubject] = useState("object");
  const [material, setMaterial] = useState("true");
  const [artists, setArtist] = useState(1);
  const [keywords, setkeywords] = useState(1);
  const [result, setresult] = useState("Result appears here");

  let allartists = [];
  Object.keys(ARTISTS).forEach((key) => {
    Object.keys(ARTISTS[key]).forEach((key2) => {
      allartists.push(ARTISTS[key][key2]);
    });
  });

  let allkeywords = [];
  //STYLES
  Object.keys(STYLES).forEach((key) => {
    Object.keys(STYLES[key]).forEach((key2) => {
      allkeywords.push(STYLES[key][key2]);
    });
  });

  Object.keys(CAMERA).forEach((key) => {
    Object.keys(CAMERA[key]).forEach((key2) => {
      allkeywords.push(CAMERA[key][key2]);
    });
  });

  Object.keys(POSTPROCESSING).forEach((key) => {
    Object.keys(POSTPROCESSING[key]).forEach((key2) => {
      allkeywords.push(POSTPROCESSING[key][key2]);
    });
  });

  Object.keys(LDD).forEach((key) => {
    Object.keys(LDD[key]).forEach((key2) => {
      allkeywords.push(LDD[key][key2]);
    });
  });

  let allphysical = [];
  Object.keys(PHYSICALMEDIUMS).forEach((key) => {
    Object.keys(PHYSICALMEDIUMS[key]).forEach((key2) => {
      allphysical.push(PHYSICALMEDIUMS[key][key2]);
    });
  });

  let allmaterials = [];
  Object.keys(MATERIALS).forEach((key) => {
    Object.keys(MATERIALS[key]).forEach((key2) => {
      allmaterials.push(MATERIALS[key][key2]);
    });
  });

  const handleSubjectSelect = (e) => {
    setSubject(e);
  };

  const handleArtistSelect = (e) => {
    setArtist(Number.parseInt(e));
  };

  const handlematerialSelect = (e) => {
    setMaterial(e === "true");
  };

  const handleKeywordSelect = (e) => {
    setkeywords(Number.parseInt(e));
  };

  const parseIntoPrompt = () => {
    let sub = "";
    console.log(subject);
    if (subject === "object") {
      const values = Object.values(generatorKeys.objects);
      sub = values[Math.floor(Math.random() * values.length)];
    } else if (subject === "person") {
      const values = Object.values(generatorKeys.people_ethnicities);
      const values2 = Object.values(generatorKeys.people_jobs);
      const sub1 = values[Math.floor(Math.random() * values.length)];
      const sub2 = values2[Math.floor(Math.random() * values2.length)];
      sub = `${sub1} ${sub2}`;
    } else if (subject === "animal") {
      const values = Object.values(generatorKeys.animal);
      sub = values[Math.floor(Math.random() * values.length)];
    } else if (subject === "buildings") {
      const values = Object.values(generatorKeys.buildings);
      sub = values[Math.floor(Math.random() * values.length)];
    } else if (subject === "landscape") {
      const values = Object.values(generatorKeys.landscapemodifier);
      const values2 = Object.values(generatorKeys.landscape);
      const sub1 = values[Math.floor(Math.random() * values.length)];
      const sub2 = values2[Math.floor(Math.random() * values2.length)];
      sub = `${sub1} ${sub2}`;
    }

    let artist = "";

    if (artists >= 1) {
      artist = ", by ";
      artist += `${allartists[Math.floor(Math.random() * allartists.length)]}`;
    }
    if (artists >= 2) {
      artist += `, ${allartists[Math.floor(Math.random() * allartists.length)]}`;
    }
    if (artists >= 3) {
      artist += `, ${allartists[Math.floor(Math.random() * allartists.length)]}`;
    }

    let kw = "";

    if (keywords >= 1) {
      kw = ", ";
      kw += `${allkeywords[Math.floor(Math.random() * allkeywords.length)]}`;
    }
    if (keywords >= 2) {
      kw += `, ${allkeywords[Math.floor(Math.random() * allkeywords.length)]}`;
    }
    if (keywords >= 3) {
      kw += `, ${allkeywords[Math.floor(Math.random() * allkeywords.length)]}`;
    }

    let aspect = "";
    const aspects = Object.values(ASPECTS);
    aspect = aspects[Math.floor(Math.random() * aspects.length)];

    let materialmedia = "";
    if (material) {
      if (Math.random() > 0.5) {
        //materials
        materialmedia = `, made of ${allmaterials[Math.floor(Math.random() * allmaterials.length)]}`;
      } else {
        //physical media
        materialmedia = `, ${allphysical[Math.floor(Math.random() * allphysical.length)]}`;
        console.log(allmaterials);
      }
    }

    setresult(`a ${sub}${materialmedia}${artist}${kw} --ar ${aspect}`);
    console.log(result);
  };

  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url='/resource/ai/generator'></SiteNavbar>
          <div className='textAICenter'>
            <h2>Dynamic Prompt generator</h2>
            <Dropdown onSelect={handleSubjectSelect}>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Subject
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>{subject}</Dropdown.Header>
                <Dropdown.Item eventKey='object'>Object</Dropdown.Item>
                <Dropdown.Item eventKey='person'>Person</Dropdown.Item>
                <Dropdown.Item eventKey='animal'>Animal</Dropdown.Item>
                <Dropdown.Item eventKey='landscape'>Landscape</Dropdown.Item>
                <Dropdown.Item eventKey='buildings'>Building</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown onSelect={handleArtistSelect}>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Artists
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>{artists} Artists</Dropdown.Header>
                <Dropdown.Item eventKey='0'>0 Artists</Dropdown.Item>
                <Dropdown.Item eventKey='1'>1 Artists</Dropdown.Item>
                <Dropdown.Item eventKey='2'>2 Artists</Dropdown.Item>
                <Dropdown.Item eventKey='3'>3 Artists</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown onSelect={handleKeywordSelect}>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Keywords
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>{keywords} Keywords</Dropdown.Header>
                <Dropdown.Item eventKey='0'>0 Keywords</Dropdown.Item>
                <Dropdown.Item eventKey='1'>1 Keywords</Dropdown.Item>
                <Dropdown.Item eventKey='2'>2 Keywords</Dropdown.Item>
                <Dropdown.Item eventKey='3'>3 Keywords</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown onSelect={handlematerialSelect}>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Materials and Media
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>Use: {material.toString()}</Dropdown.Header>
                <Dropdown.Item eventKey='true'>Use Materials/Media</Dropdown.Item>
                <Dropdown.Item eventKey='false'>Don't Use Materials/Media</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <hr></hr>
            <Button variant='primary' onClick={parseIntoPrompt}>
              Generate Prompt
            </Button>{" "}
            <hr></hr>
            <h3>{result}</h3>
            <p>36 Objects, 94 Jobs, 80 races and ethnicities, 49 buildings, 40 landscapes, 58 landscape modifiers, 139 artists, 227 keywords, 128 physical mediums, 68 materials (919 total)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromptGenerationPage;
