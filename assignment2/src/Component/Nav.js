import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="nav-link">Add Employee</Link>
        <Link to="/List"  className="nav-link">List</Link>
        <Link to="/city"  className="nav-link">Contact</Link>
        </nav>
            </div>
        )
    }
}

export default Nav
