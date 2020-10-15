import React from 'react';
import { Container } from 'react-bootstrap';
import JumboTron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Comp(props) {

  return (
    <JumboTron className="bg-transparent jumbotron-fluid p-0">  
      <Container fluid={true}> 
          <Row className="justify-content-center py-5"> 
            <Col md={8} sm={12}> 
                { props.title && <h1 className="display-3 font-weight-normal"> {props.title}</h1> }
                { props.subtitle && <h3 className="display-5 font-weight-light"> {props.subtitle}</h3> }
                { props.text && <h3 className="lead font-weight-light"> {props.text}</h3> }
            </Col>
          </Row>
      </Container>
    </JumboTron>
  );
}

export default Comp;