import React from "react";

function EventElement(props){
  return  <div className={"carousel-item " + props.class}>
      <img src={"images/" + props.altname + ".jpeg"} className="d-block img-fluid event" alt={props.altname} />
      <div className="carousel-caption eventname">
      <h1>{props.eventname}</h1>
      </div>
    </div>
}


function Activities(props){
  return <div className = "events">
  <h2>{props.eventname}</h2>
    <div id={props.slidername} className="activities">
     <div id={props.innerslidername} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
       <EventElement class="active" eventname={props.event1} altname={props.alt1}/>
        <EventElement eventname={props.event2} altname={props.alt2} />
        <EventElement eventname={props.event3} altname={props.alt3} />
        <EventElement eventname={props.event4} altname={props.alt4} />
      </div>
      <button className="carousel-control-prev carbtn" type="button" data-bs-target={"#"+props.innerslidername} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next carbtn" type="button" data-bs-target={"#"+props.innerslidername} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  </div>
}


function Events(){
  return <div>
  <Activities slidername="slider1" innerslidername="Slider1" eventname="Welfare Activites" event1="" event2="DONATION" event3="FUND RAISING" event4="BLOOD DONATION" alt1="unity" alt2="donation" alt3="charity" alt4="blooddonation" /> <br />
  <Activities slidername="slider2" innerslidername="Slider2" eventname="Tournaments" event1="FOOTBALL" event2="CRICKET" event3="CARROM" event4="BADMINTON" alt1="football" alt2="cricket" alt3="carrom" alt4="badminton" /> <br />
  <Activities slidername="slider3" innerslidername="Slider3" eventname="Excurion" event1="MYSORE" event2="KERALA" event3="KOLKATA" event4="GOA" alt1="mysore" alt2="kerala" alt3="kolkata" alt4="goa" /> <br />
  </div>
}


export default Events;
export {EventElement};
