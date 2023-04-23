import React from "react";
import Leaders from "./leaders.jsx";


function Home() {

  return  <div className="home">

   <div className="main-heading">

     <h1 className="heading" > BEST FRIENDS CLUB</h1>
     <p className="describe" >
       We Become What We Think About..!
     </p>
   </div>


   <div className="middle-container">
     <h2 className="abbrev">BEST FRIENDS CLUB SPORTS AND SOCIAL WELFARE ASSOCIATION</h2>

     <div className="profilepic">
       <img className="pic" src="images/bfc.png" width="350" height="280" alt="my-profilepic" />
       <h4 className="since">Since 2005</h4>
     </div>
     
     <hr />
     <h3 className="board" >BOARD OF DIRECTORS</h3>
     <div className="allmembers" id="homee" >

       <Leaders class="board-memberleft"  picsideclass="left-side" name="Yaseer Khan" altname="yaseer-pic" img="images/YaseerKhan.jpeg" position="CHAIRMAN" />
       <Leaders class="board-memberright" picsideclass="right-side"  name="Muneer Ahamed" altname="muneer-pic" img="images/MuneerAhamed.jpeg" position="VICE-CHAIRMAN" />
       <Leaders class="board-memberleft" picsideclass="left-side" name="Musthaq Ahamed" altname="musthaq-pic" img="images/MusthaqAhamed.jpeg" position="TREASURER" />
       <Leaders class="board-memberright" picsideclass="right-side"  name="Mohamed Rayan" altname="rayan-pic" img="images/MohamedRayan.jpeg" position="SECRETARY" />
       <Leaders class="board-memberleft" picsideclass="left-side" name="Mohammed Irsath" altname="irsath-pic" img="images/MohamedIrsath.jpeg" position="COMMUNICATION ORGANIZER" />
       <Leaders class="board-memberright" picsideclass="right-side"  name="Mohamed Vasirdeen" altname="vasir-pic" img="images/MohamedVasirdeen.jpeg" position="COMMUNICATION ORGANIZER" />

     </div>

   </div>
    </div>
}

export default Home;
