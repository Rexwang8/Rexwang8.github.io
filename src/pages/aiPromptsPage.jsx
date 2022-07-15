import { Navbar, Container, Button, Accordion, Nav, NavDropdown, Breadcrumb, Row, Col } from "react-bootstrap";
import SiteNavbar from "../components/SiteNavbar";
import { Link } from "react-router-dom";

import TeapotCardLarge from "../components/teapotCardLarge";
import RowStyleDiv from "../components/rowdiv";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function AIPromptsPage(props) {
  document.title = props.title;
  const images = importAll(require.context("../teapots_prompts", true, /\.(png|jpe?g|svg)$/));
  props.analytics.page({
    url: 'https://rexwang8.github.io/resource/ai/prompts'
  })
  return (
    <div className='bg2'>
      <div className='aspect'>
        <div className='bg1'>
          <SiteNavbar url='/resource/ai/prompts'></SiteNavbar>
          <div className='textAICenter'>
            <h1>Engineering a good prompt (Midjourney)</h1>

            <p>
              Midjourney, as a text to image model, uses text prompts to tell it what to generate. Prompts can be structured in many ways, and this page compares the effects of prompt structure and
              weighting. For many effects, styles, artists etc, MidJourney doesn't know what "x in the style of y" looks like exactly, but looking through it's dataset, it knows how pictures in the
              style of y tend to look like, and their characteristics. By understanding how each style or keyword affects the image as a whole, we can create what we imagine
            </p>
            <p>Thanks to Tallath#0627 for running the prompts and research.</p>

            <h5>Contact me on discord at bob#1236 for suggestions, comments or pictures of teapots.</h5>
            <p>Check out my teapot collection.</p>
            <Link to='/resource/ai/teapot'>
              <Button>Teapots</Button>
            </Link>
          </div>
          <img src='https://s.mj.run/PD_i8SNJkdg' alt='teapot' className='teapotExample'></img>

          <Accordion defaultActiveKey='0' className='accordCenter'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Seperators and Style Prompting</Accordion.Header>
              <Accordion.Body>
                <Container>
                 <RowStyleDiv title='Baseline' ></RowStyleDiv>
                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_0.png"]} prompt='/imagine Utah Teapot –-ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_1.png"]} prompt='/imagine Wood –-ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_2.png"]} prompt='No Prompt' />
                  </Row>
                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_3.png"]} prompt='/imagine Utah Teapot -–ar 16:9' />
                    <TeapotCardLarge img={images["prompt_woodteapot_4.png"]} prompt='/imagine Utah Utah Teapot Wood –-ar 16:9' />
                    <TeapotCardLarge img={images["prompt_woodteapot_5.png"]} prompt='/imagine Wood –-ar 16:9' />
                  </Row>
                  <RowStyleDiv title='Seperators' ></RowStyleDiv>
                  
                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_6.png"]} prompt='/imagine Utah Teapot Wood --ar 16:9 –-seed 1' />
                    <TeapotCardLarge img={images["prompt_woodteapot_7.png"]} prompt='/imagine Utah Teapot Wood --ar 16:9 –-seed 1' />
                    <TeapotCardLarge img={images["prompt_woodteapot_8.png"]} prompt='/imagine Utah Teapot Wood --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_11.png"]} prompt='/imagine utah teapot wood --ar 16:9 –-seed 1' />
                    <TeapotCardLarge img={images["prompt_woodteapot_10.png"]} prompt='/imagine Utah Teapot :wood: --ar 16:9 –-seed 1' />
                    <TeapotCardLarge img={images["prompt_woodteapot_12.png"]} prompt='/imagine UTAH TEAPOT WOOD --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_13.png"]} prompt='/imagine Utah Teapot Wood! --ar 16:9 –-seed 1' />
                    <TeapotCardLarge img={images["prompt_woodteapot_14.png"]} prompt='/imagine Utah Teapot? Wood --ar 16:9 –-seed 1' />
                    <TeapotCardLarge img={images["prompt_woodteapot_15.png"]} prompt='/imagine UtAh TeApOt WoOd --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_16.png"]} prompt='/imagine Utah Teapot, Wood --ar 16:9 –-seed 1' />
                    <TeapotCardLarge img={images["prompt_woodteapot_17.png"]} prompt='/imagine Utah Teapot + Wood --ar 16:9 –-seed 1' />
                    <TeapotCardLarge img={images["prompt_woodteapot_18.png"]} prompt='/imagine Utah Teapot - Wood --ar 16:9 –-seed 1' />
                  </Row>
                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_19.png"]} prompt='/imagine Utah Teapot | Wood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_20.png"]} prompt='/imagine Utah Teapot || Wood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_21.png"]} prompt='/imagine Utah Teapot : Wood --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_22.png"]} prompt='/imagine Utah Teapot. Wood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_23.png"]} prompt='/imagine Utah Teapot < Wood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_24.png"]} prompt='/imagine Utah Teapot &gt; Wood --ar 16:9 –-seed 1' />
                  </Row>
                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_25.png"]} prompt='/imagine Utah Teapot & Wood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_26.png"]} prompt='/imagine Utah Teapot && Wood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_27.png"]} prompt='/imagine Utah Teapot or Wood --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_28.png"]} prompt='/imagine Utah Teapot and Wood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_29.png"]} prompt='/imagine Utah Teapot xor Wood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_34.png"]} prompt='/imagine Utah Teapot\nWood --ar 16:9 –-seed 1' />
                  </Row>
                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_35.png"]} prompt='/imagine Utah TeapotWood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_36.png"]} prompt='/imagine Utah_Teapot_Wood --ar 16:9 –-seed 1' />
                  </Row>
                  <RowStyleDiv title='Style Transfer Statements' ></RowStyleDiv>
                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_30.png"]} prompt='/imagine Utah Teapot in the form of Wood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_31.png"]} prompt='/imagine Utah Teapot made of Wood --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["prompt_woodteapot_32.png"]} prompt='/imagine Utah Teapot made by Wood --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["prompt_woodteapot_33.png"]} prompt='/imagine Utah Teapot in the style of Wood --ar 16:9 –-seed 1' />
                  </Row>
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Weighting</Accordion.Header>
              <Accordion.Body>
                <Container>
                <RowStyleDiv title='Weighting' ></RowStyleDiv>
                  <Row>
                    <TeapotCardLarge img={images["weighting_woodteapot_0.png"]} prompt='/imagine Utah Teapot::1 Wood::.1 -–ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_1.png"]} prompt='/imagine Utah Teapot::.9 Wood::.2 -–ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_2.png"]} prompt='/imagine Utah Teapot::.8 Wood::.3 --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["weighting_woodteapot_3.png"]} prompt='/imagine Utah Teapot::.7 Wood::.4 --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_4.png"]} prompt='/imagine Utah Teapot::.6 Wood::.5 --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_5.png"]} prompt='/imagine Utah Teapot::5 Wood::5 --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["weighting_woodteapot_6.png"]} prompt='/imagine Utah Teapot:: Wood:: --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_7.png"]} prompt='/imagine Utah Teapot::.5 Wood::.6 --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_8.png"]} prompt='/imagine Utah Teapot::.4 Wood::.7 --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["weighting_woodteapot_9.png"]} prompt='/imagine Utah Teapot::.3 Wood::.8 --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_10.png"]} prompt='/imagine Utah Teapot::.2 Wood::.9 --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_11.png"]} prompt='/imagine Utah Teapot::1 Wood::1 --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["weighting_woodteapot_12.png"]} prompt='/imagine Utah Teapot Wood::1 Wood::2 --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_13.png"]} prompt='/imagine Utah Teapot::1 Wood::-1 --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_14.png"]} prompt='/imagine Utah Teapot::-1 Wood::1 --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["weighting_woodteapot_15.png"]} prompt='/imagine Utah Teapot::0 Wood::0 --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_18.png"]} prompt='/imagine Utah Teapot::-.125 Wood::-.125 --ar 16:9 –-seed 1' />

                    <TeapotCardLarge img={images["weighting_woodteapot_17.png"]} prompt='/imagine Utah Teapot::0 Wood::-.125 --ar 16:9 –-seed 1' />
                  </Row>

                  <Row>
                    <TeapotCardLarge img={images["weighting_woodteapot_18.png"]} prompt='/imagine Utah Teapot::-.25 --ar 16:9 –-seed 1' />
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

export default AIPromptsPage;
