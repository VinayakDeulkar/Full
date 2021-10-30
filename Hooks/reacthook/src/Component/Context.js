import React,{createContext} from 'react'
import A from './A';
export const myContext=createContext(null);

export default function Context() {
    const name="Vinayak";
    return (
        <div className="container">
         <myContext.Provider value={name}>
            <h2>Use Context Example</h2> 
            <A />
             </myContext.Provider>   
        </div>
    )
}