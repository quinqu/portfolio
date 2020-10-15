import React from 'react';
import CardInfo from './CardInfo'
function Card (props) {

  return (
    <div> 
      <img className="" src={props.item.imgsrc} alt={props.item.imgsrc}/>

    </div>
  );
}

export default Card;