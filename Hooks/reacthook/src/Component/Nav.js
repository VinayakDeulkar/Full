import React from 'react'
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom'
import Context from './Context'
import Product from './Product'
import Reducer from './Reducer'
import TodoList from './TodoList'

export default function Nav() {
    return (
        <div>
            <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">TodoList</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/Product">Product</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/Context">Context</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/Reducer">Reducer</Link>
      </li>
      
    </ul>
  </div>
</nav>
                
                
                <Switch>
                    <Route path="/" exact component={TodoList}/>
                    <Route path="/Product" exact component={Product}/>
                    <Route path="/Context" exact component={Context}/>
                    <Route path="/Reducer" exact component={Reducer}/>
                </Switch>
            </Router>
        </div>
    )
}
