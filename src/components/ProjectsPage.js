import React from 'react';
import Comp from './Comp';
import Circular from './Circular';

function ProjectsPage(props) {
  return (
    <div>
      <Comp title={props.title} subtitle={props.subtitle} text={props.text}/> 
      <Circular />
    </div>

  );
}

export default ProjectsPage;