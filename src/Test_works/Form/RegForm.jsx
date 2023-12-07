import React, { useState } from "react";
import "../Form/RegForm.css";
import { Button, Col, Row } from "react-bootstrap";

const RegForm = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [phone, setphone] = useState();
  const [gender, setgender] = useState();
  const [education, seteducation] = useState([]);
  const register = (event) => {
    event.preventDefault()
    // alert(email,",",username,",",password,",",phone)
    console.log(
      name,email,password,phone,gender
    )
  };
  return (
    <div className="maincontainer">
      <Row className="mainbox">
        <Col md={5} id="leftbox">
          <h1 style={{ color: "white" }}>Lorem, ipsum dolor.</h1>
        </Col>
        <Col md={7} id="rightbox">
          <div>
            <div>
              <h1>Enter your Details</h1>
            </div>
            <form action="" onSubmit={register}>
              <input
                type="text"
                placeholder="Name"
                name=""
                value={name}
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email id"
                name=""
                value={email}
                onChange={(event)=>{
                  setemail(event.target.value)
                }}
              />
              <input
                type="text"
                placeholder="Create a username"
                name=""
                id=""
                value={username}
                onChange={(event)=>{
                  setusername(event.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Password"
                name=""
                id=""
                value={password}
                onChange={(event)=>{
                  setpassword(event.target.value)
                }}
              />
              {/* <input
                type="password"
                placeholder="Confirm password"
                name=""
                id=""
              /> */}
              <input
                type="phone"
                placeholder="Phone "
                name=""
                id=""
                onChange={(event)=>{
                  setphone(event.target.value)
                }}
                value={phone}
              />
              <span>
                <span>
                  <input type="radio" name="gender"  value="male" checked={gender==="male" } onChange={(event)=>{
                    setgender(event.target.value)
                  }}/>
                  <label htmlFor="male">male</label>{" "}
                </span>
                <span>
                  <input type="radio" name="gender"  value="female" checked={gender==="female"} onChange={(event)=>{
                    setgender(event.target.value)
                  }}/>
                  <label htmlFor="female">female</label>{" "}
                </span>
                <span>
                  <input type="radio" name="gender"  value="other" checked={gender==="other"} onChange={(event)=>{
                    setgender(event.target.value)
                  }}/>
                  <label htmlFor="other">other</label>{" "}
                </span>
              </span>
              <span>
                <label style={{ paddingLeft: "5px" }} htmlFor="education">
                  Education :{" "}
                </label>{" "}
                <span>
                  <span>
                    <input type="checkbox" name="education" id="" />
                    <label htmlFor="plustwo">Plustwo</label>
                  </span>
                  <span>
                    <input type="checkbox" name="education" />
                    <label htmlFor="ug">UG</label>
                  </span>{" "}
                  <span>
                    <input type="checkbox" name="education" />
                    <label htmlFor="PG">PG</label>
                  </span>
                </span>
              </span>
              <button type="submit">Register</button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegForm;


