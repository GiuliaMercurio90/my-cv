//Create a Components folder with all the components for this page
//there is a variable of an object with different work experience
//Create a function that use .map method to go through the different properties of the object

import "./Header.css";
import Heading from "./Components/Header";
import Summary from "./Components/Summary";
import WorkExperience from "./Components/WorkExperience";
import Education from "./Components/Education";
import Technologies from "./Components/Technologies";
import Language from "./Components/Languages";
import Skills from "./Components/Skills";

import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const jobs = [
  {
    role: "Web Developer Student",
    work: "HyperionDev Bootcamp",
    city: "Online, London",
    date: "December 2022 - March 2023",
    skills:
      "Learning Javascript, HTML, CSS, React.js and Node.js.;\n Creating different programs and Capstone Projects like a temperature metric converter, Caesar  cipher, APIs calls.\n Creating responsive and dinamic website.\n Use of Object-oriented programming.",
  },
  {
    role: "Head Bartender",
    work: "The Arts Club",
    date: "2021-2022",
    city: "London, UK",
    skills:
      "I supervised, directed, motivated bar staff. \n Organizing staff training.\n Built menu development.",
  },
  {
    role: "Senior Bartender",
    work: "Soho House",
    date: "2018-2021",
    city: "London, UK",
    skills:
      "I showcased strong leadership skills, by teaching my team new skills ensuring the standard is followed and by creating a positive work environment.\n As the position is more in the past, you’ll want to be mindful on how much details you add, and what you call out. You want to make sure there’s space on all the key details on the first page.\nI created innovative and original cocktails from scratch.\nI hosted a range of wine training for the team to established new procedures to ensure service run in a timely manner and increasing the sale.",
  },
  {
    role: "Senior Bartender",
    work: "The Lighterman",
    date: "March 2017- June 2018;",
    city: "London, UK",
    skills:
      "I hosted a range of wine training for the team and established new procedures to ensure service ran in a timely manner and increasing the sales. ",
  },
  {
    role: "Bartender",
    work: "Joe’s Southern table and bar",
    date: "February 2016- March 2017;",
    city: "London, UK",
    skills:
      "I was responsible for creating new innovative cocktails, cashing out and ensuring till procedures were carried out correctly.",
  },
  {
    role: "Bar Supervisor",
    work: "Osteria Adriatico",
    date: "August 2014- January 2016",
    city: "London, UK",
    skills:
      "I was responsible for managing the booking for the day and I was also responsible for organising staff duties, rotas, grievances and disciplinarians.",
  },
];

function addJobs(jobs) {
  let myJobs = jobs.map((works) => {
    return (
      <WorkExperience
        role={works.role}
        work={works.work}
        date={works.date}
        city={works.city}
        skills={works.skills}
      />
    );
  });

  return myJobs;
}

function App() {
  let myJobs = addJobs(jobs);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Heading />
            <Summary />
            <h2 className="underLine">Skills</h2>
            <Skills />
          </Col>
          <Col>
            <h2 className="underLine">Technologies</h2>
            <Technologies />

            <h2 className="underLine">Education and Certification</h2>
            <Education />

            <h2 className="underLine">Languages</h2>
            <Language />
            <h2 className="underLine">Work Experience</h2>
            {myJobs}

            <Col></Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
