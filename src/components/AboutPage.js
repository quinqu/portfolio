import React from 'react'
import { Container } from 'react-bootstrap';
import Comp from './Comp';
import Content from './Content';
function AboutPage(props) {
  return (
    <div> 
      <Comp  title={props.title} subtitle={props.subtitle} text={props.text}/> 
      <Content> 


      </Content>
    </div>
  );
}

export default AboutPage;