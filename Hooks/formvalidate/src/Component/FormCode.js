import React,{useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import {  useDispatch, useSelector } from "react-redux";

export default function FormCode(props) {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [MobileNumber, setMobileNumber] = useState('');
    const MYname=useSelector((state)=>state)
    console.log(MYname.sname);
    const dispatch = useDispatch()
    
    return (
        <div>
            <Form>
                <h3>Register</h3>
                
                <Form.Group>
                <label className="float">Name:</label>
                        <Form.Control placeholder="Name" value={Name}  onChange={(e)=>{setName(e.target.value)}} name="Name"/>
                </Form.Group>
                <label className="red">{MYname.sname}</label>
                
                <Form.Group>
                        <label className="float">Email:</label>
                        <Form.Control placeholder="Email " value={Email} onChange={(e)=>{setEmail(e.target.value)}} name="Email"/>
                </Form.Group>
                <label className="red">{MYname.semail}</label>
                
                <Form.Group>
                        <label className="float">Password:</label>
                        <Form.Control placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} name="Password"/>
                </Form.Group>
                <label className="red">{MYname.spassword}</label>
                
                <Form.Group>
                        <label className="float">Mobile Number:</label>
                        <Form.Control placeholder="Mobile Number" value={MobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}} name="MobileNumber"/>
                </Form.Group>
                <label className="red">{MYname.smobilenumber}</label>
                <Form.Group>
                <Button variant="primary" onClick={()=>dispatch({type:"Submit",payload:{Name:Name,Email:Email,Password:Password,MobileNumber:MobileNumber}})} >Submit</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
