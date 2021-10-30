import axios from 'axios';
import React, { Component } from 'react'
const client=axios.create({
    baseURL:"http://localhost:3001/employees"
})
const regForName=RegExp(/^[A-Za-z ]+$/);
const regForGender=RegExp(/^male$|^female$/);
const regForAge=RegExp(/[0-9]+/);
export class Employee extends Component {
    constructor(props){
        super(props);
        this.state={
            EmpData:[],
            
            ename:'',
            age:'',
            city:'',
            gender:'',
            salary:'',
            errors:{
                ename:'',
                age:'',
                city:'',
                gender:'',
                salary:''
            }
        }
    }
    handler=(event)=>{
        const{name,value}=event.target;
        this.setState({[name]:value})

        switch(name){
            case 'ename':
                this.state.errors.ename=regForName.test(value)?'':'Only Aplhabates are allowed';
                    break;
            case 'age':
                this.state.errors.age=regForAge.test(value)?'':'Enter valid age';
                    break;
            case 'city':
                this.state.errors.city=regForName.test(value)?'':'Only Aplhabates are allowed';
                break;
            case 'gender':
                this.state.errors.gender=regForGender.test(value)?'':'Enter valid gender';
                break;
            case 'salary':
                this.state.errors.age=regForAge.test(value)?'':'Enter valid salary';
                    break;
            default:
                break;

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
    addEmployee=async(event)=>{
        try{
            event.preventDefault();
            let formData={id:Math.random(),ename:this.state.ename,age:this.state.age,city:this.state.city,gender:this.state.gender,salary:this.state.salary};
            
            await client.post("/",formData)
            const res=await client.get()
            this.setState({EmpData:res.data})
            this.setState({
                id:'',
                ename:'',
                age:'',
                city:'',
                gender:'',
                salary:'',
            })
        }
        catch(err){
            console.log(err);
        }
        
    }
    


    render() {
        return (
            <>
            <div className="container">
                <h2>Employee List</h2>
                <form onSubmit={this.addEmployee}>
                    <div className="form-group">
                        <label>Employee Name</label>
                        <input type="text" name="ename" value={this.state.ename} className="form-control" onChange={this.handler}/>
                    </div>
                    <div className="text-center">{this.state.errors.ename.length>0 && <span style={{color:'red'}}>{this.state.errors.ename}</span>}</div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="text" name="age" value={this.state.age} className="form-control" onChange={this.handler}/>
                    </div>
                    <div className="text-center">{this.state.errors.age.length>0 && <span style={{color:'red'}}>{this.state.errors.age}</span>}</div>
                    <div className="form-group">
                        <label>City </label>
                        <input type="text" name="city" value={this.state.city} className="form-control" onChange={this.handler}/>
                    </div>
                    <div className="text-center">{this.state.errors.city.length>0 && <span style={{color:'red'}}>{this.state.errors.city}</span>}</div>
                   
                    <div className="form-group">
                        <label> Gender</label>
                        <input type="text" name="gender" value={this.state.gender} className="form-control" onChange={this.handler}/>
                    </div>
                    <div className="text-center">{this.state.errors.gender.length>0 && <span style={{color:'red'}}>{this.state.errors.gender}</span>}</div>
                   
                    <div className="form-group">
                        <label> Salary</label>
                        <input type="text" name="salary" value={this.state.salary} className="form-control" onChange={this.handler}/>
                    </div>
                    <div className="text-center">{this.state.errors.salary.length>0 && <span style={{color:'red'}}>{this.state.errors.salary}</span>}</div>
                   
                    
                       <input type="submit" value="Add" className="btn btn-success"/>
                    
                    
                </form>
                
                
                </div>
            </>
        )
    }
}

export default Employee
