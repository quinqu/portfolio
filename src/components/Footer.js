import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3"> 
          <Col className="p-0" md={3} sm={12}>
          </Col>
          <Col className= "p-0 d-flex justify-content-end" md={2}> 
            <p>&copy; 2020 Jane Quintero</p> 
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default footer;