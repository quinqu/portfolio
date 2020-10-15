import React from 'react'
import Comp from './Comp';

function AboutPage(props) {
  return (
    <Comp title={props.title} subtitle={props.subtitle} text={props.text}/> 
  );
}

export default AboutPage;