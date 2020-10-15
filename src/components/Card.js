import React from 'react';
import CardInfo from './CardInfo'
function Card (props) {

  return (
    <div className="card-style d-inline-block" > 
      <img className="card-style-image" src={props.item.imgsrc} alt={props.item.imgsrc}/>
      <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} />
    </div>
  );
}

export default Card;