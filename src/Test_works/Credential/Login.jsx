import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function Login() {

 const [username,setusername]=useState('')
 const [password,setpassword]=useState('')



const handleSubmit= async(e)=>{
    e.preventDefault();
    const user=await axios.post("http://localhost:4000/student/login",{username,password})
    console.log(user.data)
    alert("login attepmt!");
}

  return (
    <div>
         <div style={{marginTop:"70px",width:"30%",margin:"auto",paddingTop:"0",backgroundColor:"#E7DFD7",padding:"50px",borderRadius:"30px"}}>
        <div style={{padding:"30px"}}><h1>Sign Up</h1></div> 
      <Form onSubmit={handleSubmit}>

      

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"  onChange={(e)=>setusername(e.target.value)} name="username"  value={username} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  onChange={(e)=>setpassword(e.target.value)} name="password" value={password} required/>
        </Form.Group>

        <Button type="submit">login</Button>
        
      </Form>


    </div>
      
    </div>
  )
}

export default Login
