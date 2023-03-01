//create a component for the Skills and return a react element, export and import in App.js

import Card from "react-bootstrap/Card";


function Skills(){

    return (
      <Card id="skills">
        <Card.Body>
          <Card.Title className="details">Problem-solving:</Card.Title>
          <Card.Subtitle>
            {" "}
            I was dealing with guests complaints and I was always making sure to
            find a good solution to achieve the guest satisfaction.
          </Card.Subtitle>
          <Card.Title className="details">Administrator:</Card.Title>
          <Card.Subtitle>
            {" "}
            My role was involving a lot of paperwork on the side, like dealing
            with suppliers, recruitment process, daily order, and stock-taking.
          </Card.Subtitle>

          <Card.Title className="details">Multi-tasking:</Card.Title>
          <Card.Subtitle>
            {" "}
            I was leading a team, organizing paperwork and give a high customers
            service in a daily shift.
          </Card.Subtitle>

          <Card.Title className="details">Good Resolution:</Card.Title>
          <Card.Subtitle>
            {" "}
            I was organizing and delivering staff training to develop staff. I
            showcased strong leadership skills, by teaching my team new skills,
            ensuring the standard was followed and by creating a positive work
            environment.
          </Card.Subtitle>

          <Card.Title className="details">Innovation: </Card.Title>
          <Card.Subtitle>
            {" "}
            I was increasing sell and customer satisfaction creating new drinks
            and new concept menu.
          </Card.Subtitle>

          <Card.Title className="details">Upselling: </Card.Title>
          <Card.Subtitle>
            I was in a company where the wine sales were going down and through
            my staff training and daily briefing, increasing the selling.
          </Card.Subtitle>

          <Card.Title className="details">Till:</Card.Title>
          <Card.Subtitle>
            {" "}
            I was in charge of the procedure and to monitor in a daily basis.
          </Card.Subtitle>
        </Card.Body>
      </Card>

      
    );
}
export default Skills;



