import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
  // Naviation Bar
  return <nav className = "navbar navbar-expand-lg navbar-dark sticky-top" >

    < Link className="navbar-brand" to ="/"> <img className ="nav-icon rounded-circle" src="images/bfcicon.jpg" alt="logo" /> </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto" >
    <li className={`nav-item ${ props.location.pathname === "/clubmembers" && "active" }`} >
    <Link className="nav-link headerlink" to="/clubmembers" data-toggle="collapse" data-target=".navbar-collapse.show">Club Members</Link></li>
    <li className={`nav-item ${ props.location.pathname === "/events" && "active" }`} >
    <Link className="nav-link headerlink" to="/events" data-toggle="collapse" data-target=".navbar-collapse.show">Activities</Link></li>
    <li className={`nav-item ${ props.location.pathname === "/newsfeed" && "active" }`} >
    <Link className="nav-link headerlink" to="/newsfeed" data-toggle="collapse" data-target=".navbar-collapse.show">News Feed</Link></li>
    <li className={`nav-item ${ props.location.pathname === "/memento" && "active" }`} >
    <Link className="nav-link headerlink" to="/memento" data-toggle="collapse" data-target=".navbar-collapse.show">Memento</Link></li>
    <li className={`nav-item ${ props.location.pathname === "/aboutus" && "active" }`} >
    <Link className="nav-link headerlink" to="/aboutus" data-toggle="collapse" data-target=".navbar-collapse.show">About Us</Link></li>
    <li className="nav-item">
    <Link className="nav-link buttonlink" to="/membership" data-toggle="collapse" data-target=".navbar-collapse.show">
    <button className="btn btn-lg btn-primary">Become a Member</button>
    </Link>
    </li>
    </ul>
    </div>

    </nav>
}

export default withRouter(Header);
