import SiteNavbar from "../components/SiteNavbar";
import Dropdown from "react-bootstrap/Dropdown";
import { ASPECTS, MATERIALS, PHYSICALMEDIUMS, STYLES, CAMERA, POSTPROCESSING, LDD, ARTISTS, generatorKeys } from "../data/allkeys";
import { useState } from "react";
import { Button, Container, Row, Col, ButtonGroup } from "react-bootstrap";
function PromptGenerationPage(props) {
  document.title = props.title;

  props.analytics.page({
    url: "https://rexwang8.github.io/resource/ai/generator",
  });
  const [subjectOPT, setSubject] = useState("object");
  const [materialOPT, setMaterial] = useState("true");
  const [artists, setArtist] = useState(1);
  const [keywords, setkeywords] = useState(1);
  const [aspectOPT, setAspectOPT] = useState("all");
  const [amountOPT, setAmountOPT] = useState(1);
  const [result, setresult] = useState([<h3>Result Appears Here</h3>]);

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
    setMaterial(e);
  };

  const handleKeywordSelect = (e) => {
    setkeywords(Number.parseInt(e));
  };

  const handleAspectSelect = (e) => {
    setAspectOPT(e);
  };
  const handleBulkSelect = (e) => {
    setAmountOPT(Number.parseInt(e));
  };

  const GeneratePrompts = () => {
    let res = [];
    for (let index = 0; index < amountOPT; index++) {
      res.push(parseIntoPrompt());
      
    }
    setresult(res);
  };

  const parseIntoPrompt = () => {
    let sub = "";
    if (subjectOPT === "object") {
      const values = Object.values(generatorKeys.objects);
      sub = values[Math.floor(Math.random() * values.length)];
    } else if (subjectOPT === "person") {
      const values = Object.values(generatorKeys.people_ethnicities);
      const values2 = Object.values(generatorKeys.people_jobs);
      const sub1 = values[Math.floor(Math.random() * values.length)];
      const sub2 = values2[Math.floor(Math.random() * values2.length)];
      sub = `${sub1} ${sub2}`;
    } else if (subjectOPT === "animal") {
      const values = Object.values(generatorKeys.animal);
      sub = values[Math.floor(Math.random() * values.length)];
    } else if (subjectOPT === "buildings") {
      const values = Object.values(generatorKeys.landscapemodifier);
      const values2 = Object.values(generatorKeys.buildings);
      const sub1 = values[Math.floor(Math.random() * values.length)];
      const sub2 = values2[Math.floor(Math.random() * values2.length)];
      sub = `${sub1} ${sub2}`;
    } else if (subjectOPT === "landscape") {
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

    //ASPECT RATIO
    let aspect = "";
    let aspects;
    if (aspectOPT === "all") {
      aspects = Object.values(ASPECTS);
    } else if (aspectOPT === "landscape") {
      aspects = Object.values(generatorKeys.aspectlandscape);
    } else if (aspectOPT === "portrait") {
      aspects = Object.values(generatorKeys.aspectportrait);
    }
    if(aspectOPT !== "none")
    {
      aspect = `--ar ${aspects[Math.floor(Math.random() * aspects.length)]}`;
    }
    

    //MATERIALS / MEDIA
    let materialmedia = "";
    if (materialOPT !== "none") {
      if (materialOPT === "materials") {
        //materials
        materialmedia = `, made of ${allmaterials[Math.floor(Math.random() * allmaterials.length)]}`;
      } else {
        //physical media
        materialmedia = `, ${allphysical[Math.floor(Math.random() * allphysical.length)]}`;
      }
    }

    return <h3>{`a ${sub}${materialmedia}${artist}${kw} ${aspect}`}</h3>;
  };

  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url='/resource/ai/generator'></SiteNavbar>
          <div className='textAICenter'>
            <h2>Dynamic Prompt generator</h2>
            <Container>
              <Row>
                <Col>
                <Dropdown onSelect={handleSubjectSelect}>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Subject
              </Dropdown.Toggle>


              <Dropdown.Menu>
                <Dropdown.Header>{subjectOPT}</Dropdown.Header>
                <Dropdown.Item eventKey='object'>Object</Dropdown.Item>
                <Dropdown.Item eventKey='person'>Person</Dropdown.Item>
                <Dropdown.Item eventKey='animal'>Animal</Dropdown.Item>
                <Dropdown.Item eventKey='landscape'>Landscape</Dropdown.Item>
                <Dropdown.Item eventKey='buildings'>Building</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
                </Col>

                <Col>
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
            
                </Col>
                <Col>
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
            </Dropdown></Col>

                <Col>
                <Dropdown onSelect={handlematerialSelect}>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Materials and Media
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>Use: {materialOPT.toString()}</Dropdown.Header>
                <Dropdown.Item eventKey='all'>Use Materials/Media</Dropdown.Item>
                <Dropdown.Item eventKey='materials'>Use Materials</Dropdown.Item>
                <Dropdown.Item eventKey='media'>Use Media</Dropdown.Item>
                <Dropdown.Item eventKey='none'>Don't Use Materials/Media</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
                </Col>

                <Col>
                <Dropdown onSelect={handleAspectSelect}>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Aspect Ratio
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>Use: {aspectOPT.toString()}</Dropdown.Header>
                <Dropdown.Item eventKey='all'>All Aspects</Dropdown.Item>
                <Dropdown.Item eventKey='landscape'>Landscape Only</Dropdown.Item>
                <Dropdown.Item eventKey='portrait'>Portrait Only</Dropdown.Item>
                <Dropdown.Item eventKey='none'>No Aspect (1:1)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
                </Col>


              </Row>
            </Container>
           
            
            
            <hr></hr>
            <Dropdown as={ButtonGroup} onSelect={handleBulkSelect} size="lg">
      <Button variant="primary" onClick={GeneratePrompts}>Generate</Button>

      <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

      <Dropdown.Menu>
      <Dropdown.Header>{amountOPT}x Generations</Dropdown.Header>
        <Dropdown.Item eventKey='1'>1x Generations</Dropdown.Item>
        <Dropdown.Item eventKey='3'>3x Generations</Dropdown.Item>
        <Dropdown.Item eventKey='5'>5x Generations</Dropdown.Item>
        <Dropdown.Item eventKey='10'>10x Generations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            <hr></hr>
            {result}
            <hr></hr>
            <p>36 Objects, 94 Jobs, 80 races and ethnicities, 49 buildings, 40 landscapes, 58 landscape modifiers, 139 artists, 227 keywords, 128 physical mediums, 68 materials (919 total)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromptGenerationPage;
