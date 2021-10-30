import React, { Component } from 'react'
import { Form,Button, Row, Col } from 'react-bootstrap'
const regForName=RegExp(/^[A-Za-z ]+$/);
const regForAge=RegExp(/[0-9]+/);
const regForEmail=RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
const regForpassword=RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/)
export class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            
            errors:{
                fullname:'',
                age:'',
                email:'',
                pincode:'',
                password:'',
                cpassword:'',
                address:'',
            }
        }
    }
    handler=(event)=>{
        const{name,value}=event.target;
        this.setState({[name]:value})

        switch(name){
            case 'Name':
                this.state.errors.fullname=regForName.test(value)?'':'Only Aplhabates are allowed';
                    break;
            case 'address':
                this.state.errors.address=regForName.test(value)?'':'Only Aplhabates are allowed';
                        break;
            case 'age':
                this.state.errors.age=regForAge.test(value)&&value.length<=2?'':'Enter valid age';
                    break;
            case 'email':
                this.state.errors.email=regForEmail.test(value)?'':'Only Aplhabates are allowed';
                break;
            case 'pincode':
                this.state.errors.pincode=regForEmail.test(value)&& value.length==6?'':'Enter valid pincode';
                break;
            case 'password':
                this.state.errors.password=regForpassword.test(value)?'':'Enter valid password';
                    break;
            default:
                break;

        }
    }
    render() {
        return (
            <div>
                <h3>Registeration Form</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" name="Name" onChange={this.handler} /> 
                    </Form.Group>
                    <div>{this.state.errors.fullname.length>0 && <span style={{color:'red'}}>{this.state.errors.fullname}</span>}</div>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handler} /> 
                    </Form.Group>
                    <div>{this.state.errors.email.length>0 && <span style={{color:'red'}}>{this.state.errors.email}</span>}</div>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" name="age" placeholder="Enter Age" onChange={this.handler} /> 
                            </Form.Group>
                            <div>{this.state.errors.age.length>0 && <span style={{color:'red'}}>{this.state.errors.age}</span>}</div>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3" controlId="formBasicBirthdate">
                                <Form.Label>BirthDate</Form.Label>
                                <Form.Control type="date" placeholder="Enter BirthDate" /> 
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                        <Form.Label>Gender</Form.Label>
                        <Form.Check type="radio" name="gender" aria-label="Gender " label="Male" value="Male" />
                        <Form.Check type="radio" name="gender" aria-label="Gender " label="Female" value="Female" />
                        </Col>
                       
                    </Row>
                    <Row>
                        <Col lg={9}>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" placeholder="Enter Address" onChange={this.handler}/> 
                            </Form.Group>
                            <div>{this.state.errors.address.length>0 && <span style={{color:'red'}}>{this.state.errors.address}</span>}</div>
                        </Col>
                        <Col lg={3}>
                            <Form.Group className="mb-3" controlId="formBasicpincode">
                                <Form.Label>pincode</Form.Label>
                                <Form.Control type="text" name="pincode" placeholder="Enter pincode" onChange={this.handler} /> 
                            </Form.Group>
                            <div>{this.state.errors.pincode.length>0 && <span style={{color:'red'}}>{this.state.errors.pincode}</span>}</div>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handler} />
                    </Form.Group>
                    <div>{this.state.errors.password.length>0 && <span style={{color:'red'}}>{this.state.errors.password}</span>}</div>
                    <Form.Group className="mb-3" controlId="formBasicCPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password"  onChange={this.handler}/>
                    </Form.Group>
                    <div>{this.state.errors.cpassword.length>0 && <span style={{color:'red'}}>{this.state.errors.cpassword}</span>}</div>

                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Register
