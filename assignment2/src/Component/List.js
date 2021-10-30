import axios from 'axios';
import React, { Component } from 'react'
import {BrowserRouter as  Router,Route,Link} from 'react-router-dom';
import Update from './Update'
const client=axios.create({
    baseURL:"http://localhost:3001/employees"
})
export class List extends Component {
    constructor(props){
        super(props);
        this.state={
            EmpData:[],
            id:'',
            ename:'',
            age:'',
            city:'',
            gender:'',
            salary:'',
            ToogleButton:true
        }
    }
    componentDidMount=async()=>{
        try{
            const res=await client.get();
            console.log(res);
            this.setState({EmpData:res.data})
        }
        catch(err){
            console.log(err);
        }
    }
    DeleteEmployee=async(empid)=>{
        try{
            console.log(empid);
        await client.delete(`/${empid}`)
        const res=await client.get()
        console.log(res);
        this.setState({EmpData:res.data})
        
        }
        catch(err){
            console.log(err);
        }
    }
    render() {
        return (
            <div>
                <Router>
                <h2 className="m-5"> Employee Details</h2>
                
                <table className="border text-center h3 bg-dark text-white">
                         <thead>
                             <tr>
                                 <td className="border">Employee ID</td>
                                 <td className="border">Employee Name</td>
                                 <td className="border">Age</td>
                                 <td className="border">City</td>
                                 <td className="border">Gender</td>
                                 <td className="border">Salary</td>
                             </tr>
                         </thead>
               {this.state.EmpData.map(Emp=>
                 
                     
                         <tbody key={Emp.id}>
                             <tr>
                                 <td className="border">{Emp.id}</td>
                                 <td className="border">{Emp.ename}</td>
                                 <td className="border">{Emp.age}</td>
                                 <td className="border">{Emp.city}</td>
                                 <td className="border">{Emp.gender}</td>
                                 <td className="border">{Emp.salary}</td>
                                 <td>
                                 <button  className="btn btn-danger" onClick={()=>this.DeleteEmployee(Emp.id)}>Delete</button>
                                 <Link to={`/List/${Emp.id}`}>
                                        <button  className="btn btn-warning">Update</button></Link>
                                 </td>
                             </tr>
                         </tbody>
                    
                 
                )}
                </table>
                <Route path="/List/:id" exact component={Update}/>
            </Router>
            </div>
        )
    }
}

export default List
