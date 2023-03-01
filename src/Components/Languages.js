import Card from "react-bootstrap/Card";

function Language() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Italian: Mother tongue.</Card.Title>
        <Card.Title>English: Advanced.</Card.Title>
        <Card.Title>Spanish: Intermediate.</Card.Title>
        {/*                 
        <Card.Subtitle>{props.work + '  ' + props.city + '  ' + props.date}</Card.Subtitle>
        <Card.Text>
         {props.skills}
        </Card.Text> */}
      </Card.Body>
    </Card>
  );
}

//         <div>
//             <h3>Italian:  Mother tongue.</h3>
//             <h3>English: Advanced.</h3>
//             <h3>Spanish:Intermediate.</h3>
//         </div>
//     )
// }
export default Language;
