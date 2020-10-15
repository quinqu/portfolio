import React from 'react';
import Comp from './Comp';

function MusicPage(props) {
  return (
    <Comp title={props.title} subtitle={props.subtitle} text={props.text}/> 
  );
}

export default MusicPage;