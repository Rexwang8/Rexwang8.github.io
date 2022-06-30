import face from "../../assets/images/face.jpg";
import resume from "../../assets/Wang Resume Software 2022 V4.0.pdf";

import { Figure, Button } from "react-bootstrap";
function HomeTab() {
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Figure>
              <Figure.Image
                width={360}
                height={270}
                alt="pfp img"
                src={face}
                className="mainPFP"
              />
              <Figure.Caption size="xxl">
                <h1>Hi, I'm Rex</h1>
              </Figure.Caption>
            </Figure>

            <div className="mainTXTW">
              <p className="mainTXTTitle">
                Computer Engineer Sophomore at Purdue University.
              </p>
              <p className="mainTXT">
                React Frontend, Azure and SQL backend. Learn more below!
              </p>
              <Button variant="primary" size="lg" eventKey="contact">
                Contact me
              </Button>
            </div>
          </div>
          <div className="mainPDFW">
            <embed
              src={resume}
              type="application/pdf"
              width="100%"
              height="1000px"
            ></embed>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTab;
