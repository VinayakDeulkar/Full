import React, { Component } from 'react'

import {BrowserRouter as  Router,Route,Switch,Link} from 'react-router-dom';
import { Container, Row,Col, Nav, NavLink, Navbar } from 'react-bootstrap'
import Category from './Category';
import Products from './Products';
export class Home extends Component {
    render() {
        return (
            <div>
                <Router>
                <Row>
                <Col lg={4}>
                            <ul>
                                <li><NavLink><Link to="/">Category</Link></NavLink></li>
                                <li><NavLink><Link to="/Products">Products</Link></NavLink></li>
                                <li><NavLink><Link to="/Order">Order</Link></NavLink></li>
                                <li><NavLink><Link to="/Feedback">Feedback</Link></NavLink></li>
                            </ul>
                        </Col>
                        <Col lg={8}>
                        <Route path="/" exact component={Category}/>
                        <Route path="/Products" exact component={Products}/>
                        </Col>
                </Row>
                </Router>
            </div>
        )
    }
}

export default Home
