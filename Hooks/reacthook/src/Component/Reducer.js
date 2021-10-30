import React, { useReducer } from 'react'
const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case "add":return state+1;
        case "sub":return state-1;
        case "reset" :return 0;
    }
}
export default function Reducer() {
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <h2>UseReucer Example</h2>
            <h5>{count}</h5>
            <button onClick={()=>dispatch("add")}>Increment</button>
            <button onClick={()=>dispatch("sub")}>Decrement</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>
        </div>
    )
}
