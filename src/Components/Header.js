//import the different SVG icon and use in the function to create a react element
// export and import in App.js

import { EnvelopeAt, Geo } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";
// import EnvelopeAt  from "react-bootstrap-icons";
import myLogo from "./myphoto.jpg";
import Card from "react-bootstrap/Card";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

function Heading() {
  return (
    <div id="contain">
      <Card id="header">
        <Card.Img id="image" variant="top" src={myLogo} alt="Myself" />
        <Card.Body className="styleHeader">
          <Card.Title>
            <h1>Giulia Mercurio</h1>
          </Card.Title>
          <Card.Title>
            <h2 className="underLine">Junior Web Developer</h2>
          </Card.Title>

          <Card.Text className="details">
            <h5
              onClick={(e) => {
                window.location.href = "mailto:example@email.com";
              }}
            >
              <EnvelopeAt className="svg" />
              mercuriogi@gmail.com
            </h5>
          
            <h5>
              <Geo className="svg" />
              N11 1PA , London, UK
            </h5>
          
            <h5>
              <Telephone className="svg" />
              +44 7477 568677
            </h5>
            <h5>
              <Github className="svg" /> github.com/GiuliaMercurio90
            </h5>

            <h5>
              <Linkedin className="svg" />
              linkedin.com/in/giulia-mercurio-075b0313a/
            </h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    // <div className='personalDetails'>
    //     <h1>Giulia Mercurio</h1>
    //     <h2>Junior Web Developer</h2>
    //     <div className='mailSVG'>
    //     <img className='mailSVG' src={Mail} alt = 'My email' />
    //     <h3 className='mailSVG'>mercuriogi@gmail.com</h3>
    //     </div>
    //     <br />
    //     <div className='locationSVG'>
    //     <img className='locationSVG' src={Icon} alt='My Location' />
    //     <h3 className='locationSVG'>N11 1PA , London, UK</h3>
    //     </div>
    //     <br />
    //     <div className='phoneSVG'>
    //     <img className='phoneSVG' src={Phone} alt='My Phone' />
    //     <h3 className='phoneSVG'>+44 7477 568677</h3>
    //     </div>

    // </div>
  );
}
export default Heading;
