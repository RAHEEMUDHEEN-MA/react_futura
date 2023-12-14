import React from "react";
import "../Styles/Features.css";
import arrow from "../bullet.svg";
import { Button, Row,Col } from "react-bootstrap";


function Features() {
  return (
    <div className="maincontainer_features">
      <Row className=" buildcontainer">
        <Col md={6}>
          <img
            id="leftImgLady"
            src="https://images.ctfassets.net/0ki11o8czqpd/4RrcCaCP0Kih0AoLSWUORk/088d0ecb3c790889646c27aa83e5398f/woman-1x2-left.jpg"
            alt=""
          />
        </Col>
        <Col md={6} className="rightConatiner1">
          <div>
            <h1 className="ftrH1">
              BUILD A PLAN THAT FITS
              <span style={{ color: "rgb(80 244 12)" }}> YOU.</span>
            </h1>
          </div>
          <div>
            <img
              className="xlogo slide-up"
              width={170}
              
              src="https://www.mymobilex.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F0ki11o8czqpd%2F1VXhKOZso9i2cBDSLt6KDN%2Fa1b68554b7dc90f246451b7ad1a6e8b5%2Ffloating-x-icon.png&w=256&q=75"
              alt=""
            />
          </div>
          <div className="listContainer">
            <ul>
              <li className="">
                <p>
                  {" "}
                  <img src={arrow} alt="" />
                  Manage your bill in advance. No more surprises.
                </p>
              </li>
              <li>
                <p>
                  <img src={arrow} alt="" />
                  Pay only for the data you use, never for what you don’t.
                </p>
              </li>
              <li>
                <p>
                  <img src={arrow} alt="" />
                  Never lose data you’ve purchased—surplus data always <br />
                  carries forward.
                </p>
              </li>
              <li>
                <p>
                  <img src={arrow} alt="" />
                  The app will even recommend a personalized data plan for{" "}
                  <br />
                  you based on your usage.
                </p>
              </li>
            </ul>
          </div>
          <div></div>
        </Col>
      </Row>

     
      <Row>
        <Col md={6} className="leftsidebanner">
        <div>
            <h1 className="controlh1">CONTROL IT  <br />ALL  FROM A <br /> <span style={{color:"rgb(80 244 12)"}}>SIMPLE</span> APP.</h1>
          </div>
          <div>
            <p>Choose your own data limit and get started.</p>
            <p id="Orpara">Or, use our AI-powered tools to customize your plan as you go:</p>
          </div>
          <div className="listContainer">
            <ul>
              <li className="">
                <p>
                
                  <img src={arrow} alt="" />
                  Manage your bill in advance. No more surprises.
                </p>
              </li>
              <li>
                <p>
                  <img src={arrow} alt="" />
                  Pay only for the data you use, never for what you don’t.
                </p>
              </li>
              <li>
                <p>
                  <img src={arrow} alt="" />
                  Never lose data you’ve purchased—surplus data always <br />
                  carries forward.
                </p>
              </li>
              <li>
                <p>
                  <img src={arrow} alt="" />
                  The app will even recommend a personalized data plan for{" "}
                  <br />
                  you based on your usage.
                </p>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={6} className="Rightsidebanner">
        
            <img
            id="rightImgMen"
              src="https://images.ctfassets.net/0ki11o8czqpd/5wMIs6to6mpSVZ3bxkLLk6/0d83353eacf38ed7704d7f04e0737f01/man-2x2-right.jpg"
              alt=""
            />
          
        </Col>
      </Row>
    </div>
  );
}

export default Features;
