import React, { Component } from 'react'
import {BrowserRouter as  Router,Route,Switch,Link, NavLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './Home';
import Tablle from './Tablle';
import Gallary from './Gallary';

export class Top extends Component {
    render() {
        return (
            <div>
                <Router>
                <Box sx={{flexGrow:1}}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr:2}}>
                            <MenuIcon />
                        </IconButton>
                        
                            <NavLink  to="/">Home</NavLink>
                            <NavLink  to="/Table">Table</NavLink>
                            <NavLink  to="/Gallary">Gallary</NavLink>
                        
                    </Toolbar>
                </AppBar>
                </Box>
                <Route path="/" exact component={Home}/>
                <Route path="/Table" exact component={Tablle}/>
                <Route path="/Gallary" exact component={Gallary}/>
                </Router>
            </div>
        )
    }
}

export default Top
