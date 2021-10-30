import React,{useState,useRef} from 'react'

export default function Login() {
    let emailInput=useRef(null);
    let passwordInput=useRef(null);
    const postLogin=(event)=>{
        event.preventDefault();
        let formData={email:emailInput.current.value,password:passwordInput.current.value}
        console.log(formData);
    }
    return (
        <div className="container">
            <h2> Login Here</h2>
            <form onSubmit={postLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" ref={emailInput}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" ref={passwordInput}/>
                </div>
                <input type="submit" value="Login" className="btn btn-success"/>
            </form>
        </div>
    )
}
