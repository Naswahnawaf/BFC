import React from "react";

function Updates(){
  return <div className="newupdates" >
  <marquee >
  <h1 className="marqueetext"> We Are Currently Updating...
               Please Visit Again Later For New Updates..!</h1>
  </marquee>
  </div>
}


function Newsfeed(){
  return <div className="newsfeed">
  <Updates />
  </div>
}



export default Newsfeed;
