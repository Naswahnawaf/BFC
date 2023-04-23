import React from "react";
import { seniors , juniors , subjuniors } from "../contacts.js";


function Members(props) {

  return <div className={props.Class} data-aos={props.animation} data-aos-delay="600" data-aos-duration="1000">
   <img className={props.imgClass +  " rounded-circle"} src={ "images/" +props.FName + props.LName+".jpeg" } width="200" height="200" alt= {props.FName +props.LName+ "-pic"} />
     <h3 className="h3-head">{props.FName} {props.LName}<span className="degree"><em>{props.Degree}</em></span></h3>
       <h6>{props.Dob}</h6>
       <h6>{props.Blood_Group} </h6>
     <h6><a className="number" href={"https://wa.me/" + props.Ph }>{props.Ph}</a></h6>
   </div>
}

function mappingContacts(contact , index ) {

   return <Members
   key = {index}
   FName = {contact.FName}
   LName = {contact.LName}
   PicName = {contact.PicName}
   Degree = {contact.Degree}
   Dob = {contact.Dob}
   Blood_Group = {contact.Blood_Group}
   Ph ={'+'+contact.Ph}
   Class ={ index%2 === 0 ? "board-memberleft" : "board-memberright" }
   imgClass ={ index%2 === 0 ? "left-side" : "right-side" }
   animation ={ index%2 === 0 ? "fade-right" : "fade-left" }
    />
};


function Clubmembers(props){
  console.log(props);
  return <div>
  <h2 id="club-members" >PILLARS OF THE CLUB</h2>

  <div id="list-members" className="list-group">

    <a className="list-group-item list-group-item-action list" href="#list-item-1">SENIORS</a>
    <a className="list-group-item list-group-item-action list" href="#list-item-2">JUNIORS</a>
    <a className="list-group-item list-group-item-action list" href="#list-item-3">SUB-JUNIORS</a>

  </div>

  <div data-spy="scroll" data-target="#list-members" data-offset="0">
    <h2 id="list-item-1" className="members-list">SENIORS</h2>
     { seniors.map(mappingContacts) }
    <h2 id="list-item-2" className="members-list">JUNIORS</h2>
     { juniors.map(mappingContacts) }
    <h2 id="list-item-3" className="members-list">SUB-JUNIORS</h2>
      { subjuniors.map(mappingContacts) }
  </div>
  </div>
}

export default Clubmembers;
