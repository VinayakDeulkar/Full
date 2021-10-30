import React,{useState,useEffect} from 'react';
import axios from 'axios'
import useFetchData from '../useFetchData';
export default function Home() {
    const [count,setCount]=useState(0);
    const [state,setState]=useState({name:"anuj",age:34,userData:[]})
    const updateCount=()=>{
        setCount(count+1);
    }
    const updateState=()=>{
        setState({...state,name:"Sumit"})
    }
    const data=useFetchData("https://jsonplaceholder.typicode.com/posts");
    useEffect(()=>{
      const URL="https://jsonplaceholder.typicode.com/users";
      axios.get(URL)
      .then(res=>{
          console.log(res.data)
          setState({...state,userData:res.data})
      })
    },[])
    return (
        <div className="container">
            <h2> Hooks Implementation</h2>
            <h4> UseState Hook</h4>
            <p> The counter is {count}</p>
            <input type="button" value="Update Count" onClick={updateCount}/>
            <p>{state.name} is {state.age} years</p>
            <input type="button" value="Update State" onClick={updateState}/>
            <h4> User EMail</h4>
            <ul>
                {state.userData.map(user=>
                    <li key={user.id}>{user.email}</li>)}
            </ul>
            <h4> Latest Posts</h4>
            {data.map(post=>
                <div>
                    <h6>{post.title}</h6>
                    <p>{post.body}</p>
                </div>)}
        </div>
    )
}
