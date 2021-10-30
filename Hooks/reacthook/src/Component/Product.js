import React,{useEffect, useState} from 'react'
import axios from 'axios'
export default function Product() {
    const [pro, setPro] = useState({userData:[]});
    useEffect(()=>{
        const URL="http://localhost:3001/products"
        axios.get(URL)
        .then(res=>{
            console.log(res.data);
            setPro({...pro,userData:res.data})
        })
    },[])
    return (
        <div className="container">
            
                {pro.userData.map((ele)=>
               
                <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={`/images/${ele.image}`} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{ele.pname}</h5>
                    <p className="card-text">Price: {ele.price}</p>
                    
                </div>
                </div>
                )}
           
        </div>
    )
}

