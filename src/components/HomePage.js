import React from 'react';
import JumboTron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Content from './Content';
import Comp from './Comp';


const items = ["Engineer/", "Musician/", "Creator/", "Artist/"];

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
      <div className="header">
      <JumboTron className="bg-transparent jumbotron-fluid p-0 mb-0">  
        <Container fluid={true}> 
          <Row className="py-5" > 
            <Col md={8} sm={12}> 
              <div className="header-title">
                <h1 className="display-3 font-weight-normal">{currentItem}</h1>
                <h3 className="display-5 font-weight-light"> Hello, I am Jane </h3> 
              </div>
            </Col>
          </Row>
        </Container>
      </JumboTron>
      </div>

      <h5 className="intro-home"> Just another techie musician. Please take a look at my projects, music, and experience. </h5>
      
        <div className="about">
          <div>
           <h5 className="about-titles"> <b>Software Engineer</b> </h5>
           <i className="about-titles">Teleport</i>
          </div>

          <p> 
          <i>Helping enabling engineers to quickly access any computing resource anywhere. Designed and developed features for our internal benchmarking tool to better 
          analyze our systems performance and improve accuracy. Tools used in my everyday job include, Golang, AWS, and Terraform. 
          </i></p>
          <p> <i>A highly competitive and immersive software engineering school for underrepresented develeopers. 
          At Ada Developers Academy I was taught full-stack web development covering HTML/CSS, JavaScript, Ruby on Rails, 
          and Computer Science fundamentals. Along with TDD, paired programming, and agile development practices. 
          </i></p>

          <div>
          <h5 className="about-titles"> <b>Full Stack Engineering</b></h5>
          <i className="about-titles" >Ada Developers Academy </i>
          </div>

        </div>
      <div> 
       
        <p> </p>
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
          <a className="btn btn-secondary" href="mailto:quinruby0@gmail.com"> Email </a>
          </div>
        </div>
        </Content>
       
      </div>
    );
  }
}

export default HomePage;