import React from "react";

function GroupCarousel(){
  return <div className = "groupcarousel">
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block grppic" src="images/seniors.jpeg" alt="Seniors-pic" />

      </div>
        <div className="carousel-item ">
          <img className="d-block grppic" src="images/juniors.jpeg" alt="Juniors-pic" />
        </div>
        <div className="carousel-item">
          <img className="d-block grppic" src="images/subjuniors.jpeg" alt="SubJuniors-pic" />
        </div>
      </div>
    </div>
  </div>
}

function Tab(){
  return <nav className= "tab">
  <div class="nav nav-tabs " id="nav-tab" role="tablist">
    <a class="nav-link active tablinks" id="nav-grppic-tab" data-toggle="tab" href="#nav-grppic" role="tab" aria-controls="nav-grppic" aria-selected="true">Groupfies</a>
    <a class="nav-link tablinks" id="nav-trophy-tab" data-toggle="tab" href="#nav-trophy" role="tab" aria-controls="nav-trophy" aria-selected="false">Trophies</a>
  </div>
</nav>
}

function PicColumn(props){
  return   <div className="col-lg-4 col-sm-6 seperatepicsdiv">
    <img className="pics" src={"images/" + props.picnum + ".jpeg"} alt="pic" />
    </div>
}

function Piczgrp(props){
return <div className="tab-content mementosection" id="nav-tabContent">
<div className="row tab-pane fade show active mementodiv" id="nav-grppic" role="tabpanel" aria-labelledby="nav-grppic-tab" style={{background:"url(images/bfc.png) no-repeat center"}}>
<PicColumn  picnum="1" />
<PicColumn  picnum="2"/>
<PicColumn  picnum="3"/>
<PicColumn  picnum="4"/>

</div>

<div className="row tab-pane fade mementodiv" id="nav-trophy" role="tabpanel" aria-labelledby="nav-trophy-tab" style={{background:"url(images/bfc.png) no-repeat center"}}>
<PicColumn  picnum="trophy1" />
<PicColumn  picnum="trophy2"/>
<PicColumn  picnum="trophy3"/>
<PicColumn  picnum="trophy4"/>
</div>

  </div>
}




function Memento(){
  return <div>
<GroupCarousel />
<Tab />
<Piczgrp />
  </div>
}

export default Memento;
