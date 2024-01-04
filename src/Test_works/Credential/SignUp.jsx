import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


function SignUp() {



    // const navigate=useNavigate()

    const [user, setuser] = useState({
        name:"",
        email:"",
        username:"",
        password:""
    })

    const handleChange=(event)=>{
        setuser({...user,[event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        // navigate('/')
        console.log(" Data:", user);
        alert("sign-up successful!");
    }
   

  return (
    <div style={{marginTop:"70px",width:"30%",margin:"auto",paddingTop:"0",backgroundColor:"#E7DFD7",padding:"50px",borderRadius:"30px"}}>
        <div style={{padding:"30px"}}><h1>Sign Up</h1></div> 
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"  onChange={handleChange} name="name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  onChange={handleChange} name="email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"  onChange={handleChange} name="username" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  onChange={handleChange} name="password" required/>
        </Form.Group>

        <Button type="submit">Sign Up</Button>
        
      </Form>

{/*      
      <div>
        <p>Already have an account ?</p>
        <Link to={/login}><a href="">Login</a></Link>
      </div> */}
    </div>
  );
}

export default SignUp;