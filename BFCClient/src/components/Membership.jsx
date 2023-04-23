import React , { useState } from "react";
const axios = require('axios').default;


function Memberinput(props){
  return <div className="memberinput">
 <label htmlFor= {props.labelid}>{props.Label}</label>
  <input className="inputfields" id={props.labelid} type={props.Inputtype} placeholder={props.Placeholder} required="true"  pattern={props.pattern} name={props.labelid} min={props.min} max={props.max}/>
  </div>
}

function MemberHeader(){
  return <div className="memheader">
   <h6 className="formhead">Since 2005 <span className="regno"> reg141/14 </span> </h6>
   <h2>BEST FRIENDS CLUB SPORTS AND WELFARE ASSOCIATION </h2>
   <h6>(We Become What We Think About)</h6>
   <hr />
   <h4>Membership Form</h4>
   </div>
}

function MemberDetails(){

  return <div className="memdetails">
   <Memberinput Inputtype="text" Label="Your Name" Placeholder="Your Name" labelid="Name" />
   <Memberinput Inputtype="text" Placeholder="Your Father's Name" Label="Father Name" labelid="Father_Name" />
   <Memberinput Inputtype="address" Placeholder="Your Address" Label="Address" labelid="address" />
   <Memberinput Inputtype="tel" Placeholder="Contact Number" Label="Contact No." labelid="num"  />
   <Memberinput Inputtype="date" Placeholder="dd/mm/yyyy" Label="Date Of Birth" labelid="dob" min="1980-01-01" max="2010-12-31"/>
   <label htmlFor="pic" className="membershipppic">Your Photo Here</label>
   <input type="file"  id="pic" name="pic" accept=".jpeg, .png, .jpg"/>
<h3>Rules And Regulations:</h3>
<ul style={{listStyle:"url(images/futbol-regular.svg)"}}>
<li>Everyone Should Actively Take Part And Give Full Effort In Activites Of The Club.</li>
<li>Respecting Seniors And Board Members Is A Must.</li>
<li>The Funds And Donations Given To The Club Will Be Given To The Needy .Once You Give, It Can't Be Refunded. </li>
<li>The Club, Playing Fields And The Surroundings Must Be Kept Hygiene.</li>
<li>Every Action Must Be Taken Under The Supervision Of Seniors And Board Members.</li>
<li>If The Action Taken Without The Supervision Of Seniors Goes Wrong,The Club Will Not Be Responsible.You Alone Should Take The Responsibility. </li>
</ul>
<input type="checkbox" labelid="agreeterms" required="true"/>
<label htmlFor="agreeterms" className="terms">I Have Fully Read And Accepted The Terms And Conditions. </label>
  </div>

}

function Membership(){

  const [result, setResult] = useState(null);

 function receiveData(event) {
   axios
     .then(response => {
       setResult({
         success: response.data.success,
         message: response.data.message
       });
     })
     .catch((err) => {
        setResult({
          success: false,
          message: 'Couldnt connect to the server.Please try again later'
        });
     console.log(err);
      });
 };

  return <div className="membership" style={{background:"rgba(0,0,50,0.4) url(images/bfc.png) no-repeat center "}}>
  <MemberHeader />
  <form actin="/" method="post" onSubmit={receiveData} >
  <MemberDetails />
  <input type="submit" className="btn btn-lg btn-light formbtn" value="Submit" />
  <input type="reset" className="btn btn-lg btn-dark formbtn" />
    <p>{result}</p>
  </form>
  </div>
}

export default Membership;
