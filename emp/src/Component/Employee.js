import axios from 'axios';
import React, { Component } from 'react'
// import data from '../Employees.json';
const client=axios.create({
    baseURL:"http://localhost:3001/employee"
})
export class Employee extends Component {
    constructor(props){
         super(props);
         this.state={EmpData:[],id:'',ename:'',salary:''};
    }
    handler=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    componentDidMount=async()=>{
        // try{
        // const URL="http://localhost:3001/employee";
        // const res=await fetch(URL);
        // const resData=await res.json();
        // this.setState({EmpData:resData})
        // }
        // catch(err){
        //     console.log(err);
        // }
        try{
            // const URL="http://localhost:3001/employee";
            const res=await client.get();
            console.log(res);
            this.setState({EmpData:res.data})
            }
            catch(err){
                console.log(err);
            }
        // axios.get(URL)
        // .then(res=>{
        //     this.setState({EmpData:res.data})
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        // fetch(URL)
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     this.setState({EmpData:data})
        // })
        
    }
    DeleteEmployee=async(event)=>{
        try{
        event.preventDefault();
        let formData={id:this.state.id}
        await client.delete(`/${formData.id}`)
        const res=await client.get()
        this.setState({EmpData:res.data})
        
        }
        catch(err){
            console.log(err);
        }
//         fetch(`http://localhost:3001/employee/${formData.id}`,{
//     method:"DELETE"
//  })
 
//         .then(res=> res.json())
//         .then(data=>{
//             alert("Employee Deleted"); fetch(URL)
//             .then(res=>res.json())
//             .then(data=>{
//                 console.log(data)
//                 this.setState({EmpData:data})
//             })
//         })
    }
    UpdateEmployee=async(event)=>{
        try{
            event.preventDefault();
            let formData={id:this.state.id,ename:this.state.ename,salary:this.state.salary}
            // const URL=`http://localhost:3001/employee/${formData.id}`;
            await client.put(`/${formData.id}`,formData)
            console.log(await client.put(`/${formData.id}`,formData));
            const res=await client.get()
           
                this.setState({EmpData:res.data})
            
            }
            catch(err){
                console.log(err);
            }
        // event.preventDefault();
        // let formData={id:this.state.id,ename:this.state.ename,salary:this.state.salary};
        // const URL=`http://localhost:3001/employee/${formData.id}`;
        // axios.put(URL,formData)
        // axios.get('http://localhost:3001/employee')
        // .then(res=>{
        //     this.setState({EmpData:res.data})
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        // fetch(URL,{
        //     method:"PUT",
        //     body:JSON.stringify(formData),
        //     headers:{
        //         "Content-type":"application/json"
        //     }
        // })
        // .then(res=> res.json())
        // .then(data=>{
        //     alert("Data Updated");
        //     fetch("http://localhost:3001/employee")
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data)
        //         this.setState({EmpData:data})
        //     })
        // })
    }
    addEmployee=async(event)=>{
        try{
            event.preventDefault();
            let formData={id:this.state.id,ename:this.state.ename,salary:this.state.salary};
            // const URL="http://localhost:3001/employee";
            await client.post("/",formData)
            const res=await client.get()
            this.setState({EmpData:res.data})
        }
        catch(err){
            console.log(err);
        }
        // event.preventDefault();
        // let formData={id:this.state.id,ename:this.state.ename,salary:this.state.salary};
        // const URL="http://localhost:3001/employee";
        // axios.post(URL,formData)
        // axios.get('http://localhost:3001/employee')
        // .then(res=>{
        //     this.setState({EmpData:res.data})
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        // fetch(URL,{
        //     method:"POST",
        //     body:JSON.stringify(formData),
        //     headers:{
        //         "Content-type":"application/json"
        //     }
        // })
        // .then(res=> res.json())
        // .then(data=>{
        //     alert("Employee Added");
            
        //     // fetch(URL)
        
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data)
        //         this.setState({EmpData:data})
        //     })
        // })
    }
    render() {
        return (
            <>
              <div className="container">
                  <h2> Add Employee</h2>
                  <form onSubmit={this.addEmployee}>
                      <div className="form-group">
                          <label>ID</label>
            <input type="text" name="id" className="form-control" onChange={this.handler}/>
                      </div>
                      <div className="form-group">
                          <label>Employee Name</label>
            <input type="text" name="ename" className="form-control" onChange={this.handler}/>
                      </div>
                      <div className="form-group">
                          <label>Salary</label>
            <input type="text" name="salary" className="form-control" onChange={this.handler}/>
                      </div>

            <input type="submit" value="Submit" className="btn btn-success"/>
            <button value="submit" className="btn btn-danger" onClick={this.DeleteEmployee}>Delete Employee</button>
                  <button value="submit" className="btn btn-warning" onClick={this.UpdateEmployee}>Update Employee</button>
                  </form>
                  
              </div>
                <h2> Employee List</h2>
                
                <table className="border text-center h3">
                         <thead>
                             <tr>
                                 <td className="border">Employee ID</td>
                                 <td className="border">Employee Name</td>
                                 <td className="border">Salary</td>
                             </tr>
                         </thead>
               {this.state.EmpData.map(Emp=>
                 
                     
                         <tbody key={Emp.id}>
                             <tr>
                                 <td className="border">{Emp.id}</td>
                                 <td className="border">{Emp.ename}</td>
                                 <td className="border">{Emp.salary}</td>
                             </tr>
                         </tbody>
                    
                 
                )}
                </table>
                
            </>
        )
    }
}

export default Employee
