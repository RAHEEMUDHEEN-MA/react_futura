import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const Form1 = () => {
    const [name,setname]=useState("")
    const [password,setpassword]=useState("")
    const handlesubmit=(event)=>{
        event.preventDefault()
        console.log("NAME:",name);
        console.log("PASSWORD:",password);

    }

    const names=(event)=>{
        setname(event.target.value)
    }
    const passset=(event)=>{
        setpassword(event.target.value)
    }
   
  return (
    <div className= ' abc d-flex justify-content-center'>

<Card style={{ width: '18rem' }}>
      
      <Card.Body >
        <Card.Title>login form</Card.Title>
        <Card.Text>
        <Form className=' d-flex justify-content-center flex-column'  onSubmit={handlesubmit}>
      
      <Form.Group as={Col} md="3" controlId="validationCustom01">
        <Form.Label> Name</Form.Label>
        <Form.Control
    
          required
          type="text"
          placeholder="name"
          value={name}
          onChange={(event)=>setname(event.target.value)}
          // onChange={names}
          
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom02">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="password"
          value={password}
          onChange={(event)=>setpassword(event.target.value)}
          // onChange={passset}
          
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
     
    
    
    
    <Button type="submit">login</Button>
  </Form>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


      
    </div>
  )
}

export default Form1
