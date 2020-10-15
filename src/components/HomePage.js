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
      <JumboTron className="bg-transparent jumbotron-fluid p-0">  
        <Container fluid={true}> 
          <Row className="justify-content-center py-5"> 
            <Col md={8} sm={12}> 
                <h1 className="display-3 font-weight-normal">{currentItem}</h1>
                <h3 className="lead font-weight-light"> Welcome to my Portfolio </h3> 

            </Col>
          </Row>
        </Container>
      </JumboTron>
  );
}
}

export default HomePage;