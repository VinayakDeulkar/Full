
import { AppBar,  Toolbar, Typography, Grid } from '@mui/material'
import React from 'react'
import {BrowserRouter as Router,Route,Switch, Link } from 'react-router-dom'
import Product from './Product';
import Home from './Home';
import {connect} from "react-redux"
 function Navigation(props) {
     const counter= props.mycounter!=null?props.mycounter.length:0
    return (
        <div>
            
            <Router>
            <Grid container >
                <Grid item lg={12} xs={12} sm={12}>
                    <AppBar position="static">
                        <Toolbar >
                                
                                <Typography variant="h6" >
                                    <Link to="/" className="nav">Home</Link>
                                    <Link to="/Product" className="nav">Product</Link>  
                                    <Link to="/Cart" className="nav" >Cart{counter}</Link>    
                                </Typography>
                            
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item lg={12} >
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Product" exact component={Product} />
                    </Switch>
                </Grid>
            </Grid>
            </Router>
        </div>
    )
}
const MapStateToProps=(state)=>{
    return{ 
      mycounter:state.count
    }
  }
export default connect(MapStateToProps) (Navigation)