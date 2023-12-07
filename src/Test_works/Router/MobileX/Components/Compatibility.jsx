import React from "react";
import "../Styles/Compatibility.css";
import { Row, Col, Button } from "react-bootstrap";

function Compatibility() {
  return (
    <div>
      <Row className="mx-5">
        <Col
          md={12}
          className="d-flex flex-column justify-content-center align-items-center flex-row text-center py-5 firstbanner "
        >
          <p className="unlockp">
            Unlock the true potential of your device by bringing it over to
            <span style={{ color: "rgb(80 244 12)" }}>
              {" "}
              <u> MobileX.</u>
            </span>
          </p>
          <h1 className="seewhatH1">
            SEE WHAT{" "}
            <span style={{ color: "rgb(80 244 12)" }}>WORKS FOR YOU.</span>
          </h1>
          <img
            className="smileImg slide-up"
            src="https://www.mymobilex.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F0ki11o8czqpd%2F1QMACw48HYKWIO3Styp23G%2F0d99d320e020aeaae44a20f7fee27c36%2Fcurly-hair-girl.png&w=640&q=75"
            alt=""
          />
        </Col>
      </Row>

      <Row className="mx-5 my-5 py-5 d-flex flex-row justify-content-between">
        <Col md={6}>
          <h1 className="bringphoneH1">
            BRING YOUR <br /> OWN PHONE
          </h1>
        </Col>
        <Col md={5} className="">
          <p className="para">
            Ready for a breath of fresh air for your beloved phone? Say hello to
            MobileX! Unlock the true potential of your device by bringing it
            over to a world of choice.
          </p>
          <p className="para">
            With MobileX, your phone gets to explore new horizons, enjoying
            top-notch coverage and exciting plans tailored just for you.
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />

      <Row className="-5 bg-white whitebanner d-flex flex-row justify-content-between">
        <Col md={6}>
          <h1 className="bringphoneH1" id="checkH1">CHECK YOUR <span style={{color: "rgb(80 244 12)"}}>PHONE COMPATIBILITY</span></h1>
          <p className="checkPara">Enter your IMEI to make sure it’s 5G, 4G LTE  and <br />VoLTE friendly.</p>
        </Col>
        <Col md={5} className="">
          <span style={{fontSize:"20px " ,fontWeight:"800", wordSpacing:"-1px", letterSpacing:"-1px"}}>WHERE TO FIND YOUR IMEI NUMBER</span>
          <div className="imeiform">
          <form action="">
            <input type="text" className="imeiinput" placeholder="15-17 numbers only -no spaces or special characters" />
            <img src="https://images.ctfassets.net/0ki11o8czqpd/3yBShErwtSLzazvkYWK2S7/b74bc8cc68cb5b8f9e5e85434e0a03e2/bullet-dark.svg" alt="" />
            
          </form>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="p-0">
          <img id="leftImgMen" src="https://images.ctfassets.net/0ki11o8czqpd/kT8xrAb9fEE7MYLVcFSwv/f0907c41fe3a635d0502d3b57fd47fc5/camping-roadtrip.png" alt="" />
        </Col>
        <Col md={6} className="rightcontainer">
          <div>
            <h1 id="unlocked" className="bringphoneH1">UNLOCKED<br /><span style={{color: "rgb(80 244 12)"}}>VS.</span>LOCKED</h1>
          </div>

          <div>
            <p className="unlockPara">An unlocked cell phone means it isn’t tied to a specific carrier’s network and can work with more than one service provider.</p>
          </div>

          <div>
            <h5 className="font">HOW TO UNLOCK A PHONE</h5>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Compatibility;
