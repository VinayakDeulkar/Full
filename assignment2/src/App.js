
import React from "react";
import {BrowserRouter as  Router,Route,Switch} from 'react-router-dom';
import Contact from "./Component/Contact";
import Employee from "./Component/Employee";
import List from "./Component/List";
import Nav from "./Component/Nav";
import NotFound from "./Component/NotFound";
function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Employee}/>
          <Route path="/List" exact component={List}/>
          <Route path="/city"  component={Contact}/>
          <Route component={NotFound}/>
        </Switch>

      </Router>
    </>
  );
}

export default App;
