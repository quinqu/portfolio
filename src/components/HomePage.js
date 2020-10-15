import React from 'react';
import JumboTron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';


const items = ["I am an Engineer/", "I am a Musician/", "I am a Creator/"];

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1300);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }
  
  render() {
    let currentItem = items[this.state.textIdx % items.length];
    return (
      <div>
      <JumboTron className="bg-transparent jumbotron-fluid p-0 mb-0">  
        <Container fluid={true}> 
          <Row className="justify-content-center py-5"> 
            <Col md={8} sm={12}> 
                <h1 className="display-3 font-weight-normal">{currentItem}</h1>
                <h3 className="lead font-weight-light"> Welcome to my Portfolio </h3> 

            </Col>
          </Row>
        </Container>
      </JumboTron>
      <img className="card-style-image-hp" src={"https://cdn.costumewall.com/wp-content/uploads/2019/08/jane-lane.jpg"} alt="avatar"/>

        <div className="about">
        <p className="justify-content-center"> Hi, my name is Jane. I am an entry level 
          engineer with a passion for learning and building software. I am a musician who lives and 
          breathes music. </p> 
          
          <p> I am currently interning 
          at Gravitational as a Systems Software Engineer and I’m a full-stack 
          development student at Ada Developers Academy, a highly immersive and 
          competitive software engineering school in Seattle. 
          </p>

          <p> I currently reside in Seattle, but will eventually follow my heart and experience different places. </p>
        </div>
      </div>
    );
  }
}

export default HomePage;