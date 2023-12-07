import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Styles/Process.css";

function Process() {
  return (
    <div>
        <br /><br />
      <Row className="firstrow d-flex justify-content-center">
        <Col md={5} className="d-flex justify-content-center">
          <div>
            <img
              className="img1"
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-04-at-1.31.06-PM.jpeg?time=1701478336"
              alt=""
            />
          </div>
        </Col>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1>CUTTING</h1>
            <p>
              Our chicken is meticulously sliced according to our exact
              specifications, guaranteeing uniformity and precision in every
              piece. This attention to detail is a crucial part of our
              commitment to quality at The Grillax
            </p>
          </div>
        </Col>
      </Row>

      <Row className="firstrow d-flex justify-content-center">
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1>BLASTING</h1>
            <p>
              The chicken undergoes a rapid freezing process, reaching
              temperatures as low as - 40 degrees Celsius. This deep freezing
              technique not only preserves the chicken's freshness but also
              ensures its safety and quality, a crucial step in our commitment
              to serving premium grilled cuisine at The Grillax
            </p>
          </div>
        </Col>
        <Col md={5} className="d-flex justify-content-center">
          <div>
            <img
              className="img1"
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/11/SAIREM-Cold-room-thawing.jpg.webp?time=1701478336"
              alt=""
            />
          </div>
        </Col>
      </Row>

      <Row className="firstrow d-flex justify-content-center">
        <Col md={5} className="d-flex justify-content-center">
          <div>
            <img
              className="img1"
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-04-at-11.09.52-AM.jpeg?time=1701478336"
              alt=""
            />
          </div>
        </Col>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1>TRANSPORT</h1>
            <p>
              After the initial blasting, the chicken is transported to our
              various outlets and franchise locations, maintaining a consistent
              temperature of -18 degrees Celsius throughout the journey. This
              controlled environment safeguards the quality and safety of the
              chicken until it's ready for the grilling process at The Grillax.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="firstrow d-flex justify-content-center">
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1>STORAGE</h1>
            <p>
              Upon arrival at our outlets and franchise locations, the chicken
              continues to be stored in specialized freezers, maintaining a
              constant temperature of -18 degrees Celsius. This strict cold
              storage ensures the preservation of freshness, flavor, and safety
              until it's prepared for grilling at The Grillax.
            </p>
          </div>
        </Col>
        <Col md={5} className="d-flex justify-content-center">
          <div>
            <img
              className="img1"
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/11/hoshizaki-4-door-vertical-refrigerator.jpg?time=1701478336"
              alt=""
            />
          </div>
        </Col>
      </Row>

      <Row className="firstrow d-flex justify-content-center">
        <Col md={5} className="d-flex justify-content-center">
          <div>
            <img
              className="img1"
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-04-at-1.31.06-PM.jpeg?time=1701478336"
              alt=""
            />
          </div>
        </Col>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1>CUTTING</h1>
            <p>
              Our chicken is meticulously sliced according to our exact
              specifications, guaranteeing uniformity and precision in every
              piece. This attention to detail is a crucial part of our
              commitment to quality at The Grillax
            </p>
          </div>
        </Col>
      </Row>

      {/* <Row className="firstrow d-flex justify-content-center">
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1>CUTTING</h1>
            <p>
              Our chicken is meticulously sliced according to our exact
              specifications, guaranteeing uniformity and precision in every
              piece. This attention to detail is a crucial part of our
              commitment to quality at The Grillax
            </p>
          </div>
        </Col>
        <Col md={5} className="d-flex justify-content-center">
          <div>
            <img
              className="img1"
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-04-at-1.31.06-PM.jpeg?time=1701478336"
              alt=""
            />
          </div>
        </Col>
      </Row> */}
     
     <div className="footer">
      <div className="footerbg">
          <img src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2019/12/hotel-diner-dining.jpg" alt="" />
      </div>

      <div className="footercnt">
        <h1>Let’s Eat.</h1>
        <button className="orangeBtn">Our Locations</button>
        <p>Call Us : +91 <span style={{color:"#ee4c22"}}>81388 71117</span></p>
      </div>

     </div>
        

    </div>
  );
}

export default Process;


// <button></button>
// <h2>Call Us : +91 <span style={{color:"#ee4c22"}}>81388 71117</span></h2>