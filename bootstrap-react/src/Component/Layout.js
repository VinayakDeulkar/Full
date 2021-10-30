import React, { Component } from 'react'
import {BrowserRouter as  Router,Route,Switch,Link} from 'react-router-dom';
import { Container, Row,Col, Nav, NavLink, Navbar } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import Home from './Home'
import About from './About';
import Gallary from './Gallary';
import Contact from './Contact';
import Register from './Register';

export class Layout extends Component {
    render() {
        return (
            <div>
                <Router>
                <Container>
                    <Row>
                        <Col>
                        <Navbar bg="dark" >
                        <NavbarToggle aria-controls="basic-navbar-nav"/>
                        <NavbarCollapse id="basic-navbar-nav">
                        <Nav>
                            <NavLink><Link to="/">Home</Link></NavLink>
                            <NavLink><Link to="/About">About Us</Link></NavLink>
                            <NavLink><Link to="/Gallary">Gallary</Link></NavLink>
                            <NavLink><Link to="/Contact">Contact Us</Link></NavLink>
                            <NavLink><Link to="/Register">Register </Link></NavLink>
                        </Nav>
                        </NavbarCollapse>
                        </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Route path="/" exact component={Home}/>
                        <Route path="/About" exact component={About}/>
                        <Route path="/Gallary" exact component={Gallary}/>
                        <Route path="/Contact" exact component={Contact}/>
                        <Route path="/Register" exact component={Register}/>
                        </Col>
                    </Row>
                    
                </Container>
                </Router>
            </div>
        )
    }
}

export default Layout
