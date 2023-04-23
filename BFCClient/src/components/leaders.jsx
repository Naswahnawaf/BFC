import React from "react";

function Leaders(props) {
  return <div className ={props.class}>
    <img className={props.picsideclass +  " rounded-circle"} src={props.img} width="200" height="200" alt={props.altname} />
    <h3 className="h3-head">{props.name}</h3>
    <h5>{props.position}</h5><br />
  </div>
}

export default Leaders ;
