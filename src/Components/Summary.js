//create a component for the Summary and return a react element to export in App.js
import Card from 'react-bootstrap/Card';



function Summary() {
  return (
    <Card >
      <Card.Body>
        <Card.Title className='underLine'><h1>Summary</h1></Card.Title>
        <Card.Text>
         <p>I started to self-taught Python and Javascript languages and from the first moment I started coding I was very excited about the programming world. I found the Bootcamp for Web Development where I get selected between ten thousand applications and only eight of us had the right score to start the course.
            I discovered a big passion for learning Javascript where I can use my strong problem-solving and detail-oriented skills. I'm really enjoying building website through HTML, CSS and Bootstrap.
            I am a hardworking and motivated individual. I can multitask to achieve timely goals and objectives. As a good manager, I delivered quality service to customers and lead, motivated, and supervised staff to excellent performance.I communicated and delivered a presentation of information at public events and conferences, reaching out to wider audiences.
            I have the problem-solving ability and have dealt with customer queries sensitively. I am a team player and can also work on my initiative.I love creating new programs and codes and I can’t wait to find a position where I can bring all my knowledge and where I can gain more experience growing with the company.
</p>
        </Card.Text>
 
      </Card.Body>
    </Card>
  );
            
           
}

export default Summary;