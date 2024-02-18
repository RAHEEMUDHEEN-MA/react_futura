import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";


function SignUp() {



    // const navigate=useNavigate()


    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')

  

   const handleSubmit=async (e)=>{
    e.preventDefault();
    const student=await axios.post("http://localhost:4000/student/signup",{name,email,username,password})
    console.log(student.data)
    alert("sign up successfull")

   }
   

  return (
    <div style={{marginTop:"70px",width:"30%",margin:"auto",paddingTop:"0",backgroundColor:"#E7DFD7",padding:"50px",borderRadius:"30px"}}>
        <div style={{padding:"30px"}}><h1>Sign Up</h1></div> 
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"  onChange={(e)=>setname(e.target.value)} name="name" value={name} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  onChange={(e)=>setemail(e.target.value)} name="email" value={email} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"  onChange={(e)=>setusername(e.target.value)} name="username" value={username} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  onChange={(e)=>setpassword(e.target.value)} name="password" value={password} required/>
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