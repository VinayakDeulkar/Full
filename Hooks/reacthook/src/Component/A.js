import React, { useState,useContext, useMemo } from 'react'
 import B from './B'
 function squareNum(number){
     console.log("squaring done");
     return Math.pow(number,2);
 }
export default function A() {
const [number,setNumber]=useState(0);
const [counter,setCounter]=useState(0);

const square=useMemo(()=>
{
    console.log("hello");
    return squareNum(number);
},[number])
const handler=(event)=>{
    setNumber(event.target.value);
}
const countSet=()=>{
    setCounter(counter+1);
}

    return (
        <div>
           <h2>This is A compponent</h2>

Number : <input type="number" onChange={handler} />
  <p> {square} </p>

<button   onClick={countSet} >  Counter </button>
   <p>{counter} </p>           
           <B />
        </div>
    )
}