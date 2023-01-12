
import { Figure, Button } from "react-bootstrap";
function HomeTab() {
  return (
    /*
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Figure>
              <Figure.Image width={360} height={270} alt='pfp img' src={face} className='mainPFP' />
              <Figure.Caption size='xxl'>
                <h1>Hi, I'm Rex</h1>
              </Figure.Caption>
            </Figure>

            <div className='mainTXTW'>
              <p className='mainTXTTitle'>Computer Engineer Sophomore at Purdue University.</p>
              <p className='mainTXT'>React Frontend, Azure and SQL backend. Learn more below!</p>
              <Button variant='primary' size='lg' eventKey='contact'>
                Contact me
              </Button>
            </div>
          </div>
          <div className='mainPDFW'>
            <embed src={resume} type='application/pdf' width='100%' height='1000px'></embed>
          </div>
        </div>
      </div>
    </div>
    */

    <div>

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
      </div>
      


    </div>
  );
}

export default HomeTab;
