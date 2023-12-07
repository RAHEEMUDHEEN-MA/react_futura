import React, { useContext, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { NewContext } from "../../App";

import { useNavigate, useParams } from 'react-router-dom';




function EditUser() {
  const [data, setdata] = useContext(NewContext);
  const { user } = useParams();
  const edituser = data[user];
   const history = useNavigate();

  const [altername, setaltername] = useState(edituser.name);
  const [alterage, setalterage] = useState(edituser.age);
  const [alterplace, setalterplace] = useState(edituser.place);

  const confirm=()=>{
    const confirmation=window.confirm('save change?');
    if(confirmation){
      const UpdateData=[...data]
      UpdateData[user]={name:altername,age:alterage,place:alterplace}
      setdata(UpdateData)

     history('/')
    }
  }

  const handleSubmit=(event)=>{
      event.preventDefault();
      confirm()
     

      
  }

  return (
    <div className="m-auto">
      <Row className="d-flex justify-content-center">
        <Col md={3}>
        <h1>Edit User</h1>

          <Form noValidate  className=" p-5 bg-body-secondary" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="name"
                  defaultValue={edituser.name}
                  onChange={(event) => setaltername(event.target.value)}
                />
                
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Age"
                  defaultValue={edituser.age}
                  onChange={(event)=>setalterage(event.target.value)}
                />
                
              </Form.Group>

              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="location"
                  defaultValue={edituser.place}
                  onChange={(event) =>setalterplace(event.target.value)}
                />
                
              </Form.Group>
            </Row>

            <Button className="m-auto" type="submit" >
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default EditUser;
