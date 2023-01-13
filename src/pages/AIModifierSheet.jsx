import { Navbar, Card, Modal, Container, Button, Accordion, Nav, NavDropdown, Breadcrumb, Row, Col, CardImg } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";
import { Link } from "react-router-dom";

import TeapotCardLarge from "../components/teapotCardLarge";
import RowStyleDiv from "../components/rowdiv";

import { COLORS, COLORS_DESC } from "../data/allkeys.jsx";
import { useState } from "react";

import ModifierCard from "../components/ModifierCard";
import ModifierShelf from "../components/ModifierShelf";
import ModifierNavbar from "../components/ModifierNavbar";

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
function expand(group, names, descs, images_mj, images_sd, handleShow, handleClose, statesModals, isMobile, p_end, sd_start, sd_end)
{
  console.log(names);
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
mjprompt0 = {'Utah Teapot, ' + names[k[i]] + p_end}
sdprompt0 = {sd_start + names[k[i]] + sd_end}

id1={k[i + 1] + ".png"}
mj1={images_mj[k[i + 1] + ".png"]}
sd1={images_sd[k[i + 1] + ".png"]}
show1={statesModals[k[i + 1] + ".png"]}
name1 = {names[k[i + 1]]}
desc1 = {descs[k[i + 1]]}
mjprompt1 = {'Utah Teapot, ' + names[k[i + 1]] + p_end}
sdprompt1 = {sd_start + names[k[i + 1]] + sd_end}

id2={k[i + 2] + ".png"}
mj2={images_mj[k[i + 2] + ".png"]}
sd2={images_sd[k[i + 2] + ".png"]}
show2={statesModals[k[i + 2] + ".png"]}
name2 = {names[k[i + 2]]}
desc2 = {descs[k[i + 2]]}
mjprompt2 = {'Utah Teapot, ' + names[k[i + 2]] + p_end}
sdprompt2 = {sd_start + names[k[i + 2]] + sd_end}

id3={k[i + 3] + ".png"}
mj3={images_mj[k[i + 3] + ".png"]}
sd3={images_sd[k[i + 3] + ".png"]}
show3={statesModals[k[i + 3] + ".png"]}
name3 = {names[k[i + 3]]}
desc3 = {descs[k[i + 3]]}
mjprompt3 = {'Utah Teapot, ' + names[k[i + 3]] + p_end}
sdprompt3 = {sd_start + names[k[i + 3]] + sd_end}

id4={k[i + 4] + ".png"}
mj4={images_mj[k[i + 4] + ".png"]}
sd4={images_sd[k[i + 4] + ".png"]}
show4={statesModals[k[i + 4] + ".png"]}
name4 = {names[k[i + 4]]}
desc4 = {descs[k[i + 4]]}
mjprompt4 = {'Utah Teapot, ' + names[k[i + 4]] + p_end}
sdprompt4 = {sd_start + names[k[i + 4]] + sd_end}

handleShow = {handleShow}
handleClose = {handleClose}
isMobile = {isMobile}
group = {group}
></ModifierShelf>
    //  <ModifierCard id={k[i] + ".png"} mj={images_mj[k[i] + ".png"]} sd={images_sd[k[i] + ".png"]} handleShow={handleShow} handleClose={handleClose} show={statesModals[k[i] + ".png"]}></ModifierCard>
    );
  }
  return cards;
}

function expand_mobile(group, names, descs, images_mj, images_sd, handleShow, handleClose, statesModals, isMobile, p_end, sd_start, sd_end)
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
mjprompt0 = {'Utah Teapot, ' + names[k[i]] + p_end}
sdprompt0 = {sd_start + names[k[i]] + sd_end}

id1={k[i + 1] + ".png"}
mj1={images_mj[k[i + 1] + ".png"]}
sd1={images_sd[k[i + 1] + ".png"]}
show1={statesModals[k[i + 1] + ".png"]}
name1 = {names[k[i + 1]]}
desc1 = {descs[k[i + 1]]}
mjprompt1 = {'Utah Teapot, ' + names[k[i + 1]] + p_end}
sdprompt1 = {sd_start + names[k[i + 1]] + sd_end}


handleShow = {handleShow}
handleClose = {handleClose}
isMobile = {isMobile}
group = {group}
></ModifierShelf>
    //  <ModifierCard id={k[i] + ".png"} mj={images_mj[k[i] + ".png"]} sd={images_sd[k[i] + ".png"]} handleShow={handleShow} handleClose={handleClose} show={statesModals[k[i] + ".png"]}></ModifierCard>
    );
  }
  return cards;
}



function AIModifiersPage(props) {
  document.title = props.title;
  const images_mj = importAll(require.context("../teapots_mj", true, /\.(png|jpe?g|svg)$/));
  const images_sd = importAll(require.context("../teapots_sd", true, /\.(png|jpe?g|svg)$/));
  const names_mj = getNames(images_mj);
  props.analytics.page({
    url: "https://rexwang8.github.io/resource/ai/modifiers",
  });


 

  //darkmode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    var element = document.body;
    element.classList.toggle("dark-mode");
  };

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

  let colorsSimple = [];
  let colorsPalletes = [];
  if(props.isMobile == true)
  {
    colorsSimple = expand_mobile("Colors(Simple Colors)", COLORS.colors, COLORS_DESC.colors, images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile, " --ar 16:9 --v 3", "", " color, photo of a Utah Teapot");
    colorsPalletes = expand_mobile("Colors(Palletes)", COLORS.colorpalletes, COLORS_DESC.colorpalletes, images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile, " --ar 16:9 --v 3", "", " color, photo of a Utah Teapot");
  }
  else
  {
    colorsSimple = expand("Colors(Simple Colors)", COLORS.colors, COLORS_DESC.colors, images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile, " --ar 16:9 --v 3", "", " color, photo of a Utah Teapot");
    colorsPalletes = expand("Colors(Palletes)", COLORS.colorpalletes, COLORS_DESC.colorpalletes, images_mj, images_sd, handleShow, handleClose, statesModals, props.isMobile, " --ar 16:9 --v 3", "", " color, photo of a Utah Teapot");
  }

  console.log(colorsPalletes);
 


// //<ModifierCard id="blue.png" mj={images_mj["blue.png"]} handleShow={handleShow} handleClose={handleClose} show={statesModals["blue.png"]}></ModifierCard>
          
const [ddval, setDDVal] = useState("colorsSimple");

  const handleSelect=(e)=>{
    setDDVal(e)
  }

  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url='/resource/ai/modifiers'></SiteNavbar>
          <ModifierNavbar url='/resource/ai/modifiers' dark={darkMode} toggleDark={toggleDarkMode} selected={ddval} handleSelect={handleSelect}></ModifierNavbar>

          <Container fluid className="">
          {ddval == "colorsSimple" ? colorsSimple : <div></div>}
          {ddval == "colorsPalletes" ? colorsPalletes : <div></div>}
          </Container>
       
        </div>
      </div>
    </div>
  );
}

export default AIModifiersPage;
