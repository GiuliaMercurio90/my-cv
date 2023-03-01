//create a component for the technologies and return a react element to export in App.js
import Card from 'react-bootstrap/Card';

function Technologies() {

    return (
        
        <Card >
            <Card.Body>
                <Card.Title>Languages: Javascript.</Card.Title>
                <Card.Title>Markup language: HTML.</Card.Title>
                <Card.Title>Style language: CSS</Card.Title>
                <Card.Title>Back-end languages: Node.js, React.js.</Card.Title>
                <Card.Title>Software Version Control Platform: Git, Github.</Card.Title>
                <Card.Title>Other: JSON, OOP, Data structures, Data Formats, APIs, Algorithms.</Card.Title>

         
            </Card.Body>
        </Card>
    )
}
export default Technologies;



//             <h3>Languages: Javascript.</h3>
//             <h3>Markup language: HTML.</h3>
//             <h3>Style language: CSS.</h3>
//             <h3>Back-end languages: Node.js, React.js.</h3>
//             <h3>Software Version Control Platform: Git, Github.</h3>
//             <h3>Other: JSON, OOP, Data structures, Data Formats, APIs, Algorithms.</h3>
//         </div>

//     )
// }


