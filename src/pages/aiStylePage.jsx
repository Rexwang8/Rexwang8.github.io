import { Navbar, Container, Button, Accordion, Nav, NavDropdown, Breadcrumb, Row, Col, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import SiteNavbar from "../components/SiteNavbar";

import MJTab from "./subpage/MJTab";
import DalleTab from "./subpage/DalleTab";

function AIStylePage(props) {
  document.title = props.title;

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

            <p>Check out my comparison of prompt formats.</p>
            <Link to='/resource/ai/prompts'>
              <Button>Prompts</Button>
            </Link>

            <p>Teapot Count, MJ: 229 DALLE-2: 5</p>
          </div>
          <img src='https://s.mj.run/PD_i8SNJkdg' alt='teapot' className='teapotExample'></img>

          <Tabs defaultActiveKey='mj' id='uncontrolled-tab-example' className='mb-3'>
            <Tab eventKey='mj' title='MidJourney'>
              <MJTab></MJTab>
            </Tab>
            <Tab eventKey='dalle2' title='DALLE-2'>
              <DalleTab></DalleTab>
            </Tab>
          </Tabs>

          <div className='footer'>
            <p>Portfolio Website for Rex Wang, Coded in React framework in 2022.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIStylePage;
