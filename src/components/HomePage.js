import React from 'react';
import Comp from './Comp';
import Circular from './Circular';


function HomePage(props) {
  return (
    <div>
    <Comp className="abt-title" title={props.title} subtitle={props.subtitle} text={props.text}/> 
    </div>
  );
}

export default HomePage;