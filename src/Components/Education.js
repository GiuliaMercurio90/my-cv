//create a component for the Education, export and import in App.js
import Card from 'react-bootstrap/Card';

function Education(){

  return (
    <Card >
          <Card.Body>
              <Card.Title>HyperionDev Bootcamp Web Development, online</Card.Title>
              <Card.Subtitle>December 2022 - March 2023</Card.Subtitle>
               <Card.Title>“Social Science” High School Diploma (equivalent GCSE), Rome, Italy</Card.Title>
              <Card.Subtitle>July 2010</Card.Subtitle>
      </Card.Body>
    </Card>

    //     <h3>HyperionDev Bootcamp Web Development, online </h3>
    //     <h4>December 2022 - March 2023 </h4>
    //     <h3>“Social Science” High School Diploma (equivalent GCSE), Rome, Italy	</h3>
    //     <h4>July 2010</h4>
    // </div>
  );
}
export default Education;