import React from 'react'
import { useContext } from 'react'
import Context from './Context'
import { myContext } from './Context'
export default function B() {
    const myname=useContext(myContext);
    return (
        <div>
           <h2>This is B component</h2> 
         <p>  {myname} </p>
        </div>
    )
}