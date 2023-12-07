import React, { useEffect, useRef } from "react";
import "../Styles/HomeGrillax.css";
import vid1 from "../Assets/grillax_steek.mp4";
import { Col, Row } from "react-bootstrap";
import fbicon from "../Assets/icons8-facebook-50.png";
import twittericon from "../Assets/icons8-twitter-circled-50.png";
import TAicon from "../Assets/icons8-tripadvisor-48.png";

function HomeGrillax() {
  return (
    <div>
      <div className="container1">
        <video className="videobg" src={vid1} autoPlay loop muted></video>
        <div className="Content">
          <h1>WOW WHAT A GRILL !</h1>
          <p>
            The Grillax's authentic grilling imparts a smoky and tantalizing
            flavor that elevates <br />
            every dish to perfection.
          </p>
        </div>
      </div>

      <Row className="container2">
        <Col className="leftcntr" md={5}>
          <h1>
            INDIA’S NO.1 GRILL RESTO <br /> CAFÉ
          </h1>
          <p>
            The Grillax's unbeatable combination of precision grilling,
            flavorful <br /> cuisine, and innovative concepts has earned it the
            coveted title of India's <br /> top grill resto cafe.
          </p>
          <span>
            <img src={fbicon} alt="" />
            <img src={twittericon} alt="" />
            <img src={TAicon} alt="" />
          </span>
        </Col>

        <Col className="midcntr" md={3}>
          <div className="imgholder">
            <img
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/20221027180930_IMG_7069-01-1536x1024.jpeg"
              alt=""
            />
          </div>
          <div className="imgholder">
            <img
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/20221027181407_IMG_7092-01-1536x1024.jpeg"
              alt=""
            />
          </div>
          <div className="imgholder">
            <img
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/20221222225618_IMG_0171-01-scaled.jpeg?time=1701333361"
              alt=""
            />
          </div>
          <div className="imgholder">
            <img
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/20221223001802_IMG_0286-01-1536x1024.jpeg"
              alt=""
            />
          </div>
          <div className="imgholder">
            <img
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/20221027164943_IMG_6930-01-1536x1024.jpeg"
              alt=""
            />
          </div>
          <div className="imgholder">
            <img
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/shallot-chicken-1536x1024.jpeg"
              alt=""
            />
          </div>
        </Col>
        <Col className="rightcntr" md={4}>
          <div className="hours">
            <h2>WORKING</h2>
            <p>Monday 12:00pm - 11:00pm</p>
            <p>Tuesday 12:00pm - 11:00pm</p>
            <p>Wednesday 12:00pm - 11:00pm</p>
            <p>Thursday 12:00pm - 11:00pm</p>
            <p>Friday 12:00pm - 11:00pm</p>
            <p>Saturday 12:00pm - 11:00pm</p>
            <p>Sunday 12:00pm - 11:00pm</p>
          </div>
        </Col>
      </Row>

      <Row className="container3">
        <Col className="left" md={4}>
          <h1>NO PRE-GRILL,</h1>
          <h3>BUT AUTHENTIC GRILL</h3>
          <br />
          <br />
          <p>The Grillax's approach involves skipping pre-grilling and embracing only authentic grilling techniques, resulting in truly flavorful dishes.</p>
        </Col>
        <Col className="right" md={8}>
          <h1>GET IT GRILLED!</h1>
          <img
            src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/meat-barbecue-grill-123668.jpg?time=1701333361"
            alt=""
          />
          <p>
            We exclusively serve grilled dishes, expertly catering to diverse
            tastes while staying true to our concept, ensuring an exceptional
            and authentic dining experience for everyone.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default HomeGrillax;
