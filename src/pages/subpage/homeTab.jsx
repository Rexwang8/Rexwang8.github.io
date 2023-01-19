
import { Figure, Button, Row, Col } from "react-bootstrap";
import resume from "../../assets/Wang Resume Software 2022 V4.3.3.pdf";

function HomeTab() {
  return (
    <div>

    <Row>

      <div className="home_twrap" id="home_twrap">
      <div className="home_tline">

      
      <p className="home_tword home_tfancyword">Rex Wang</p>
      <p className="home_tword">&nbsp; &nbsp;Full</p>
      <p className="home_tword">stack</p>
      </div>

      <div className="home_tline">
      <p className="home_tword ">Machine &nbsp;</p>
      <p className="home_tword">Learning</p>
      </div>

      <div className="home_tline">
      <a href="mailto:wang5009@purdue.edu" className="home_tword home_tfancyword">wang5009@purdue.edu</a>
      </div>

      <div className="home_tline">
      <a href="#resume" className="home_tword home_tfancyword">Resume</a>
      <a href="https://github.com/Rexwang8?tab=repositories" className="home_tword home_tfancyword">Github</a>
      </div>
      </div>
      

      
    </Row>
    <Row className="HomePageDivider"><Col><p>Divider</p></Col></Row>
    <Row><Col><p className="AIPageDark HomePageMargin5">Classes</p></Col></Row>
    <Row><Col><p className="AIPageDark HomePageMargin5">Spring 2022 <br></br> ECE 461 - Software Engineering<br></br> ECE 302 - Probability for Electrical and Computer Engineering <br></br> ECE 404 - Cybersecurity <br></br></p></Col></Row>
    <Row><Col><p className="AIPageDark HomePageMargin5">Fall 2022 <br></br> ECE 301 - Signals and Systems<br></br> ECE 368 - Datastructures <br></br> ECE 20875 - Python for Data Science <br></br> ECE 362 - Microprocessor Systems and Interfacing <br></br> ECE 39595 - Object oriented programming with C++ <br></br></p></Col></Row>
    <Row><Col><p className="AIPageDark HomePageMargin5">Spring 2021 <br></br> ECE 20002 - Electrical Engineering Fundamentals II<br></br> ECE 264 - Advanced C Programming <br></br> ECE 270 - Introduction to Digital System Design <br></br> </p></Col></Row>
    <Row><Col><p className="AIPageDark HomePageMargin5">Fall 2021 <br></br> ECE 20001 - Electrical Engineering Fundamentals I<br></br>  </p></Col></Row>
    <Row><Col><div className='mainPDFW' id="resume">
        <embed src={resume} type='application/pdf' width='100%' height='1000px'></embed>
      </div></Col></Row>
    </div>
  );
}

export default HomeTab;
