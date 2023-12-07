import React from "react";
import "../Styles/FAQs.css";
import { Col, Row } from "react-bootstrap";
function FAQs() {
  return (
    <div>
      <Row className="pt-5 mt-4">
        <Col md={12} className="d-flex justify-content-center">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="https://www.mymobilex.com/_next/image/?url=%2FmX_Logo_xBlue-xGreen_Facet_H.png&w=32&q=75"
              alt=""
              width={35}
              height={20}
            />
            <h3 style={{ color: "white", fontWeight: "400", fontSize: "30px" }}>
              pertcare
            </h3>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12} className="d-flex justify-content-center m-3">
          <h1 className="helpH1">
            HOW <span style={{ color: "rgb(80 244 12)" }}>CAN WE HELP?</span>
          </h1>
        </Col>
      </Row>
    </div>
  );
}

export default FAQs;
