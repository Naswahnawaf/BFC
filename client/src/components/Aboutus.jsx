import React from "react";

function Aboutus(){
  return <div className="aboutus">
    <h1 className="aboutheading">BEST FRIENDS CLUB</h1>
    <h2>Sports & Welfare Association</h2>
    <h4>We Become What We Think About..!</h4>
    <div className="bfcabout">

    <div id="headerSlider" className="carousel slide " data-bs-ride="carousel" >

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="images/bfcdoor.jpeg" className="d-block img-fluid img" alt="..." />
        </div>

          <div className="carousel-item">
            <img src="images/bfchome.jpeg" className="d-block img-fluid img" alt="..." />
          </div>

          <div className="carousel-item">
            <img src="images/group.jpeg" className="d-block img-fluid img" alt="..." />
          </div>
        </div>
       </div>
    </div>

   <div className="row container-fluid">
      <div className="col-lg-5 col-sm-12 location">
      <address className="address">
        <p>SKS Complex, "B" Bazzar,
        Main Road (Near Kareemiya Street),</p>
        <p>Podakkudi,
          Post Code - 614103,</p>
        <p>Koothanallur Taluk,
          Thiruvarur District,</p>
        <p>Tamilnadu,</p>
        <p>India.</p> </address>
      </div>
      <div className="col-lg-4 col-sm-12 divmap">
        <iframe className="map" title="BFC-Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.9756851944417!2d79.50667915823004!3d10.738231498086854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce9f9781cce053d9!2sBest%20friends%20club!5e0!3m2!1sen!2sae!4v1610056376782!5m2!1sen!2sae"
          width="100%" height="350px" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0" />
      </div>

    </div>
    </div>
}
export default Aboutus;
