import React from 'react';
import Comp from './Comp';

function ContactPage(props) {
  return (
    <Comp title={props.title} subtitle={props.subtitle} text={props.text}/> 
  );
}

export default ContactPage;