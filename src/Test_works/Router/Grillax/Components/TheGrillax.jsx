import React from "react";
import "../Styles/TheGrillax.css";
import { Carousel, Col, Row } from "react-bootstrap";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function TheGrillax() {
  return (
    <div>
      <Row>
        <Col className="Mainbanner " md={12}>
          <h3 className="slideDown">Know More</h3>
          <h1 className="slideUp">About The Grillax</h1>
          <p className="slideUp">
            Where passion for grilling meets innovation. We serve sizzling,
            globally inspired grilled <br />
            cuisine, redefining dining with every bite.
          </p>
          <div class="triangle_up"></div>
        </Col>
      </Row>

      <Row className="secondBanner ">
        <Col md={6} className="mt-5 pt-3">
          <h1>The Beginning</h1>
          <p>
            The Grillax ignited its grilling journey in 2017, sparked by the
            vision of industry veterans. Pioneering precision grilling and
            automation, we transformed into a thriving, multi-location brand,
            setting new standards in culinary innovation.
          </p>

          <Carousel className="Carousel1">
            <Carousel.Item>
              <img
                src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/20221027192730_IMG_7156-01-scaled.jpeg?time=1701436507"
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/20221027195811_IMG_7162-01-scaled.jpeg?time=1701436507"
                alt=""
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/20221027192721_IMG_7154-01-scaled.jpeg?time=1701436507"
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center thirdBanner">
        <Col md={5} className="good">
          <h1>Are we a Food Tech company?</h1>
          <p style={{fontSize:'14px'}}>
            A merger of the words food and technology — refers companies and
            projects use technologies to turn the traditional food businesses
            into a more modern, sustainable and efficient business models.
          </p>
          <div className="line"></div>
          <p style={{fontSize:"17", fontWeight:"600"}}>
            We’re indeed a Food Tech company and we’re using lot of technologies
            and precession machineries,
          </p>
          <ul style={{fontSize:'15px'}}>
            <li>To significantly reduce human dependency.</li>
            <li>To maintain zero food wastage.</li>
            <li>
              To maintain the consistency in taste and quality across all
              outlets.
            </li>
            <li>To reduce food costs, overheads and increase profitability.</li>
          </ul>
          <button className="orangeBtn">View Menu</button>
        </Col>
        <Col md={5} className="goodimg">
          <img src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/10/20221027204755_IMG_7187-01-scaled.jpeg?time=1700828283" alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default TheGrillax;
