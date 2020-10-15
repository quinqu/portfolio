import React from 'react'
import {useSpring, animated} from 'react-spring'

function CardInfo(props) {


  const style  = useSpring({opacity: 1, from: { opacity: 0}})

  return (
    <animated.div className="card-style-info" style={style}> 
      <p className="card-style-title"> {props.title}</p>
      <p>{props.subtitle}</p>
      <a href={props.link} style={{color: "black", textDecoration: "underline"}}> <p> View Project </p></a>
    </animated.div> 
    
  );
}

export default CardInfo;