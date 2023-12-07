import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { NewContext } from '../../App';

function Adduser() {
    const [data, setdata] = useContext(NewContext);
  
 
  // const history = useHistory();
  const [aname,setaname]=useState('')
  const [aage,setaage]=useState('')
  const [aplace,setaplace]=useState('')
  
 const navigate=useNavigate()
  




const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Name:', aname);
    // console.log('Age:', aage);
    // console.log('Location:', aplace);
  

    const newUser = { name: aname, age: aage, place: aplace };    
    setdata([...data, newUser]);
    navigate(-1)
    

    // setaname('');
    // setaage('');
    // setaplace('');
  };
  

  return (
    <div className="m-auto">
    <Row className="d-flex justify-content-center">
      <Col md={3}>
      <h1>New User</h1>

        <Form noValidate className=" p-5 bg-body-secondary" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="name"
                
                onChange={(event) => setaname(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label>Age</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Age"
                
                onChange={(event)=>setaage(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label>Location</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="location"
               
                onChange={(event) =>setaplace(event.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

        <Button className="m-auto" type="submit" >
            Add
        </Button>
        
        </Form>
      </Col>
    </Row>
  </div>
  )
}

export default Adduser
