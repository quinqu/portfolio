import React from 'react';
import JumboTron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Content from './Content';
import Comp from './Comp';


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
          <Row className="justify-content-center py-5" > 
            <Col md={8} sm={12}> 
                <h1 className="display-3 font-weight-normal">{currentItem}</h1>
                <h3 className="display-5 font-weight-light"> Jane Quintero • Software Engineer</h3> 

            </Col>
          </Row>
        </Container>
      </JumboTron>
      <img className="card-style-image-hp" src={"https://i.pinimg.com/originals/b9/43/19/b9431965fe5939c13ab3d0ba16cdd9c1.jpg"} alt="avatar"/>

        <div className="about">
          <div>
            <p className="justify-content-center"> Hi, my name is Jane. I am an entry level 
            engineer with a passion for learning and building software. I am a musician who lives and 
            breathes music. </p> 
            

            <p> I currently reside in Seattle, but will eventually follow my heart and experience different places. </p>
          </div>
       

          <div> 
            <p> I am currently interning 
              at Gravitational as a Systems Software Engineer and I’m a full-stack 
              development student at Ada Developers Academy, a highly immersive and 
              competitive software engineering school in Seattle. 
            </p>
          </div>
        </div>


        <Content > 
        <div className="contact-title">
        <div>
          <h1 className="contact-header" title="Contact"> Contact </h1>
          <p> Shoot me a message, let's chat!</p>
        </div>
             
        <div className="contact-buttons">
          <a className="btn btn-primary" href="https://linkedin.com/in/quinq">LinkedIn</a>
          <a className="btn btn-secondary git" href="https://github.com/quinqu">Github</a>
          <a className="btn btn-secondary spot" href="https://open.spotify.com/user/quinruby">Spotify</a>
          <a className="btn btn-secondary" href="mailto:quinruby0@gmail.com"> Email </a>
          </div>
        </div>
        </Content>
       
      </div>
    );
  }
}

export default HomePage;