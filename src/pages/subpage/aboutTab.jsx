import { Figure, Button, Row, Col, Container, Accordion } from "react-bootstrap";

import casual from "../../assets/images/casual.png";

function AboutTab() {
  return (
    <div>
      <Container fluid='md'>
        <Row>
          <Col>
            <h2 className='about_h2'>About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col className="profileW2" xs={3}>
            <div className='profileW '>
              <Figure>
                <Figure.Image width={640} height={270} alt='pfp img' src={casual} className='mainPFP' />
                <Figure.Caption size='lg'>
                  <p>Caribbean Cruise 2022</p>
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col xs={6}>
            <div className='aboutMeW'>
              <p className='about_subheader1'>Background</p>
              <p className='about_p'>
                Meet Rex Wang, a Computer Engineering senior at Purdue University, with an impressive background that paved the way to his pursuit of technology. Rex was born in St. Joseph, Michigan,
                to a father who is a celebrated PhD in mathematical modeling of physiology and the director of technology at Broad Ocean Motors, Jizhong Wang, and a mother who is a renowned architect
                from China, Fengxia Wang. At a young age, Rex developed a fascination with technology and computers, which was further fueled by the resources available through his father's work.
                After moving to Bolingbrook, Illinois, shortly after 6th grade, he attended Neuqua Valley High School (D204), where he continued to develop his skills and knowledge. Now, as a senior
                at Purdue University, Rex continues to pursue his passion for technology through his major in Computer Engineering.
              </p>

              <hr></hr>

              <p className='about_subheader1'>Interests</p>
              <p className='about_p'>
                Exploring a range of hobbies is one of the ways I like to unwind after a long day. Cooking is one of my strongest passions, especially when it comes to preparing Asian cuisine. There's
                something truly satisfying about working with different ingredients, flavors, and textures to create a delicious dish. In addition, I love immersing myself in the world of gaming,
                especially strategy and 4x games, where I get to flex my strategic thinking and problem-solving skills. Whether I'm playing a classic like Civilization or diving into something new and
                challenging, gaming is a way for me to learn and grow while having fun. When it comes to media, I enjoy reading Chinese webnovels and watching slice of life and romance anime. These
                genres offer a glimpse into everyday life and relationships, providing insight into different cultures and perspectives. I also like to dabble in game development using Unity and have
                created some projects that can be found in the projects tab. Currently, I'm also learning Japanese (2nd year) and hope to improve my language skills through practice and immersion.

                <br></br><br></br>

                Over the summer of 2023, I've picked up a hobby of finance and investing. I've been reading books and watching videos on the topic, and I've been investing in stocks and options.
              </p>

              <hr></hr>

              <p className='about_subheader1'>Professional Experience</p>
              <p className='about_p'>
                In pursuit of practical experience, I have completed several internships in technology-related fields. One of my most notable internships was with a focused on creating the
                "Qilin-Lit-6B" Large Language Model, which was derived from the "GPT-J-6B" LLM and trained on web novels. In this role, I utilized fine-tuning techniques to enhance the model's
                capabilities and improve its overall performance. Additionally, I collaborated on the containerization of Bittensor, a machine learning tool for blockchain applications, learning more
                about cutting-edge technology and the intricacies of software development. Later in this internship, I worked with supercomputer compute clusters through Slurm/SUNK and collaborated with <a href="https://goose.ai/"> Goose.ai </a> 
                to help improve their User Interface.
                <br></br><br></br>
                Another summer internship I completed was at Marquis Energy in Hennepin, IL, where I designed and implemented
                five dashboards using React-JS and REST API. These dashboards were integrated with Azure AD authentication and C# Azure Functions for the backend, which was powered by Azure SQL. In
                addition to upgrading several dashboards and SQL databases to modern standards, I also automated various company processes through the development of Python scripts. I even contributed
                to the development of the company's internal C#-Blazor website. <br></br><br></br>During a summer internship at Broad-Ocean Motors in Westmont, IL, I developed an Android application that utilized
                Bluetooth connectivity to a microcontroller, streamlining the testing process. I was also involved in the configuration and testing of motor units to identify and record critical
                faults, evaluating motor performance using a Magtrol dynamometer and in wind tunnel experiments. My time at Broad-Ocean Motors allowed me to gain practical experience in a professional
                setting while contributing to the development of cutting-edge technologies.
              </p>

              <hr></hr>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>More Text Placeholder</Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutTab;
