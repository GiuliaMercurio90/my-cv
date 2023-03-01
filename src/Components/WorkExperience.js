//create a component for the WorkExperience and return a react element to export in App.js

import Card from 'react-bootstrap/Card';


function WorkExperience(props) {
  return (
    <Card >
      <Card.Body>
        <Card.Title>{props.role}</Card.Title>
        <Card.Subtitle>{props.work + '  ' + props.city + '  ' + props.date}</Card.Subtitle>
        <Card.Text>
         {props.skills}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkExperience;
