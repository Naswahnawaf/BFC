import React from "react";
import {BrowserRouter as Router , Route , Switch } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Clubmembers from "./components/Clubmembers.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Events from "./components/Events.jsx";
import Memento from "./components/Memento.jsx";
import Newsfeed from "./components/Newsfeed.jsx";
import Membership from "./components/Membership.jsx";


function App() {
  return <div className="App">
  <Router>
  <Header />
   <Switch>
       <Route path="/" exact component= { () => <Home /> } />
       <Route path="/clubmembers" exact component= { () => <Clubmembers /> } />
       <Route path="/events" exact component= { () => <Events />} />
       <Route path="/newsfeed" exact component= { () => <Newsfeed />} />
       <Route path="/memento" exact component= { () => <Memento />} />
       <Route path="/aboutus" exact component= { () => <Aboutus />} />
       <Route path="/membership" exact component= { () => <Membership />} />
</Switch>
  <Footer />
  </Router>
  </div>
}

export default App;
