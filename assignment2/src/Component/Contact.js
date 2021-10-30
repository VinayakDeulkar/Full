import React from 'react'
import { Link,Route } from 'react-router-dom'

 
   const Contact=({match})=> {
        return (
            <>
                <ul className="con" >
                    <li><Link to={`${match.url}/Noida`}>Noida</Link></li>
                    <li><Link to={`${match.url}/Pune`}>Pune</Link></li>
                    <li><Link to={`${match.url}/Mumbai`}>Mumbai</Link></li>
                    
                </ul>
                <Route path={`${match.path}/:name`} render={(props)=>(
                    <>
                    <h2>{props.match.params.name}</h2>
                    </>
                )}/>
            </>
        )
    }


export default Contact
