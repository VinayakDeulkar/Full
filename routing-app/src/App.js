
import React from 'react';
import {BrowserRouter as  Router,Route,Switch,Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Gallary from './Component/Gallary';
import Notfound from './Component/Notfound';

function App() {
  return (
    <>
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Gallary">Gallary</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About}/>
        <Route path="/Contact" exact component={Contact}/>
        <Route path="/Gallary" exact component={Gallary}/>
        <Route component={Notfound}/>
      </Switch>
    </Router>
      </>
  );
}

export default App;
